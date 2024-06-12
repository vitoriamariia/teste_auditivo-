PennController.ResetPrefix(null);

Sequence("Participantes", "Instrucoes", (randomize("Experimento"),SendResults()"Final");

Header(

  defaulttext
    .css("font-size","1.2em")
    .print()
  ,
  defaultTextInput
    .css("font-size","1.2em")
    .print()

  ,

  defaultButton
    .css("font-size","1.2em")
    .print()
    .center()
    .wait()

)

newTrial("Participante".
         
  newText("<p> Olá! Seja bem-vindo ao nosso experimento!)
                 
  newTextInput("Nome")
                 
  newText("<p> Por gentileza, informe o seu NOME COMPLETO e o CURSO que faz na UFERSA </p>"

  newDropDown("Curso que faz na Ufersa")
                        .add("Engenharia", "Letras")
                        .css("font-size", "1.2em")
                        .print
                        .log
,
          newButton("Iniciar")
          ,
          newVar("NOME")
          .global()
          .set( getTextInput("Nome"))
          )
      .log("NOME", getVar("NOME"))

          newTrial("Instrucoes",
                   newText("<p>INSTRUCOES:</p>")
                   ,
                   newText(<p>Ouça e clique</p>")
                   ,
                   newButton("Iniciar")
                   .log()
)

          Template("tabela_script_auditivo.csv",
            row => newTrial("Experimento",
                            newAudio("AudioExperimento", row.AudioExperimento)
                            .play
                            ,
                            newImage("alto_falante_Icone.png"
                                     .size(90,90)
                                     .print
                                     ,
                                     newButton("Próximo")
                                     .log()
                                     .remove()
                                     ,
                                     getImage("alto_falante_Image.png")
                                     .remove
                                     ,
                                     newText("A", row.SentencaA)
                                     ,
                                      newText("B", row.SentencaB)
                                     ,
                                     newCanvas("2000vw", "800vh")
                                     .add( "center at 25%", "middle at 2%", getText("A"))
                                      .add("center at 75% , middle at 2%, getText("B"))
                                      .print()
                                     ,
                            newSelector()
                            .add(getText("A"), getText("B"))
                            .keys("A","B")
                            .log()
                            .wait()
          )
          .log("Group", row.Group) 
          .log("Item", rowItem)
                            newTrial("Final",
                                     newText("Obrigada"
          )
          .setOption("countsForProgressBar", false)
