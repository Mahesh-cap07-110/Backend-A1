# Backend-A1
Node.js Calculator


Here's a breakdown of the code:

1. We import the crypto module for random number generation.
2. We use process.argv to get the command-line arguments. 
3. The calculator function handles all operations using a switch statement.
4. For each operation, we check if the correct number of arguments is provided and handle edge cases (like division by zero).
5. The random operation uses crypto.randomBytes() to generate a random number of the specified length and converts it to a binary string.
6. Each operation has appropriate error messages for invalid inputs.

To use this calculator, we can run commands like:

node index.js add 1 2 3
node index.js sub 10 5
node index.js mult 2 3 4
node index.js divide 10 2
node index.js sin 0.5
node index.js cos 1
node index.js tan 0.75
node index.js random 15