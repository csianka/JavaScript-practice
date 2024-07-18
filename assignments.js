//1. Values and variables

let country = "Hungary";
let continent = "Europe";
let population = 9600000;

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

let populationOfFinland = 6000000;

console.log(population > populationOfFinland); //Does my country have more people than Finland? True

const averagePopulation = 33000000;
// new comment

console.log(population < averagePopulation); //Does my country have less people than average? True

const description1 = country + " is in " + continent + ", and its " + population + " people speak " + languageOfHungary;

console.log(description1);





















