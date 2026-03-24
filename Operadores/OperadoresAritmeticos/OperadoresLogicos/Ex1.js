// Operadores Lógicos - Utilizados geralmente para testar

/* - Operador E (tudo deve ser verdadeiro). Representamos com : &&

- Operador OU (Uma condição sendo verdadeira ja basta). Representamos com : || 

- Operador NAO (Inverte o valor). Representamos com : !


*/

const idade = 44 // idade da pessoa

const temAssinatura = true // indica se a pessoa tem assinatura ativa

// Verificar se a pessoa pode acessar 
// Conições: 
// - Precisa ser maior ou igual a 18 anos (>= 18)
// E = &&
// - Ter assinatura ativa (true)

const podeAcessar = idade >= 18 && temAssinatura
console.log(podeAcessar) // false, pois a pessoa tem 16 anos


