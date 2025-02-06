
function random_number(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let user = {
    name: prompt("Inserisci il tuo nome da combattente: "),
    health: random_number(10000, 15000),
    attack: random_number(9000, 12000),
    potions: 3
}

monsters = ["cremisi", "oblio"]

const cremisi = {
    name: "Drago dell'Abisso Cremisi",
    health: random_number(23000, 25000),
    attack: random_number(800, 1500),
    defense: random_number(300, 700),
    runaway: 30
}

const oblio = {
    name: "Reventant dell'Oblio",
    health: random_number(9000, 10500),
    attack: random_number(600, 1100),
    defense: random_number(200, 500),
    runaway: 80
}

let monster = monsters[random_number(0, monsters.length - 1)]

switch (monster) {
    case "cremisi":
        monster = cremisi
        break
    case "oblio":
        monster = oblio
        break
}

function statistics(){
    console.log(`STATS | ${monster.name}: ${monster.health} HP, ${monster.attack} ATK, ${monster.defense} DEF`)
    console.log(`STATS | ${user.name}: ${user.health} HP, ${user.attack} ATK, ${user.potions} PZ`)
}

console.log("")
console.log(`FIGHT | ${monster.name} ti ha attaccato!`)
statistics()
console.log("")