// Funções
// Uma função é um bloco de código que executa uma tarefa específica.
//
// Recebe algo (entrada ou parâmetros)
// Processa algo 
// Entrega um resultado (saída ou retorno)

//----------------------------------------
// 1. Função declarada (padrão e sem parâmetros)
// Declarando a função
function imprimirOlaMundo() {
    console.log("Olá, mundo!")// ação da função
}

// Chamada da função para executar 
imprimirOlaMundo() // executa a função

//----------------------------------------
// 2. Função com parâmetros
// Podemos passar informações para a função. Essas informações são os parametros que ela vai precisar para executar sua tarefa.
// Função que soma dois números
function somar(a, b) {
    return  a + b
}
// Chamada da função 
let resultado = somar(3256, 4839) 
console.log(resultado) 

//----------------------------------------