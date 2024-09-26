const prompt = require('prompt-sync')();

//create numbers and assigned
// let number1 = parseInt(prompt("Type the first number: "))
// let number2 = parseInt(prompt("Type the second number: "))
// let number3 = parseInt(prompt("Type the third number: "))

// if(number1 > number2){
//     if(number2 > number3){
//         console.log(`${number1} , ${number2} , ${number3}`);
//     }else{
//         console.log(`${number1} , ${number3} , ${number2}`);
//     }
// }else if (number2 > number1){
//     if(number1 > number3){
//         console.log(`${number2} , ${number1} , ${number3}`);
//     }else{
//         console.log(`${number2} , ${number3} , ${number1}`);
//     }
// } else{
//     if(number2 > 1){
//         console.log(`${number3} , ${number2} , ${number1}`);
//     }else{
//         console.log(`${number3} , ${number1} , ${number2}`);
//     }
// }

console.log("ENTRY THREE NUMBERS")

let arrayNumbers = [];

for(let i = 1; i <= 3; i++){
    arrayNumbers.push(parseInt(prompt('Type a number: ')));
}

let arrayIncrease = arrayNumbers.sort();
let arrayDecrease = arrayNumbers.sort((a, b) => {
 if(a == b){
    return 0;
 }
 if(a > b){
    return -1;
 }
 return 1;
});
console.log(arrayIncrease);
console.log(arrayDecrease);