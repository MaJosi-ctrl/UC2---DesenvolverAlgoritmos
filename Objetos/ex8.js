let jogo = {
    nome: "Omori",
    plataforma: "Steam",
    anoLancamento: "2020",

    jogar: function(){
        console.log( "Você começõu a jogar!")
    },

    resumir: function(){
        console.log("O jogo", jogo.nome, "foi lançado em", jogo.anoLancamento, "para", jogo.plataforma)
    }
}
jogo.jogar()
jogo.resumir()