// Array com moedas coletadas em cada fase
let moedas = [20, 7, 40, 8, 24]
// Variável para percorrer o array
let i = 0
// Variável para guardar o total de moedas
let totalMoedas = 0
// Loop para somar todas as moedas
while(i < moedas.length) {
    // Adiciona as moedas do índice atual ao total
    totalMoedas += moedas[i]
    // Passa para a próxima quantidade de moedas
    i++
}
// Mostrar o total de moedas
console.log(`Você tem ${totalMoedas} moedas cara!`)