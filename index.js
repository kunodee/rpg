
function random_number(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let user = {
    name: prompt("Inserisci il tuo nome da combattente: "),
    health: 100,
    attack: random_number(15, 22),
    defense: random_number(6, 10),
    potions: 3
}

monsters = ["oblio", "cremisi", "guardiano", "mietitore", "oracolo", "titano", "cavaliereNero"]

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