const prompt = require('prompt-sync')()

let nome = prompt("Qual é o seu nome? ")
let saborPizza = prompt("Qual é o sabor de pizza que você quer? ")
let tamanhoPizza = prompt("Qual é o tamanho da pizza? ")

console.log(`Olá, ${nome}! Você pediu uma pizza de ${saborPizza} no tamanho ${tamanhoPizza}.`)