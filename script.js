/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let _function = 27;

let person = "Jonas"
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Csitari";
console.log(lastName);
*/

/*
// Maths operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 + 2 + 2

const firstName = "Bianka";
const lastName = "Csitari";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = 15 + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Bianka";
const job = "postdoc";
const birthYear = 1992;
const year = 2024;

const bianka = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(bianka);

const biankaNew = `I’m ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(biankaNew);

console.log(`Just a regular string`);

console.log(`String with \n\
    multiple \n\
    lines`);

console.log(`String
    multiple
    line`);
*/
/*
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Bianka"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" / "2"); // 11.5

// Guess the output game

let n = "1" + 1; // 11
n = n - 1;
console.log(n); // 10
*/

/*
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Bianka")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
    console.log("Don’t spend it all :)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY, height is defined");
} else {
    console.log("Height is undefined");
}
*/
/*
const age = 18;
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What’s your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 8) { // "8" == 8
    console.log("Cool! 8 is an amazing number.")
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 11) {
    console.log("11 is not a cool number")
} else {
    console.log("Number is not 23 or 7 or 11")
}

if (favourite !== 8) console.log("Why not 8?");
*/
/*
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// Use these variables to make a decision

/*
if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}


const isTired = false; // variable C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}
*/
/*
const day = "monday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day!");
}

const travel = "december"

switch (travel) {
    case "september":
        console.log("Poland");
        break;
    case "october":
        console.log("Italy");
        break;
    case "november":
        console.log("Canary Island");
        break;
    case "december":
        console.log("Denmark");
        break;
    default:
        console.log("No travelling for now");
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}
*/
/*
if (23 > 10) {
    const str = "23 is bigger";
}

console.log(`I’m ${2037 - 1992} years old.`)
*/
/*
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/
