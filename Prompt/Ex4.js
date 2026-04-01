const prompt = require('prompt-sync')()

let nome = prompt("Qual é o seu nome? ")
let idade = prompt("Qual é a sua idade? ")
let gosta = prompt("O que você gosta de fazer? ")
let animeFavorita = prompt("Qual é o seu anime favorito? ")
let serieFavorita = prompt("Qual é a sua série favorita? ")
let curiosidade = prompt("Conte uma curiosidade sobre você: ")
let timeFavorito = prompt("Qual é o seu time do coração? ")

console.log(`${nome}, tem ${idade} anos. Gosta de ${gosta}. Seu anime favorito é ${animeFavorita} e sua série favorita é ${serieFavorita}. Uma curiosidade sobre ela: ${curiosidade}. E seu time do coração é ${timeFavorito}.`)


