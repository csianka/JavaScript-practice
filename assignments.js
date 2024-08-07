//1. Values and variables

/*
let country = "Hungary";
let continent = "Europe";
let population = 9.6;

console.log(country);
console.log(continent);
console.log(population);

//2. Data type

let isIsland = false;
let language;

//boolean
console.log(typeof isIsland);
//number
console.log(typeof population);
//string
console.log(typeof country);
//undefined
console.log(typeof language);


//3. Let, const and var

const languageOfHungary = "Hungarian";
console.log(languageOfHungary);

let NameOfWorkplace = "Karolinska Institute";
NameOfWorkplace = "New job";
console.log(NameOfWorkplace);


//4. Basic operators

console.log(population / 2); //4800000 people

population++; //Increasing the population by 1
console.log(population);

let populationOfFinland = 6;

console.log(population > populationOfFinland); //Does my country have more people than Finland? True

let averagePopulation = 33;

console.log(population < averagePopulation); //Does my country have less people than average? True

const description1 = country + " is in " + continent + ", and its " + population + " people speak " + languageOfHungary;
const description2 = `${country} IS in ${continent}, and its ${population} people speak ${languageOfHungary}`

console.log(description2);

// 5. Strings and template literals

const descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${languageOfHungary}`;

console.log(descriptionNew);


// 6. Taking decisions: If/else statements

const averagePopulationOfHungary = (33 - population);
console.log(averagePopulationOfHungary);
if (population < 33) {
    console.log(`Hungary’s population is ${averagePopulationOfHungary} below average`)
} else {
    console.log(`Hungary’s population is ${averagePopulationOfHungary} above average`)
};
*/

// 7. Type Conversion and Coercion
/*
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/
// 8. Equality Operators: == vs. ===
/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(numNeighbours);
if (numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}
*/

/**
 * Wolf changes start
 */
/*
const userInput = Number(prompt('Guess the number'));

const randomNumber = Math.floor(Math.random() * 4) + 1

if (userInput === randomNumber) {
    alert('YOU GUESSED IT')
}
else {
    console.log('Your number', userInput)
    console.log('Random number', randomNumber)
}

/**
 * Wolf changes end
 */


























