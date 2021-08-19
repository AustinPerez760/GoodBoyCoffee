// // OBJECT
// let person = {
//   name: "austin",
//   age: 25,
//   children: 1,
//   weight: 180,
//   lastName: "Perez",
// };

// console.log(person.name);
// console.log(person.lastName);
// console.log(person.age);
// console.log(typeof person.lastName);
// console.log(typeof person);

// // ARRAY
// let selectedColors = ["red", "blue", "green", "yellow", "teal", "putple"];

// console.log(selectedColors[0]);
// console.log(selectedColors[1]);
// console.log(selectedColors.length);

// // FUNCTIONS

// // Performing a task
// function greet() {
//   console.log("hello world");
// }

// greet();

// function greet(name, lastName) {
//   console.log("hello" + "" + name + "" + lastName);
// }

// greet("Austin", "Perez");

// // CALCULATING A VALUE
// function square(number) {
//   return number * number;
// }

// console.log(square(2));

// // LOGICAL OPERATORS
// // && = Logical AND returns TRUE if both operands are TRUE

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);

// if player has 4000 sr = diamond
//  if player has < 4000 sr = platinum

// let rankSR = 3500;
// let currentRank = rankSR > 4000 ? "diamond" : "platinum";

// console.log(currentRank);

//  MAX OF TWO NUMBERS
// let number = max(5, 5);

// function max(number1, number2) {
//   return a > b ? a : b;
// }

// PHOTO WILL BE IN LANDSCAPE IF WIDTH IS GREATER THAN HEIGHT
// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(400, 700));

// FIZZBUZZ
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input

// const output = fizzBuzz(7);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a number";

//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

//   if (input % 3 === 0) return "Fizz";

//   if (input % 5 === 0) return "Buzz";

//   return input;
// }

// EVEN AND ODD NUMBERS

// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// STARS EXCERCISE

// showStars(5);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";

//     console.log(pattern);
//   }
// }
