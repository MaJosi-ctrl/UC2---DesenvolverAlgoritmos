const prompt = require('prompt-sync')({sigint: true})

function apelido() {
 nome = prompt("Digite o seu nome: ")
 animal = prompt("Digite o um animal: ")

 console.log(`Seu novo apelido é ${nome} ${animal}!`)
}
apelido()