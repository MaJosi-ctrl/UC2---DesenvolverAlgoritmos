// ESTRUTURAS DE REPETIÇÃO (LOOPS OU LAÇOS)
//------------------------------------------
// Definição: Permitem executar um bloco de código várias vezes enquanto uma condição for verdadeira.
//------------------------------------------
// WHILE (Enquanto)

/* COMEÇO COMENTARIO --------------------------------------
// Exemplo:

//Variavel
let i = 0

// Estrutura While e a condição para ela executar
while (i < 10) {
        console.log(i)
        i++
} 

FECHO COMENTARIO-------------------------------------------*/ 


/* COMEÇO COMENTARIO --------------------------------------
// Exemplo 2: Lívia comendo coxinha
let estomago = 0
while ( estomago < 8) {
    console.log( "Lívia quer mais coxinha 🍗")
    estomago ++
}
FECHO COMENTARIO-------------------------------------------*/ 

/* COMEÇO COMENTARIO --------------------------------------
// Exemplo 3: Corbucci vai comer 100 coxinhas
let estomagoCorbucci = 0
while ( estomagoCorbucci < 100) {
    console.log( "CONSIGO COMER MAIS COXINHA 🍗")
    estomagoCorbucci = estomagoCorbucci + 10
}
FECHO COMENTARIO-------------------------------------------*/ 

/* COMEÇO COMENTARIO --------------------------------------
// WHILE (DECREMENTAR)
// Exemplo 4: Lançamento de foguete...
// Contagem regresiva...

let contador = 10 // começamos em 10

while (contador >= 0) { //enquanto for maior ou igual a 0
    console.log(contador) // mostra o número atual
    contador --

}
console.log("Foguete lançado 🚀")
FECHO COMENTARIO-------------------------------------------*/ 

/* COMEÇO COMENTARIO --------------------------------------
// PERCORRENDO ARRAYS COM WHILE

// Criamos uma array chamada "alunos"
let alunos = ["Robersvaldo", "Greyck", "AntoniNunes", "Dieberson"]
// Criamos uma vaiável de controle chamada "i" essa vaiável vai representar a posição atual do array e começa na posiçao 0
let i = 0
// Começamos un loop "while" que vai se repetir enquanto a condição for verdadeira.
// A condição aqui é: "i < alunos.length" "alunos.length" retorna o tamanho da array.
// Então, enquanto "i" for menos que o número de alunos, o loop continua
while(i < alunos.length) {
    // Dentro do loop, mostramos o aluno da posiçao "i"
    // "alunos[i]" acessa o elementop do array na posição "i"
    console.log(alunos[i])
    i++
}

FECHO COMENTARIO-------------------------------------------*/ 

/* COMEÇO COMENTARIO --------------------------------------
//=====================================
// FOR (PARA)
//=====================================
for(let i = 0; i < 5 ; i++){
    console.log("Repetição número: ", i)
    }
    // Explicando:
    // let i = 0 -> valor inicial
    // i < 5 -> condição (enquanto for verdadeira, repete)
    // i++ -> incremento (aumenta 1 a cada volta)

FECHO COMENTARIO-------------------------------------------*/ 
/*
//-------------------------
for(let i = 0; i <= 100; i++){
    // Verificando se o número é par ou ímpar (condicional)
    if( i % 2 === 0){// verifico se o número em i do laço for que está no momento é par
        console.log(i + " é par")
    } else {
        console.log(i + " é impar")
    }

    // Destaca números múltiplos de 5 (exeto 0)
    if ( i !== 0 && i % 5 === 0){
        console.log( "-> " + i + " é multiplo de 5")
    }
}
*/

/*
// Usando For para percorrer array
let numeros5 = [14, 67, 89, 15, 23]

for (let i = 0; i < 5; i++) {
    let elemento = numeros5[i]
    console.log(elemento)
}
*/

//-----------------------------------------------------------------
// for...of...
// Definição: O loop for...of percorre arrays e objetos, 
// alocando o valor de cada posição do array em uma variável,
// permitindo executar alguma ação para cada valor distinto.

/* COMEÇO COMENTARIO --------------------------------------
// Criamos uma array com alguns números
const numeros5 = [14,67,89,15,23]

// Usamos for...of para percorrer cada número da array
for(let numero of numeros5){
    // aqui, dentro do loop, 'numero' é cada elemento da array, um por vez
    console.log(numero) // Mostra o número no console
}
FECHO COMENTARIO-------------------------------------------*/ 

// Exemplos:
// Exemplo 1. Escolhendo aleatoriamente um lanche

// Començamos com uma array de lanches
let lanches = ["Pizza", "Arepa", "Hamburguer", "Hot-Dog", "Burritos", "Pastel",
 "Batata-frita", "Nuggets", "Morango", "Coxinha", "Suxhi", "Salgadinho", "Sorvetim"]

 // vamos percorrer cada lanche e escolher um aleatório
 for (let lanche of lanches){
    let chance = Math.random() // número aleatório entre 0 e 1
    if(chance> 0,5){
        console.log( `Vou comer ${lanche} hoje!`)
    }else{
        console.log( `hoje não vai dar para ${lanche}`)
    }
 }






