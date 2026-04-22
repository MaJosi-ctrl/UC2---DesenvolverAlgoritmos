// Conta - switch case

// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")()
// Mostra um menu e pede para o usuário escolher uma opção

let opcao = prompt( "Escolha uma opção: \n 1 - Ver saldo \n 2 - Depositar \n 3 - Sair \n Digite: ")

// O switch compara o valor que o usuario vai fornecer
switch (opcao){
    // Caso o usuário digite 1
    case "1":
        console.log( "Seu saldo é R$ 100 🤑")
        break
    case "2":
        console.log( "Deposito realizado 💚")
        break
    case "3":
        console.log( "Saindo do sistema... 👋")
        break
}