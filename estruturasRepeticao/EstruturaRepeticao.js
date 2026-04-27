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





