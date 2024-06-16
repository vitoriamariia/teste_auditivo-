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
  newText("<p>Ola! Seja bem-vindo ao nosso experimento!</p>")
    .print(),
  newText("<p>Por gentileza, selecione o CURSO que faz na UFERSA</p>")
    .print(),
  newDropDown("Selecione seu curso")
    .add("Engenharia", "Ciencias e Tecnologias", "Letras")
    .css("font-size", "1.2em")
    .print()
    .log(),
  newButton("Vamos para as instrucoes")
    .print()
    .wait()
);

newTrial("Instrucoes",
  newText("<p>Leia com atencao:</p>")
    .print(),
  newText("<p>Leia a situacao ficticia e leia em voz alta a frase em destaque</p>")
    .print(),
  newButton("Iniciar")
    .print()
    .wait()
);

newTrial("Experimento",
  newText("Imagine a seguinte situacao: voce encontra uma receita de macarrao gourmet no TikTok e resolve recriar essa receita. Suponha que voce seguiu a receita a risca, com todos os seus passos. Ao final, prova e gosta muito. Voce, entao, diz:")
    .print(),
  newText("Ficou muito gostoso, o macarrao")
    .css("font-weight", "bold")
    .print(),
  newButton("Proximo")
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
