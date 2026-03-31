const prompt = require('prompt-sync')()

let nome = prompt("Qual é o seu nome? ")
let idade = prompt("Qual é a sua idade? ")
let cidade = prompt("Qual é a sua cidade? ")

console.log(`Olá, ${nome}! Você tem ${idade} anos de idade e mora em ${cidade}.`)
