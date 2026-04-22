const prompt = require('prompt-sync')()

let numero = Number (prompt("Digite o codigo de acesso: "))

// condicionais if/else
if (numero === 777){
 console.log( "Acesso liberado")
} else {
    console.log( "ALARME ATIVADO")
}

