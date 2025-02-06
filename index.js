
function random_number(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let user = {
    name: prompt("Inserisci il tuo nome da combattente: "),
    health: 100,
    attack: random_number(19, 25),
    defense: random_number(6, 10),
    potions: 3
}

monsters = ["oblio", "guardiano", "mietitore", "oracolo", "titano", "cavaliereNero"]

const oblio = {
    name: "Revenant dell’Oblio",
    health: random_number(120, 180),
    attack: random_number(40, 60),
    defense: random_number(8, 18),
    runaway: 40
};

const guardiano = {
    name: "Guardiano dell’Ombra Infranta",
    health: random_number(180, 250),
    attack: random_number(55, 80),
    defense: random_number(12, 26),
    runaway: 25
};

const mietitore = {
    name: "Bestia della Mietitura Eterna",
    health: random_number(140, 200),
    attack: random_number(45, 70),
    defense: random_number(9, 22),
    runaway: 35
};

const oracolo = {
    name: "Oracolo della Luna Insanguinata",
    health: random_number(130, 190),
    attack: random_number(42, 65),
    defense: random_number(7, 20),
    runaway: 38
};

const titano = {
    name: "Titano dell’Ultimo Sigillo",
    health: random_number(200, 280),
    attack: random_number(60, 90),
    defense: random_number(14, 30),
    runaway: 20
};

const cavaliereNero = {
    name: "Cavaliere del Sole Nero",
    health: random_number(170, 240),
    attack: random_number(55, 85),
    defense: random_number(12, 28),
    runaway: 25
};

let monster = monsters[random_number(0, monsters.length - 1)]

switch (monster) {
    case "oblio":
        monster = oblio
        break
    case "guardiano":
        monster = guardiano
        break
    case "mietitore":
        monster = mietitore
        break
    case "oracolo":
        monster = oracolo
        break
    case "titano":
        monster = titano
        break
    case "cavaliereNero":
        monster = cavaliereNero
        break
}

function printActionMonster(monster_name, message){
    console.log(`🔹 %cFIGHT %c|%c ${monster_name}%c ${message}`, "color: red", "color: gray", "color: blue", "color: red");
}

function printUserAction(message, success){
    if (success)
        console.log(`🔹 %cFIGHT %c|%c ${message}`, "color: red", "color: gray", "color: green")
    else
        console.log(`🔹 %cFIGHT %c|%c ${message}`, "color: red", "color: gray", "color: red")
};

function statistics(){
    console.log(`🔹 %cSTATS %c|%c ${monster.name}: ${monster.health} HP, ${monster.attack} ATK, ${monster.defense} DEF!`, "color: yellow", "color: gray", "color:red");
    console.log(`🔹 %cSTATS %c|%c ${user.name}: ${user.health} HP, ${user.attack} ATK, ${user.defense} DEF, ${user.potions} PZ`, "color: yellow", "color: gray", "color:green");
    console.log("")
}

function attack(){
    let damage = user.attack - monster.defense
    if (damage < 0) {
        damage = 0
    }
    monster.health -= damage
    if (monster.health < 0) {
        monster.health = 0
    }
    printUserAction(`${user.name} attacca ${monster.name} infliggendo ${damage} danni!`, true);
}

function heal(){
    let heal = random_number(10, 35)
    if (user.potions == 0) {
        printUserAction(`${user.name} non ha più pozioni!`, false);
        return
    }
    user.health += heal
    user.potions--
    printUserAction(`${user.name} si cura di ${heal}hp, pozioni rimaste ${user.potions}!`, true);
}

function run(){
    let runaway = random_number(0, 100)
    if (runaway <= monster.runaway){
        printUserAction(`${user.name} è riuscito a scappare!`, true)
        fight_over = true
    } else {
        printUserAction(`${user.name} non è riuscito a scappare!`, false)

    }
}

function contrattack(){
    let damage = monster.attack - user.defense
    user.health -= damage
    if (user.health < 0) {
        user.health = 0
    }
    printActionMonster(monster.name, `attacca ${user.name} infliggendo ${damage} danni!`)
}

console.log("")
printActionMonster(monster.name, `è apparso!`)
statistics()

fight_over = false

let action = ""

do {

    if (action == "attaccare") {
        attack()
        contrattack()
        statistics()
    }

    if (action == "curarti") {
        heal()
        contrattack()
        statistics()
    }

    if (action == "scappare") {
        run()
        if (!fight_over){
            contrattack()
            statistics()
        }
    }

    if (user.health == 0) {
        console.log(`🔹 %cEND %c|%c ${user.name} è stato sconfitto! Hai perso.`, "color: red", "color: gray", "color: red")
        fight_over = true
    }

    if (monster.health == 0) {
        console.log(`🔹 %cEND %c|%c ${user.name} è stato sconfitto! Hai vinto!`, "color: red", "color: gray", "color: green")
        fight_over = true
    }

    if (action == "esci") {
        console.log(`🔹 %cEND %c|%c ${user.name} ha abbandonato il combattimento!`, "color: red", "color: gray", "color: yellow")
        fight_over = true
    }

    if (!fight_over) {
        console.log("%c🔹 È il tuo turno! 🔹", "color: yellow; font-weight: bold;");
        console.log("")
        action = prompt("Cosa vuoi fare? (attaccare, curarti, scappare, esci): ")
    }

} while (!fight_over)