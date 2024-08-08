
const crypto = require('crypto');

// Get commands using process.argv
const [, , operation, ...args] = process.argv;

// Main calculator function
function calculator(operation, args) {
  switch (operation) {
    case 'add':
      if (args.length < 2) {
        console.log("Addition requires at least two numbers.");
        return;
      }
      console.log(args.reduce((sum, num) => sum + parseFloat(num), 0));
      break;

    case 'sub':
      if (args.length !== 2) {
        console.log("Subtraction requires exactly two numbers.");
        return;
      }
      console.log(parseFloat(args[0]) - parseFloat(args[1]));
      break;

    case 'mult':
      if (args.length < 2) {
        console.log("Multiplication requires at least two numbers.");
        return;
      }
      console.log(args.reduce((product, num) => product * parseFloat(num), 1));
      break;

    case 'divide':
      if (args.length !== 2) {
        console.log("Division requires exactly two numbers.");
        return;
      }
      if (parseFloat(args[1]) === 0) {
        console.log("Cannot divide by zero.");
        return;
      }
      console.log(parseFloat(args[0]) / parseFloat(args[1]));
      break;

    case 'sin':
      if (args.length !== 1) {
        console.log("Sine operation requires exactly one number.");
        return;
      }
      console.log(Math.sin(parseFloat(args[0])));
      break;

    case 'cos':
      if (args.length !== 1) {
        console.log("Cosine operation requires exactly one number.");
        return;
      }
      console.log(Math.cos(parseFloat(args[0])));
      break;

    case 'tan':
      if (args.length !== 1) {
        console.log("Tangent operation requires exactly one number.");
        return;
      }
      console.log(Math.tan(parseFloat(args[0])));
      break;

    case 'random':
      if (args.length !== 1) {
        console.log("Provide length for random number generation.");
        return;
      }
      const length = parseInt(args[0]);
      if (isNaN(length) || length <= 0) {
        console.log("Invalid length for random number generation.");
        return;
      }
      const randomBytes = crypto.randomBytes(length).toString('binary');
      console.log(randomBytes);
      break;

    default:
      console.log("Invalid operation");
  }
}

// Call the calculator function with the provided operation and arguments
calculator(operation, args);