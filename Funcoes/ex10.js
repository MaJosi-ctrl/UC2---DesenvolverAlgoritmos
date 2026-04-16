const prompt = require('prompt-sync')({sigint: true})

function gritar() {
  const texto = prompt('Digite o texto a ser gritado: ')
  console.log(texto.toUpperCase() + '!!!')
}

gritar()