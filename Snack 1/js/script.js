// Consegna

// Snack 1

// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


// Creo l'array di oggetti
const bikesArray = [
    {
        name: "Rockrider",
        weight: 15
    },
    {
        name: "Riverside",
        weight: 26
    },
    {
        name: "Btwin",
        weight: 14
    },
    {
        name: "Elops",
        weight: 19
    },
    {
        name: "Braih",
        weight: 35
    }
];

const bikesList = document.querySelector(".bikes");

// Creo un ciclo che stampi la lista delle bici
    for (let i = 0; i < bikesArray.length; i++) {
    const name = bikesArray.map(element=> element.name);
    const weight = bikesArray.map(element=> element.weight);

    const bikeItem =
    `<div class="bike-item">
        <h1>Nome modello: ${name[i]}</h1>
        <h2>Peso: ${weight[i]} kg</h2>
    </div>`;

    bikesList.innerHTML += bikeItem;
};

// Creo un array che contenga i pesi delle varie biciclette
let weightArray = [];

bikesArray.forEach(element => {
    const {name, weight} = bikesArray;
    weightArray.push(element.weight);
});


let small = weightArray[0];
// Attribusico ad una variabile il peso minore dell'array dei pesi
weightArray.forEach(element =>{
    if (element < small){
        small = element;
    }
})

let lighterBike = "";

bikesArray.forEach(element => {
    // Se il peso dell'elemento corrisponde a quello del peso minore allora la bici più leggera corrisponde a quel elemento
    if (element.weight === small){
        lighterBike = element;
    }
});

// Stampo le informazioni della bici più leggera
const lighterBikeContainer = document.querySelector(".lighter-bike");
lighterBikeContainer.innerHTML = `<h3>La bicicletta più leggera è la ${lighterBike.name}, che pesa soltanto ${lighterBike.weight} Kg.</h3>`;