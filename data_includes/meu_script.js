PennController.ResetPrefix(null);

Sequence("Participantes", "Instrucoes", "Experimento", "Final");

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

// Tela de identificação do participante
newTrial("Participantes",
  newText("<p>Olá! Seja bem-vindo ao nosso experimento!</p>")
    .print(),
  newText("<p>Por gentileza, selecione o CURSO que faz na UFERSA</p>")
    .print(),
  newDropDown("Curso")
    .add("Engenharia", "Ciências e Tecnologias", "Letras")
    .css("font-size", "1.2em")
    .print()
    .log(),
  newButton("Vamos para as instruções")
    .print()
    .wait(
      getDropDown("Curso").test.selected()  // Certifique-se de que um curso foi selecionado
    )
    .setVar("Curso", getDropDown("Curso"))  // Armazena o curso na variável global
);

// Tela de instruções
newTrial("Instrucoes",
  newText("<p>Leia com atenção:</p>")
    .print(),
  newText("<p>Leia a situação fictícia e leia em voz alta a frase em destaque</p>")
    .print(),
  newButton("Iniciar")
    .print()
    .wait()
);

// Tela de experimento
newTrial("Experimento",
  newText("Imagine a seguinte situação: você encontra uma receita de macarrão gourmet no TikTok e resolve recriar essa receita. Suponha que você seguiu a receita à risca, com todos os seus passos. Ao final, prova e gosta muito. Você, então, diz:")
    .print(),
  newText("Ficou muito gostoso, o macarrão")
    .css("font-weight", "bold")
    .print(),
  newButton("Próximo")
    .print()
    .wait()
)
.log("Curso", getVar("Curso"));

// Tela de agradecimento
newTrial("Final",
  newText("Obrigada por participar do experimento!")
    .print(),
  newButton("Finalizar")
    .print()
    .wait()
)
.setOption("countsForProgressBar", false);
