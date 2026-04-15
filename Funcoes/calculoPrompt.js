// importando a biblioteca
const prompt = require('prompt-sync')({sigint: true})

// Função que pede números, calcula e imprime
function calcularEimprimir() {
    const a = Number(prompt("Digite o primeiro número: "))
    const b = Number(prompt("Digite o segundo número: "))

    soma = a + b
    subtracao = a - b
    multiplicacao = a * b
    divisao = a / b
    modulo = a % b
    console.log("resultados: ")
    console.log(`Soma: ${soma}`)
    console.log(`Subtração: ${subtracao}`)
    console.log(`Multiplicação: ${multiplicacao}`)
    console.log(`Divisão: ${divisao}`)
    console.log(`Módulo: ${modulo}`)
}

calcularEimprimir()
