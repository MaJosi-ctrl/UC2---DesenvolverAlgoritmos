let velocidades = [89, 126, 90, 150, 98, 200]

let i = 0

let maisRapido = [0]

while(i < velocidades.length) {
    
    if(velocidades[i] > maisRapido){
        maisRapido = velocidades[i]
    }
    i++
}
    console.log(`O corredor mais rápido atingiu ${maisRapido} km/h!`)