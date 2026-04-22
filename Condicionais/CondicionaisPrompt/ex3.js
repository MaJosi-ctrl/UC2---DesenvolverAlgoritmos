const prompt = require("prompt-sync")()
// Mostra um menu e pede para o usuário escolher uma opção

let opcao = prompt( "Você está no restaurante mais estranho que existe!! \n Escolha um número entre 1 e 5 e descubra o prato maluco que voce ganhou: ")

// O switch compara o valor que o usuario vai fornecer
switch (opcao){
    // Caso o usuário digite 1
    case "1":
        console.log( "Pizza de sorvete")
        break
    case "2":
        console.log( "Hambúrguer de gelatina")
        break
    case "3":
        console.log( "Suchi de chocolate")
        break
    case "4":
        console.log( " Batata frita com Calda de morango")
        break
    case "5":
        console.log( "Spagheti de Bala4")
        break
}