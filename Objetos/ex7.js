let cachorro = {
    nome: "Sabo",
    idade: 3,
    raca: "Golden retriever",

    latir: function(){
        console.log( "Au Au!")
    },

    correr: function(){
        console.log( "O cachorro está correndo!")
    }
}
console.log ("O nome do cachorro é", cachorro.nome, "tem", cachorro.idade, "anos e é da raça", cachorro.raca)
cachorro.latir()
cachorro.correr()