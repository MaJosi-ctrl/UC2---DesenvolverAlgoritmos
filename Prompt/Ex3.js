const prompt = require('prompt-sync')()

let nome = prompt("Qual é o nome do personagem? ")
let profissão = prompt("Qual é a sua profissão? ")
let arma = prompt("Qual é a arma/objeto que ele usa? ")

console.log(`Olá, meu nome é ${nome}! Eu sou um ${profissão} e uso ${arma}.`)
