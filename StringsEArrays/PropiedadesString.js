// A propriedade length de um string é a quantidade de caracteres que ele possui, incluindo espaços.

const nome = "Monkey D. Luffy";
console.log(nome.length); 

/////////////////////////////////////////////////
// Método: toLowerCase() - Transforma todas as letras dastring em minúsculas.

const frase = "O día Está Lindooooooo DeMaIs!";
const fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);

/////////////////////////////////////////////////
// Método: toUpperCase() - Transforma todas as letras da string em maiúsculas.

const frase02 = "O día está Terminando!";
const fraseMaiuscula = frase02.toUpperCase();
console.log(fraseMaiuscula);

/////////////////////////////////////////////////
// Método: trim() - Remove os espaços em branco do início e do fim de uma string.

const email = "           senaquinho@senacrs.com        ";
console.log(email.trim())

//////////////////////////////////////////////////
// Método: includes() - Determina se um conjunto de caracteres pode ser encontrado dentro de uma outra string, retorna um valor booleano (true ou false).

const frase3 = "A força de um guerreiro não vem de vencer sozinho, mas de nunca desistir de lutar pelo que acredita";
console.log(frase3.includes("guerreiro")) 
console.log(frase3.includes("desiste")) 
console.log(frase3.includes("luta"))
console.log(frase3.includes("acreditar"))

