// Arrays são listas de elementosa ou uma estrutura de dados maior.

const listaCompras = ["batata", "alface", "queijo"]
console.log(listaCompras);

// Arrays armazena elementos de qualquer tipo.
const meuArrayDiverso = ["banana", 15, true]
console.log(meuArrayDiverso);

// Arrays tem indices para "endereçar" seus elementos e SEMPRE começa em 0.
// const arrayFrutas = ["banana", "maçã", "tomate"]
//          índices  ->   0          1         2
// Para acessar este elemento, basta informar o seu endereço/índice.
// const segundoItem = arrayFrutas[2]

arrayFrutas = ["banana", "maçã", "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)

/////////////////////////////////////////////////////
// PROPIEDADES DE ARRAY
//
// Propriedade length: Nos diz qual é a quantidade de itens de um array

const pokemon = ["Bulbasaur", "Squirtle", "Charmander"]
const quantidadeItens = pokemon.length
console.log(quantidadeItens)