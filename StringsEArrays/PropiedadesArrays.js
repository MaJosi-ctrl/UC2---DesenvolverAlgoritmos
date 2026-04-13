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

//--------------------------------------------------
// Propriedade ou Método includes (elemento): determina se um array contém um determinado elemento, sempre retorna um valor booleano (true ou false).

const seriesBoas = ["Breaking Bad", "Brooklyn Nine-Nine"]

const temBreakingBad = seriesBoas.includes("Breaking Bad")
const temGOT = seriesBoas.includes("Game of Thrones")

console.log("Na array seriesBoas, tem Breaking Bad? " + temBreakingBad)
console.log("Na array seriesBoas, tem GOT? " + temGOT)

//--------------------------------------------------
// Popiedade ou Método push (elemento): adiciona um ou mais elementos ao FINAL de um array.

const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)
numeros.push(5, 6, 7, 8)
console.log(numeros)

//--------------------------------------------------
// Propriedade ou Método unshift (elemento): adiciona um ou mais elementos ao INÍCIO de um array.

const cores = ["azul", "verde"]
cores.unshift("vermelho")
console.log(cores)

//--------------------------------------------------
// Propriedade ou Método shift (): remove o primeiro elemento de um array e retorna esse elemento.

let frutas = ["banana", "maçã", "laranja"]
console.log(frutas)
frutas.shift()
console.log(frutas)

//--------------------------------------------------
// Propriedade ou Método pop (): remove o último elemento de um array e retorna esse elemento.

let meusPeixes = ["palhaço", "mandarim", "esturjão"]
console.log(meusPeixes)
meusPeixes.pop()
console.log(meusPeixes)
