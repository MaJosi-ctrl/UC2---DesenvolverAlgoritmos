let ingrediente1 = prompt("Digite o nome do ingrediente mágico: ");
let ingrediente2 = prompt("Escolha seu segundo ingrediente mágico para usar: ");

let gotas1 = prompt("Quantas gotas de " + ingrediente1 + " vai usar para misturar? ");
let gotas2 = prompt("Quantas gotas de " + ingrediente2 + " vai usar para misturar? ");

let totalGotas = Number(gotas1) + Number(gotas2);

alert("Você combinou os ingredientes magicos " + ingrediente1 + " e " + ingrediente2 + " usando " + totalGotas + " gotas magicas no total.");
