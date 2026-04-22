// Maior ou menor de idade com operador ternário
const prompt = require("prompt-sync")()

// Pede a idade do usuário
let idade = Number(prompt("Digite sua idade: "))
// usa o operador ternário
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)