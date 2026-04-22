const prompt = require("prompt-sync")()
// Mostra um menu e pede para o usuário escolher uma opção

let opcao = prompt( "Escolha um portal: \n F - Floresta \n D - Deserto \n G - Gelo \n Digite: ")

// O switch compara o valor que o usuario vai fornecer
switch (opcao){
    // Caso o usuário digite 1
    case "F":
        console.log( "VOCÊ ESCOLHEU O PORTAL DA FLORESTA!")
        break
    case "D":
        console.log( "VOCÊ ESCOLHEU O PORTAL DO DESERTO!")
        break
    case "G":
        console.log( "VOCÊ ESCOLHEU O PORTAL DE GELO!")
        break
}