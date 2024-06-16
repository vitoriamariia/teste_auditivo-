PennController.ResetPrefix(null);

Sequence("Participantes", "Instrucoes", "Experimento1", randomize("Experimento2"), "Final");

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
  newText("<p> Olá! Seja bem-vindo ao nosso experimento!</p>")
    .print(),
  newText("<p> Por gentileza, informe o seu NOME COMPLETO e o CURSO que faz na UFERSA </p>")
    .print(),
  newTextInput("Nome")
    .print()
    .log(),
  newDropDown("Curso que faz na UFERSA")
  .add("Engenharia", "Ciencias e Tecnologias", "Letras")
    .css("font-size", "1.2em")
    .print()
    .log(),
  newButton("Iniciar")
    .print()
    .wait(),
  newVar("NOME")
    .global()
    .set(getTextInput("Nome"))
)
.log("NOME", getVar("NOME"));

newTrial("Instrucoes",
  newText("<p>Leia com atencao:</p>")
    .print(),
  newText("<p>Ouça o áudio e clique no botão para continuar.</p>")
    .print(),
  newButton("Iniciar")
    .print()
    .wait()
);

newTrial("Experimento1",
  newImage("alto_falante_Icone.png")
    .size(90, 90)
    .print(),
  newButton("Próximo")
    .print()
    .wait()
);

Template("tabela_script_auditivo.csv",
  row => newTrial("Experimento2",
    newAudio("AudioExperimento", row.AudioExperimento)
      .play(),
    newImage("alto_falante_Icone.png")
      .size(90, 90)
      .print(),
    newButton("Próximo")
      .log()
      .wait()
      .remove(),
    getImage("alto_falante_Icone.png")
      .remove(),
    newText("A", row.SentencaA)
      .print(),
    newText("B", row.SentencaB)
      .print(),
    newCanvas("2000vw", "800vh")
      .add("center at 25%", "middle at 50%", getText("A"))
      .add("center at 75%", "middle at 50%", getText("B"))
      .print(),
    newSelector()
      .add(getText("A"), getText("B"))
      .keys("A", "B")
      .log()
      .wait()
  )
  .log("Group", row.Group)
  .log("Item", row.Item)
);

newTrial("Final",
  newText("Obrigada por participar do experimento!")
    .print(),
  newButton("Finalizar")
    .print()
    .wait()
)
.setOption("countsForProgressBar", false);
