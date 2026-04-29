//=====================================
// OBJETOS
//=====================================
// Definição:
// Um objeto é uma coleção de "chaves" e "valores" (propiedades).
// É uma forma de organizar informações relacionadas dentro da única variável.

// Exemplo básico de objeto:
let pessoa = {
    nome: "Romario",
    idade: 56,
    profissao: "Corredor",
    gostaCoxinha: false,
    cidade: "São Leopoldo",
    hobbies: ['correr', 'escrever', 'criticar a sociedade da coxinha']
}

console.log(pessoa)

//=====================================
// ACESSANDO PROPIEDADES DE UM OBJETO
//=====================================

// Podemos acessar os valores de 2 formas:
// 1. Usando a notação de ponto:
console.log("Nome da pessoa: ", pessoa.nome)
console.log("Idade da pessoa: ", pessoa.idade)
// 2. Usando colchetes
console.log("Cidade da pessoa: ", pessoa["cidade"])

//=====================================
// ADICIONANDO OU ALTERANDO PROPRIEDADES
//=====================================

// Alternando uma propiedade já existente:
pessoa.profissao = "Desenvolvedor de sistemas"
console.log( "Objeto atualizado! Romario não e mais corredor, ele agora é ", pessoa.profissao)
// Adiciona uma nova propiedade
pessoa.time = "Brasil"
console.log ("Objeto atualizado! Nova propriedade time adicionada, o time é ", pessoa.time)

//=====================================
// Métodos em objetos

// Objetos podem ter funcções como propiedades, só que daí chamamos de métodos.
let carro = {
    marca: "Porsche",
    modelo: 911,
    ano: 2023,
    // método acelerar
    acelerar: function(){
        console.log( "O carro está acelerando! vrum vrum")
    },
    // método buzinar
    buzinar: function(){
        console.log( "BIBIBIBIBIBIBI!")
    }
}
console.log (carro.marca)
carro.acelerar()
carro.buzinar()


