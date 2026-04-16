// ESTRUTURAS CONDICIONAIS EM JAVASCRIPT
//-------------------------------------
// Definição: Permitem executar códigos diferentes dependendo de certas condições
//-------------------------------------

//IF (se)

let idade = 18
if (idade >= 18) {
    console.log("Você é maior de idade.")
} 

// O codigo dentro do bloco {} só será executado se a condição for verdadeira.
//---------------------------------------
// ELSE (senão)

let idade2 = 16
if (idade2 >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

// O else é executado apenas quando a condição do if é falsa.
//---------------------------------------
// ELSE IF (senão se)   

let nota = 75
if (nota >= 90) {
    console.log("Parabéns! Você não e um cavaloo, e tirou A!")
} else if (nota >= 70) {
    console.log("Você tirou B!")
} else if (nota >= 50) {
    console.log("Você tirou C!")
} else if (nota > 40) {
    console.log("Você e um cavaloo")
}

//--------------------------------------
// OPERADORES LÓGICOS
// && -> E
// || -> OU
//  ! -> NÃO

let idade3 = 20
let temCarteira = true

if (idade3 >= 18 && temCarteira){
    console.log(" No puede 🥺")
}
