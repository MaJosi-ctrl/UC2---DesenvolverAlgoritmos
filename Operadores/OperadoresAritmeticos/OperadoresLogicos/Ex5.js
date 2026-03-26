// Verificar se a pessoa pode jogar um jogo: 
// Conições: 
// - Precisa ter um controle (true)
// OU = ||
// - ter um console (true)

const controle = true
const consoleJogos = false

const podeJogar = controle || consoleJogos

console.log(podeJogar)
