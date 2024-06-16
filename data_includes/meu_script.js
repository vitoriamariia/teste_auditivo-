PennController.ResetPrefix(null);

Sequence("Participantes", "Instrucoes", randomize("Experimento"), "Final");

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
  newText("<p> Por gentileza, informe o CURSO que faz na UFERSA </p>")
    .print(),
  newDropDown("Curso que faz na UFERSA")
    .add("Engenharia", "Letras")
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
  newText("<p>INSTRUÇÕES:</p>")
    .print(),
  newText("<p>Ouça e clique</p>")
    .print(),
  newButton("Iniciar")
    .print()
    .wait()
);

Template("tabela_script_auditivo.csv",
  row => newTrial("Experimento",
    newAudio("AudioExperimento", row.AudioExperimento)
      .play(),
    newImage("alto_falante_Icone.png")
      .size(90, 90)
      .print(),
    newButton("Próximo")
      .log()
      .remove(),
    getImage("alto_falante_Icone.png")
      .remove(),
    newText("A", row.SentencaA),
    newText("B", row.SentencaB),
    newCanvas("2000vw", "800vh")
      .add("center at 25%", "middle at 2%", getText("A"))
      .add("center at 75%", "middle at 2%", getText("B"))
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
  newText("Obrigada")
    .print(),
  newButton("Finalizar")
    .print()
    .wait()
)
.setOption("countsForProgressBar", false);
