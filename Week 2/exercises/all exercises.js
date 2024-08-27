// 1st Exercise

// let grade = prompt("Enter Your Score");

// if (grade == null) {
//     console.log("Let me see your score 😊");
// } else if (grade >= 90) {
//     console.log("Excellent job! You got an A!");
// } else if (grade >= 80) {
//     console.log("Great job! Your grade is B!");
// } else if (grade >= 70) {
//     console.log("Give yourself an applause. You got C!");
// } else if (grade >= 60) {
//     console.log("You got D! Better study hard!");
// } else {
//     console.log("You got F. Don't worry, it's not too late.");
// }


// 2nd Exercise

// const start = +prompt("Enter the starting number:");
// const end = +prompt("Enter the ending number:");

// For Loop
// for (let number = start; number <= end; number++) {
//   console.log(number);
// }

// While Loop
// let number = start;
// while (number <= end) {
//   console.log(number);
//   number ++;
// }

// Do-While Loop
// let number = start;
// do {
//   console.log(number);
//   number++;
// } while (number <= end);



// 3rd Exercise
// Full Answer
// function calculatePower() {
//   let base = parseFloat(prompt("Enter the base:"));
//   let exponent = parseFloat(prompt("Enter the exponent:"));

//   if (!isNaN(base) && !isNaN(exponent)) {
//       let result = Math.pow(base, exponent);
//       console.log(`${base}^${exponent} = ${result}`);
//   } else {
//       console.log("Invalid input. Only enter numeric values.");
//   }
// }

// calculatePower();

// Simple Answer
// function calculatePower() {
//   let base = parseFloat(prompt("Enter the base:"));
//   let exponent = parseFloat(prompt("Enter the exponent:"));
//   console.log(Math.pow(base, exponent));
// }

// calculatePower();


// 4th Exercise
// function EvenOrOdd(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

// for (let value = 1; value <= 100; value++) {
//   let output = "";

//   if (value % 3 === 0 && value % 5 === 0) {
//       output = "FizzBuzz!";
//   } else if (value % 3 === 0) {
//       output = "Fizz";
//   } else if (value % 5 === 0) {
//       output = "Buzz";
//   } else {
//       output = value;
//   }

//   console.log(`${output} - ${EvenOrOdd(value)}`);
// }






