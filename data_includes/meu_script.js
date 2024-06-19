PennController.ResetPrefix(null);
PennController.DebugOff();


Sequence("Participantes", "Instrucoes", randomize("Experimento"), SendResults(),"Final");

Header(
  defaultText
    .css("font-size", "1.2em")
    .print(),
  defaultTextInput
    .css("font-size", "1.2em")
    .print(),
  defaultButton
    .css("font-size", "1.2em")
    .print()
    .center()
    .wait()
);

newTrial("Participantes",
  newText("<p>Ola! Seja bem-vindo ao nosso experimento!</p>"),
         
  newText("<p>Por gentileza, escreva o SEU NOME COMPLETO NA CAIXA ABAIXO"),
         
  newTextInput("Seu nome"),
  
  newText("<p>Por gentileza, selecione o CURSO que faz na UFERSA</p>").
    
  newDropDown("Selecione seu curso")
    .add("Engenharia", "Ciencias e Tecnologias", "Letras")
    .css("font-size", "1.2em")
    .print()
    .log(),
         
  newButton("Vamos para as instrucoes")
    .print()
    .wait()
    .log(),

  newVar("NOME")
    .global
    .set(getTextInput("Seu nome"))
  )
.log( "NOME", getVar(NOME"))
         
);

newTrial("Instrucoes",
  newText("<p>Leia com atencao:</p>")
    .print(),
  newText("<p>Leia a situacao ficticia e leia em voz alta a frase em destaque</p>")
    .print(),
  newButton("Iniciar")
    .log()
);

Template("teste_auditivo.csv",
  row =>  newTrial("Experimento",
    newAudio("AudioExperimento",row,AudioExperimento)
     .play(),
                   
    newImage("alto_falante_icone.png")
     .size( 90 , 90)
     .print(),
    newButton("Próximo")
      .log()
      .remove(),
    getImage(alto_falante_icone.png)
      .remove(),
    newText("A", row.SentencaA),
    newText("B", row.SentencaB),
    newCanvas("2000vw", "800vw")
      .add("center at 25%", "middle at 2%", getText("A"))
      .add("center at 75%", "middle at 2%", getText("B"))
      .print(),

    newSelector()
      .add(getText("A"), getText("B"))
      .keys("A","B")
      .log
      .wait
      )
    .log("Group",rowGroup)
    .log("Item". row.Item))
                  
  newTrial("Experimento2")
  newText("Imagine a seguinte situacao: voce encontra uma receita de macarrao gourmet no TikTok e resolve recriar essa receita. Suponha que voce seguiu a receita a risca, com todos os seus passos. Ao final, prova e gosta muito. Voce, entao, diz:")
     .print(),
  newText("Ficou muito gostoso, o macarrao")
     .css("font-weight", "bold")
     .print(),
  newButton("Proximo")
     .print()
     .wait()
     .log()
);

newTrial("Final",
  newText("Obrigada por participar do experimento!")
    .print(),
  newButton("Finalizar")
    .print()
    .wait()
    .log()
)
.setOption("countsForProgressBar", false);
