PennController.ResetPrefix(null);
PennController.DebugOff();

// Define a sequência dos trials
Sequence("participantes", "audio1", "fim");

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
        .callback(() => newTimer("responseTimer1").start()), 
    
    newText("question1", "Escolha a melhor resposta para o áudio")
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
            newLog("responseTime1", newTimer("responseTimer1").getTime()); 
        })
);

newTrial("fim",
    newText("Thank you", "Thank you for participating. Press any key to finish.")
        .print()
        .wait()
);

SendResults("send");
