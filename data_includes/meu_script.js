PennController.ResetPrefix(null);
PennController.DebugOff();

Sequence("Participantes", "Instrucoes", "TestePerceptivo", "Experimento1", "Experimento2", "Final", SendResults());

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
  newText("Ola! Seja bem-vindo ao nosso experimento!")
    .print(),
  newText("Por gentileza, escreva o SEU NOME COMPLETO NA CAIXA ABAIXO")
    .print(),
  newTextInput("SeuNome")
    .print()
    .log(),
  newText("Por gentileza, selecione o CURSO que faz na UFERSA")
    .print(),
  newDropDown("curso", "Selecione seu curso")
    .add("Engenharia", "Ciencias e Tecnologias", "Letras")
    .css("font-size", "1.2em")
    .print()
    .log(),
  newButton("Vamos para as instrucoes")
    .print()
    .wait()
);

newTrial("Instrucoes",
  newText("Leia com atenção:")
    .print(),
  newText("Leia a situação fictícia e leia em voz alta a frase em destaque")
    .print(),
  newButton("Iniciar")
    .print()
    .wait()
);

newTrial("TestePerceptivo",
  Template("teste_auditivo.csv",
    row => newTrial("TestePerceptivo",
      newText("Qual a melhor interpretação?")
        .print(),
      newButton("Esquerda")
        .css("font-size", "1.2em")
        .print()
        .left()
        .wait()
        .log(),
      newButton("Direita")
        .css("font-size", "1.2em")
        .print()
        .right()
        .wait()
        .log(),
      newCanvas("canvas", 1000, 500)
        .add(250, 250, newText("A", row.SentencaA).css("font-size", "1.2em"))
        .add(750, 250, newText("B", row.SentencaB).css("font-size", "1.2em"))
        .print(),
      newSelector()
        .add(getText("A"), getText("B"))
        .keys("A", "B")
        .log()
        .wait()
    )
    .log("Group", row.Group)
    .log("Item", row.Item)
  )
);

newTrial("Experimento1",
  newText("Aqui seria o Experimento1...")
    .print(),
  newButton("Próximo")
    .print()
    .wait()
);

newTrial("Experimento2",
  newText("Aqui seria o Experimento2...")
    .print(),
  newButton("Próximo")
    .print()
    .wait()
);

newTrial("Final",
  newText("Obrigada por participar do experimento!")
    .print(),
  newButton("Finalizar")
    .print()
    .wait()
)
.setOption("countsForProgressBar", false);
