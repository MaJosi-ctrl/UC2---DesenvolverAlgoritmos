let pizza = 40
let qtpizza = 3

let refrigerante = 12
let qtrefrigerante = 2

let total = (pizza * qtpizza) + (refrigerante * qtrefrigerante)

let desconto = total * 0.10
let totalDesconto = total - desconto

let porPessoa = totalDesconto / 3

console.log(porPessoa.toFixed(2))
