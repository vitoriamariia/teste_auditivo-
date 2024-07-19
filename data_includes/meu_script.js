PennController.ResetPrefix(null);
PennController.DebugOff();

// Define a sequência dos trials
Sequence("participantes", "audio1", "fim");

// Trial de introdução
newTrial("participantes",
    newText("Bem-vindos", "Pressione o botão 'Continuar' para iniciar.")
        .print(),
    newButton("continuar", "Continuar")
        .print()
        .wait()
);

// Trial com o áudio e medição do tempo de resposta
newTrial("audio1",
    newTimer("responseTimer1"), // Temporizador para medir o tempo de resposta
    newAudio("audio1", "path/to/audio1.wav") // Substitua com o caminho correto para o áudio
        .print()
        .play()
        .wait()
        .callback(() => newTimer("responseTimer1").start()), 
    
    newText("question1", "Escolha a melhor resposta para o áudio:")
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
            newTimer("responseTimer1").stop(); 
            newLog("responseTime1", newTimer("responseTimer1").getTime()); // Registra o tempo de resposta
        })
);

newTrial("fim",
    newText("Thank you", "Thank you for participating. Press any key to finish.")
        .print()
        .wait()
);

SendResults("send");
