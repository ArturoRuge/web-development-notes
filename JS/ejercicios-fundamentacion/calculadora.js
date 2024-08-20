const prompt = require('prompt-sync')()
number1 = parseFloat(prompt("Enter the first number "));
number2= parseFloat(prompt("Enter the second number: "));

let addNumbers = number1 + number2;
let substractNumbers = number1 - number2;
let multiplyNumbers = number1 * number2;
let divideNumbers = number1 / number2;
let moduleNumbers = number1 % number2;


console.log(`La suma de los numeros es: ${addNumbers}`);
console.log(`La resta de los numeros es: ${substractNumbers}`);
console.log(`La multiplicación de los numeros es: ${multiplyNumbers}`);
console.log(`El módulo de los numeros es: ${moduleNumbers}`);


