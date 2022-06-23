// Calculator that can perform basic operations - Addition, Subtraction, Multiplication, & Division.

console.log("Hi. This is a simple calculator program to perform basic operations such as: \n> Addition\n> Subtraction\n> Multiplication\n> Division");
console.log("Let's perform some simple arithmetic, shall we?\n");



console.log("Enter your first number:");
let num1 = parseInt(prompt("Enter your first number:"));                            // Receiving number from user.
console.log(num1);

while (isNaN(num1) == true) {
    console.log("Invalid entry. Kindly enter a valid integer.");                    // Ensuring user enters a valid number.
    num1 = parseInt(prompt("Enter your first number:"));
    console.log(num1);
}

const ops = ['+', '-', '*', '/'];
console.log("Enter operator:");
let op = prompt("Enter operator:");                                                 // Receiving operator from user.
console.log(op);

while (ops.indexOf(op) === -1) {
    console.log("Invalid entry. Kindly enter a valid operator.");                   // Ensuring user enters a valid operator.
    op = prompt("Enter operator:");
    console.log(op)
}

console.log("Enter your second number:");
let num2 = parseInt(prompt("Enter your second number"));                            // Receiving number from user.
console.log(num2);

while (isNaN(num2) == true) {
    console.log("Invalid entry. Kindly enter a valid integer.");                    // Ensuring user enters a valid number.
    num2 = parseInt(prompt("Enter your second number"));
    console.log(num2);
}

// Performing arithmetic operations on user entries.

if (op === '+') {
    let result = num1 + num2
    alert(result)
    console.log(`${num1} + ${num2} equals ${result}`)
} else if (op === '-') {
    let result = num1 - num2
    alert(result)
    console.log(`${num1} - ${num2} equals ${result}`)
} else if (op === '*') {
    let result = num1 * num2
    alert(result)
    console.log(`${num1} * ${num2} equals ${result}`)
} else if (op === '/') {
    let result = num1 / num2
    alert(result)
    console.log(`${num1} / ${num2} equals ${result}`)
} else {
    alert("Error!")
    console.log("An error occured. Make sure you enter the correct values.")
}

