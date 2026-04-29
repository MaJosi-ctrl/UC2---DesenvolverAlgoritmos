let filme = {
    nome: "Até o Último Homem",
    anoLancamento: 2016 ,
    direcao: "Mel Gibson",
    viuFilme: true,
    elenco: ['Andrew Garfield', 'Luke Bracey', 'Vince Vaughn', 'Teresa Palmer']
}

console.log("nome do filme: ", filme.nome)
console.log("ano do alnçamento: ", filme.anoLancamento)


console.log("direção: ", filme["direcao"])
console.log("elenco: ", filme["elenco"])
console.log("já assisti o filme?: ", filme["viuFilme"])