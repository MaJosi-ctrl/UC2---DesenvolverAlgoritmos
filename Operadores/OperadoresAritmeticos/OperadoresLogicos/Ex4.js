// Verificar se a pessoa pode estacionar em uma vaga de estacionamento: 
// Conições: 
// - Precisa ser um idoso (true)
// OU = ||
// - Ter uma deficiência (true)

const idoso = true
const deficiencia = false

const podeEstacionar = idoso || deficiencia

console.log(podeEstacionar)