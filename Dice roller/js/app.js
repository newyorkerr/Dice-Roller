//demander un nb a un utilisateur
const chosenNumberOfdice = parseInt(prompt("combien de dé veux-tu lançer?"));

for (let i = 0; i < chosenNumberOfdice; i++){ //pour i allant de 1 à chosenNumberOfdice
throwOnDice("#player");
throwOnDice("#dealer");

}

function throwOnDice(idSelector) {
    const divElement = document.createElement("div"); // Créer une div

divElement.classList.add("dice"); // Lui coller la classe `dice`

const parentElement = document.querySelector(idSelector); // 1. selectionner l'élément possédant l'id player
parentElement.appendChild(divElement); // 2. insérer dedans


const diceValue = generateRandomNumber(1, 6); //generer un nb aléatoire entre 1 et 6

//on deécale le back-pos-x selon valeur du diceValue

// diceValue 1 => 600px | 0px
// diceValue 2 => 500px | -100px 
// diceValue 3 => 400px | -200px
// diceValue 4 => 300px | -300px
// diceValue 5 => 200px | -400px
// diceValue 6 => 100px | -500px


switch (diceValue){
    case 1 : divElement.style.backgroundPositionX = "100px"; break;
    case 2 : divElement.style.backgroundPositionX = "200px"; break;
    case 3 : divElement.style.backgroundPositionX = "300px"; break;
    case 4 : divElement.style.backgroundPositionX = "400px"; break;
    case 5 : divElement.style.backgroundPositionX = "500px"; break;
    case 6 : divElement.style.backgroundPositionX = "600px"; break;
    default: console.log("probleme avec la generation du nb aléatoire entre 1 et 6");
}

}
function generateRandomNumber(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

