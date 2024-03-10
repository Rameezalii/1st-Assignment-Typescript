// Task 2

/* 
let personName : string = "Rameez";
console.log(`“Hello ${personName}, would you like to learn some Python today?”`);
 */

// task 3

/* 

let name : string = "RaMeez";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

 */

// Task 4 

/* 

console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

*/

// Task 5

/* 

let famousPerson : string = 'Albert Einstein ';
let message : string = `${famousPerson}once said, “A person who never made a mistake never tried anything new.”`

console.log(message);

 */

// Task 6

/* 
let name : string = "\n\tRameez\n\t";

console.log(name); //with whitespaces

console.log(name.trim()); //without whitespaces

 */

// Task 7 and 8 

/* 
console.log(6+2);
console.log(10-2);
console.log(4*2);
console.log(16/2);

 */

// Task 9 

/* 
let favoriteNumber : number = 8;
let message : string = `My Favorite Number is ${favoriteNumber}`

console.log(message);

 */

// Task 10 

// Rameez, 07-03-2024
// this language my favorite program 
/* 
let language : string = 'typescript';

console.log(`i like learn ${language}`);
 */

// Task 11 

/* 
let arr : string[] = ["Anus","Mohsin","Ebad","Hassan"]

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
    
} */


// Task 12
/* 
let arr : string[] = ["Anus","Mohsin","Ebad","Hassan"]

for(let i = 0 ; i < arr.length ; i++){
    console.log(`My best friend is ${arr[i]}`);
    
}
 */


// PROJECT NUMBER 13

/*
let motorcycles = ["Honda", "Yamaha", "Kawasaki", "Suzuki"];

for (let i = 0; i < motorcycles.length; i++) {
    console.log("I would like to own a " + motorcycles[i] + " motorcycle.");
}
*/


// PROJECT 14

/*
let guestList = ["Rameez","Anus","Ali","Abdul Ghani"]

for(var i = 0 ; i < guestList.length ; i++){
    console.log("Dear "+guestList[i]+ ", you are invited to dinner. We would love to have you join us!");

}
*/

// Task 15
/* 
let guestList : string[] = ["Rameez","ALi","Abdullah"];

let unableToAttend = "Rameez";

console.log(`${unableToAttend} can't make it to dinner.`);

guestList.splice(0,1,"Abdul Ghani")

for(let i = 0 ; i < guestList.length ; i++){
    console.log(`Dear, ${guestList[i]} would you like to join me for dinner?`);
}
 */
// Task 16 
/* 
let guestList = ["Rameez","Ali","Abdullah","Anus","Ebad"];

console.log("Good news! We found a bigger dinner table!");

guestList.unshift("Mohsin");

guestList.splice(guestList.length /2,0,"Abdul Ghani")

guestList.push("Fahad");

for(let i = 0 ; i < guestList.length ; i++){
    console.log("Hello, "+guestList[i]+" You're invited to the dinner.");
}
 */


// Task 17 

// let dinnerGuests : string[] = ["Alice", "Bob", "Charlie", "David", "Eve" , "Rameez","Anas","Ali"];

// console.log("Unfortunately, the dinner table can only accommodate two guests.");

// while (dinnerGuests.length > 2) {
    
//     let removedGuest = dinnerGuests.pop();
    
    
//     console.log(`Sorry, ${removedGuest}, you can't be invited to dinner.`);
// }

// for(let i = 0 ; i < dinnerGuests.length ; i++){
//     console.log(`${dinnerGuests[i]}, you're still invited to dinner.`);
// }

// dinnerGuests.splice(0,dinnerGuests.length)
// console.log(`${dinnerGuests} End of the program.`);


// Task 18
/* 
let locations : string[] = [" Karachi "," LaHOre "," Islamabad "," Quetta "," Peshawar "," Rawalpindi " ];

console.log("orignal order: ",locations);

console.log("Alphabetical order: ",locations.sort());

console.log("orignal order: ",locations);

console.log("Alphabetical order: ",locations.sort().reverse());

console.log("orignal order: ",locations);

locations.reverse();
console.log("reverse order: ");
locations.reverse();
console.log("reverse order: ");

locations.sort();
console.log("Alphabetical order: ",locations.sort());
 */

// Task 19 
/* 
let guests : string[] = ["Rameez","Ali","Abdullah","Anas"];

for(let i = 0 ; i < guests.length ; i++){
    console.log(`Dear,${guests[i]} you are inviting to dinner.`);
}
 */
 

// PROJECT 20

/* let cities = ["USA", "Canada", "Australia", "Japan", "France"];
console.log("List of Cities:");
for (let i = 0 ; i < cities.length ; i++ ) {
    console.log(cities[i]);
}
*/

// Task 21

/* 
let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolikien",
    yearPublished: 1937
};
console.log(`Book Info : ${book.title} By ${book.author} ,Published In ${book.yearPublished}`);
 */


// PROJECT 22
/* 
 let myArr = [1,2,,3,4,5];
let incorrectValue = myArr[10];

let correctArr = myArr[2];
console.log(correctArr); 

 */

//  PROJECT 23

/* let car = 'subaru';

console.log("Is car equal to 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'honda'? I predict True.")
console.log(car == 'honda')

console.log("Is car == 3 ? I predict False.")
console.log(car.length == 3)

console.log("Is car !== 'subaru' ?I predict False.")
console.log(car !== 'subaru')

console.log("Is car === 'SUBARU'? I predict True.")
console.log(car.toLowerCase() === 'subaru')

console.log("Is car == 'b' ?I predict True.")
console.log(car.charAt(2) == 'b')

console.log("Is car == 'subaru'? I predict False.")
console.log(car.toUpperCase() == 'subaru')

console.log("Is car > 5? I predict True.")
console.log(car.length > 5)

console.log("Is car < 4 ? I predict False.")
console.log(car.length < 4)

console.log("Is car === 'subaru'? I predict False.")
console.log(car.length === 4 ) */



// PROJECT NUMBER 24

// Tests for equality and inequality with strings:
/* let string1 = "hello";
let string2 = "world";

// true result 
console.log(string1 == "hello");
// false result 
console.log(string2 !== string2);


// Tests using the lower case function:
let text = "hello world";
//  true result 
console.log(text.toLowerCase() == "hello world");
// false result 
console.log(text.toLowerCase() !== "hello"); 



// Numerical tests involving equality and inequality 
// greater than and less than, greater than or equal to, and less than or equal to:
let number = 10;
let number2 = 20;

// true result 
console.log(number === 10);
console.log(number2 > number);
console.log(number2 >=number );

// false result 
console.log(number !== 10);
console.log(number > number2);
console.log(number2 < number);


// Tests using "and" and "or" operators

let a = 5;
let b = 10;

// true result 
console.log(a < b && b > a);
console.log(a > 0 || b < 0);

// false result 
console.log(a > b && b > 0);
console.log(a > b || b < 0);
*/

 
// PROJECT NUMBER 25
/* 
let alien_color1 = "green";
let alien_color2 = "yellow";
let alien_color = "red";

if(alien_color1 === "green"){
    console.log("Congratulations! You just earned 5 points.")
}
if(alien_color2 === "green"){
    console.log("Congratulations! You just earned 5 points.")
}
if(alien_color === "green"){
    console.log("Congratulations! You just earned 5 points.")
}
 */


// PROJECT 26
/* 
let alien_color ="green"
let alien_color1 = "red";
let alien_color2 = "yellow";

if(alien_color === "green"){
console.log("Congratulations! You just earned 5 points.");
}
else{
    console.log(("the player just earned 10 points."));
     }
    if(alien_color1 === "green"){
        console.log("Congratulations! You just earned 5 points.");
        }
        else{
            console.log("the player just earned 10 points.")
          }

            if(alien_color2 === "green"){
                console.log("Congratulations! You just earned 5 points.");
                } 
                else{
                    console.log("the player just earned 10 points.")
                       }
 */


// PROJECT NUMBER 27

/* 
var alienColor = "yellow";
var aliencolor1 = "red";
var aliencolor2 = "green";

if (aliencolor2 === "green") {
    console.log("You earned 5 points.");
} if (alienColor === "yellow") {
    console.log("You earned 10 points.");
} if (aliencolor1 === "red") {
    console.log("You earned 15 points.");
} else {
    console.log("Unknown alien color. No points earned.");
}
 */


// PROJECT 28

/* var age = 25;

if (age < 2 ){
    console.log("The person is a baby.");
}else if(age >=2 && age < 4 ){
   console.log("The person is a toddler.");
}else if(age >= 4 && age < 13 ){
    console.log("The person is a kid.");   
}else if(age >= 13 && age < 20){
    console.log("The person is a teenager.");
}else if(age >= 20 && age < 65){
    console.log("The person is an adult.");
}else{
    console.log("The person is an elder.");
} */


// PROJECT 29

/* let favFruits = ["banana","apple","orange"];

if(favFruits.indexOf("banana") !== -1 ){
    console.log("you really like banana");
}
if(favFruits.indexOf("apple") !== -1 ){
    console.log("you really like banana");
}
if(favFruits.indexOf("orange") !== -1 ){
    console.log("you really like orange");
}
if (favFruits.indexOf("strawberry") !== -1) {
    console.log("You really like strawberry!");
} else {
    console.log("strawberry are not in your list of favorite fruits.");
}

if (favFruits.indexOf("grape") !== -1) {
    console.log("You really like grapes!");
} else {
    console.log("Grapes are not in your list of favorite fruits.");
} */


// PROJECT 30

/* 
let username = ["Admin","Anus","Abdullah","Hassan","Ebad"];

for (var i = 0 ; i < username.length ; i++){
    if(username[i] === "Admin"){
        console.log("Hello admin, would you like to see a status report?");
        }
        else{
            console.log("Hello " + username[i] + ", thank you for logging in again.");
        }
} */


// PROJECT NUMBER 31
/* 
let users = [];

if(users.length > 0){
    for(var i = 0 ; i < users.length ; i++){
        console.log("Hello, " +users[i])
    }
}else{
    console.log("We need to find some users! ");
}
 */



// PROJECT 32

/* 
let currentUser = ["rameez", "anas", "mohsin", "ebad"];
let newUsers = ["rameez", "ali", "abdullah"];
for (let i = 0; i < currentUser.length; i++) {
    // console.log(currentUser[i]);
    for (let j = 0; j < newUsers.length; j++) {
        // console.log(currentUser[j]);
        if (currentUser[i] === newUsers[j]) {
            console.log("true",currentUser[i]);

        }
    }
}
 */

//    PROJECT NUMBER 33

/* 
let numbers = [1,2,3,4,5,6,7,8,9];

for(var i = 0 ; i < numbers.length ; i++){
   let number = numbers[i]
   var a;
    if(number === 1){
      a = "st"
    }else if (number === 2){
        a = "nd"
    }else if(number=== 3){
        a ="rd"
    }else{
        a = "th"
    }
    console.log(number + a);
}
 */


// PROJECT 34
/* 
let favPizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];

console.log("Pizza Names:");
for(var i = 0 ; i < favPizzas.length ; i++){
    console.log(favPizzas[i]);
    
}
console.log("\nStatements about my favorite pizzas:");

for(var i = 0 ; i < favPizzas.length ; i++){
    console.log("i like " + favPizzas[i]+" pizzas: ");
    
}

console.log("\nI really love pizza!");
 */


// PROJECT NUMBER 35

/* 
let favoriteAnimals = ["Dog", "Cat", "Rabbit"];


console.log("Animal names:");
for (let i = 0; i < favoriteAnimals.length; i++) {
    console.log(favoriteAnimals[i]);
}


console.log("\nStatements about each animal:");
for (let i = 0; i < favoriteAnimals.length; i++) {
    console.log("A " +favoriteAnimals[i]+ " would make a great pet.");
}


console.log("\nAny of these animals would make a great pet!");

 */


// PROJECT NUMBER 36

 /* 
function makeShirt(size,message) {
    console.log("You have ordered a "+size + "-sized shirt with the message: "+ message);
    
}

makeShirt("Large","I Love Coding!");
makeShirt("Medium","Typescipt is Fun!");
makeShirt("Small","Typescript Is A Programming Language!: ")
 */


// PROJECT NUMBER 37

/* 
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log("Shirt Size:"+ size+", Message:" +message);
}

make_shirt();

make_shirt('medium');

make_shirt('small', 'Hello, JavaScript!');

 */


// PROJECT NUMBER 38

/* 
function describeCity(city,country = "default country") {
    console.log(city +" is in "+country);
}

describeCity("Karachi","Pakistan");
describeCity("New york");
describeCity("Tokyo","Japan");
 */


// PROJECT NUMBER 39

/* 
function cityCountry(city,country ){
    return city + country;
}
console.log(cityCountry("Lahore",", Pakistan"));
console.log(cityCountry("New York ",", Usa"));
console.log(cityCountry("Paris ",", France"));
 */


// PROJECT NUMBER 40

// INCOMPLETEE 


// PROJECT NUMBER 41
/* 
function showMagcian(magician){
for(var i = 0 ; i < magicianNames.length ; i++){
    console.log("Magician Name : "+magicianNames[i]);
    
}
}

let magicianNames = ["Rameez","Usama","Anus"];

showMagcian(magicianNames);

 */

// PROJECT NUMBER 42
/* 
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log("the Great "+magicians[i]);
    }
}

let magicianNames = ['David Copperfield', 'Harry Houdini', 'Merlin'];

show_magicians(magicianNames); */


// PROJECT NUMBER 43

// INCOMPLETE


// PROJECT NUMBER 44

// INCOMPLET 

// PROJECT NUMBER 45

// INCOMPLETE 