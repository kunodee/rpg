
function random_number(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored, minCeiled) + minCeiled);
  }

let user = {
    name: prompt("Inserisci il tuo nome da combattente: "),
    health: 100,
    attack: random_number(8, 15),
    potions: 3
}

console.log(user)