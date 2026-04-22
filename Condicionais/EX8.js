let comando = "reiniciar"

switch (comando) {
    case "desligar":
        console.log("Desligando o sistema...")
        break
    case "reiniciar":
        console.log("Reiniciando...")
        break
    case "suspender":
        console.log("Entrando em modo de economia...")
        break
    default:
        console.log("Comando invalido😭")
}