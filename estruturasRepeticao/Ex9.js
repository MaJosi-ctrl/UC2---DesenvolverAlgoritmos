let numeros = [45, 89, 73, 12, 98, 59]

let i = 0

let maiorTesouro = [0]

while(i < numeros.length) {
    
    if(numeros[i] > maiorTesouro){
        maiorTesouro = numeros[i]
    }
    i++
}
    console.log(`O maior tesouro é ${maiorTesouro} ! Você ficou rico 🤑`)
