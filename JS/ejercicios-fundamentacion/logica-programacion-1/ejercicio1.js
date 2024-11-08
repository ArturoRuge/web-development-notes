const prompt = require('prompt-sync')();

console.log("ENTRY THREE NUMBER");

let arrayNumbers = [];

for (let i = 1; i <= 3; i++) {
    let num = parseFloat(prompt('Type a number: '));
    arrayNumbers.push(num);
}

if (arrayNumbers[0] === arrayNumbers[1] && arrayNumbers[1] === arrayNumbers[2]) {
    console.log("All three numbers are equal: " + arrayNumbers[0]);
} else {
    // Ordenar de < a > 
    let arrayIncrease = [...arrayNumbers].sort((a, b) => a - b);
    // Ordenar de > a <
    let arrayDecrease = [...arrayNumbers].sort((a, b) => b - a);

    console.log("Numbers sorted in ascending order: " + arrayIncrease.join(", "));
    console.log("Numbers sorted in descending order: " + arrayDecrease.join(", "));
}