const prompt = require('prompt-sync')({sigint: true})

function calcularArea() {
  const b = (prompt('Digite a largura do retângulo: '))
  const h = (prompt('Digite a altura do retângulo: '))
  const a = b * h
  console.log(`A área do retângulo é: ${a}`)
}

calcularArea()
