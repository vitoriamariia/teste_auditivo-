PennController.ResetPrefix(null);
PennController.DebugOff();

// Define a sequência dos trials
Sequence("participantes", "audio1", "audio2", "fim");

// Trial de introdução
newTrial("participantes",
    newText("Bem-vindos", "Pressione o botão "continuar")
    newbutton("continuar")
        .print()
        .wait()
);

newTrial("audio1",
    newTimer("responseTimer1"), // 
    newAudio("a1", "path/to/a1.wav") 
        .print()
        .play()
        .wait()
        .callback(() => newTimer("responseTimer1").start()), // Inicia o temporizador após o áudio terminar
    
    newText("question1", "Choose the best response for the first audio:")
        .print(),
    
    newRow(
        newButton("response1a", "Response A1")
            .print(),
        newButton("response1b", "Response A2")
            .print(),
        newButton("response1c", "Response A3")
            .print()
    ),
    
    newButton("submit1", "Submit")
        .print()
        .wait()
        .callback(() => {
            newTimer("responseTimer1").stop(); // Para o temporizador quando a resposta é dada
            newLog("responseTime1", newTimer("responseTimer1").getTime()); // Registra o tempo de resposta
        })
);

// Trial com o segundo áudio WAV e medição do tempo de resposta
newTrial("audio2",
    newTimer("responseTimer2"), // Temporizador para o segundo áudio
    newAudio("a2", "path/to/a2.wav") // Substitua com o caminho correto para o áudio a2.wav
        .print()
        .play()
        .wait()
        .callback(() => newTimer("responseTimer2").start()), // Inicia o temporizador após o áudio terminar
    
    newText("question2", "Choose the best response for the second audio:")
        .print(),
    
    newRow(
        newButton("response2a", "Response B1")
            .print(),
        newButton("response2b", "Response B2")
            .print(),
        newButton("response2c", "Response B3")
            .print()
    ),
    
    newButton("submit2", "Submit")
        .print()
        .wait()
        .callback(() => {
            newTimer("responseTimer2").stop(); // Para o temporizador quando a resposta é dada
            newLog("responseTime2", newTimer("responseTimer2").getTime()); // Registra o tempo de resposta
        })
);

// Trial de finalização
newTrial("end",
    newText("Thank you", "Thank you for participating. Press any key to finish.")
        .print()
        .wait()
);

// Envia os resultados
SendResults("send");
