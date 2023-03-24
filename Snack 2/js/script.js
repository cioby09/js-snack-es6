// Consegna

// Snack 2:

// Creare un array di oggetti di squadre di calcio.

// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo l'array delle squadre
let teamsArray = [
    {
        name: "Lazio",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0
    },
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0
    }
];



// Functions
// Genera un numero intero casuale
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// Genero numeri casuali per i falli e i punti
teamsArray.forEach(element => {
    element.points = getRandomInt(41, 71);
    element.fouls = getRandomInt(270, 400);
    return element;
});

// Creo un nuovo array che contenga solo i nomi e i falli commessi delle squadre
teamsNameFoulArray =[];

teamsArray.forEach(element => {
    const {name, points, fouls} = teamsArray;
    teamsNameFoulArray.push(element.name, element.fouls);
    console.log(element.name);
    console.log(element.fouls);
});

// Stampo su console
console.log(teamsNameFoulArray);

// Stampo nel DOM (Bonus)
const container = document.querySelector(".container");

for (let i = 0; i < teamsArray.length; i++) {
    const name = teamsArray.map(element=> element.name);
    const fouls = teamsArray.map(element=> element.fouls);

    const teamItem = 
    `<div class="team-item">
        <h1>${name[i]}</h1>
        <h2>Falli commessi: ${fouls[i]}</h2>
    </div>`;

    container.innerHTML += teamItem;
};