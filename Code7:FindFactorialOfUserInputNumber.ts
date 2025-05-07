import * as readline from 'readline';

function factorial(num: number): number {
  if (num < 0) return -1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number to find its factorial: ", (input) => {
  const userInput = Number(input);
  console.log(`Factorial of ${userInput} is: ${factorial(userInput)}`);
  rl.close();
});