const senha = true // indica se a pessoa tem a senha correta

const alcanceDaRede = true // indica se a pessoa está dentro do alcance da rede

const podeAcessar = senha && alcanceDaRede
console.log(podeAcessar)