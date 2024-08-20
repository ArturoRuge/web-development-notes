// Refer to Task 6 in your Instructions to complete this task

// for (let i = 0; i < 1; i++) {
//     console.log("This is Task Six!");
//   };
const prompt = require('prompt-sync')();
// Refer to Task 5 in your Instructions to complete this task

// for (let i = 0; i < 1; i++) {
//     console.log("This is Task Five!");
//   };

let numberLine = parseInt(prompt("Digite el número de lineas: "));
let matrizNumeros =[];

for (let i = 1; i <= numberLine; i++) {
  if(i%3 === 0){
    if(i%5 === 0){
      if(i%7 === 0){
        console.log("FizzBuzzWoof");
      } else{
        console.log("FizzBuzz");
      }
    } else if (i%7 === 0){
      console.log("FizzWoof");
    } else{
      console.log("Fizz");
    }
  } else if (i%5 === 0) {
    if(i%7 === 0){
      console.log("BuzzWoof");
    } else{
      console.log("Buzz");
    }
  } else if(i%7 === 0){
    console.log("Woof");
  } else{
    matrizNumeros.push(i);
    console.log(i)
  }
};
console.log(matrizNumeros);