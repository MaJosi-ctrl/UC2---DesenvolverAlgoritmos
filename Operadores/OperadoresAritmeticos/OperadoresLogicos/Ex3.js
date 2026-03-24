// Verificar se a pessoa pode usar cupom: 
// Conições: 
// - Precisa gastar acima de R$ 100 (> 100)
// OU = ||
// - Ser cliente VIP (true)

const valorCompra = 200
const clienteVIP = false

const podeUsarCupom = valorCompra > 100 || clienteVIP

console.log(podeUsarCupom)
