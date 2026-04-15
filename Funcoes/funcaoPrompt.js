// Importar a biblioteca 
const prompt = require('prompt-sync')({sigint: true})
// função simples para cumprimentar o usuário
function cumprimentarUsuario() {
    // pede o nome do usuário
    const nome = prompt("Digite seu nome cara: ")

    // mostra uma saudação personalizada
    console.log(`Olá, ${nome}! Bem-vindo(a) a turma TDS261T!`)
}

// Chamada da função 
cumprimentarUsuario()