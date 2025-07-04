//### Dadi:
//- Generare due numeri casuali (giocatore e computer)
//- Confrontare i due numeri
//- Stampare chi ha vinto, pareggio o perso

//random number for the player (1-6)
const player = Math.floor (Math.random()*6) + 1;
console.log ("player" , player);


//random number for computer (1-6)

const computer= Math.floor (Math.random()*6) + 1;
console.log ("computer" , computer);

//comparison
if (player > computer) {
    console.log ("you won!");

} else if (player < computer){
    console.log ("you lost!");
}
