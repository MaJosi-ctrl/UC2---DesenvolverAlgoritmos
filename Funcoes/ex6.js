// importando a biblioteca
const prompt = require('prompt-sync')({sigint: true})

function poderFavorito() {
    const poder = prompt("Digite o seu poder favorito: ")

    console.log(`Uau! ser capaz de ${poder} seria incrível!`)
}
poderFavorito()