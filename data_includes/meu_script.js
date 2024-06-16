PennController.ResetPrefix(null);

Sequence("Participantes", "Instrucoes", randomize("Experimento1"), "Final");

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
  .add("Engenharia", "Ciencias e Tecnologias", "Letras")
    .css("font-size", "1.2em")
    .print()
    .log(),
  newButton("Vamos para as instruções")
    .print()
    .wait(),
);

newTrial("Instrucoes",
  newText("<p>Leia com atencao:</p>")
    .print(),
  newText("<p>Leia a situação fictícia e leia em voz alta a frase em destaque</p>")
    .print(),
  newButton("Iniciar")
    .print()
    .wait()
);

newTrial("Experimento1",
  newText("Imagine a seguinte situação: você encontra uma receita de macarrão gourmet no TikTok e resolve recriar essa receita. Suponha que você seguiu a receita à risca, com todos os seus passos. Ao final, prova e gosta muito. Você, então, diz:")
  .print(),
  newText("Ficou muito gostoso, o macarrão")
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
