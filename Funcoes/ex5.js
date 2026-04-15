// Conversor de moeda
//----------------------------------
// forma 1
//----------------------------------

function converter(valor){
    const dolar = valor * 0.20
    const bolivar = valor * 95.5
    const euro = valor * 0.17

    console.log("dolar: " + dolar.toFixed(1))
    console.log("bolivar: " + bolivar.toFixed(1))
    console.log("euro: " + euro.toFixed(1))
}

converter(3000)

//----------------------------------
// forma 2
//----------------------------------    
function converterMoneda(valor, taxaCambio) {
    const valorConvertido = valor * taxaCambio
    console.log(`O valor convertido é: ${valorConvertido.toFixed(1)}`)
}

// exemplo de uso (DOLAR = 0.20, EURO = 0.17, BOLIVAR = 95,5)
converterMoneda(100, 0.20)
converterMoneda(100, 0.17)
converterMoneda(100, 95.5)