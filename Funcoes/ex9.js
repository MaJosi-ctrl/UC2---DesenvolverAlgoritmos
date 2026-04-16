const prompt = require('prompt-sync')({sigint: true})

function anosAmeses() {
  const anos = Number(prompt('Digite a quantidade de anos: '))
  const meses = anos * 12
  console.log(`${anos} anos equivalem a ${meses} meses.`)
}

anosAmeses()