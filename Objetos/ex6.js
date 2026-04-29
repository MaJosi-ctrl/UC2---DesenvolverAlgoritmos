let celular = {
    marca: "Sansung",
    modelo: "S25",
    armazenamento: 259,

    ligar: function(){
        console.log( "O celular está ligado!")
    },

    tirarFoto: function(){
        console.log( "Clique! Foto tirada!")
    }
}
console.log (celular.marca, celular.modelo, celular.armazenamento,"Gb")
celular.ligar()
celular.tirarFoto()