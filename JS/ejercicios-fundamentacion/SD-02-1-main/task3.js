// Refer to Task 3 in your Instructions to complete this task

// for (let i = 0; i < 1; i++) {
//     console.log("This is Task Three!");
//   };
for (let i = 1; i < 106; i++) {
  if(i%3 == 0){
    if(i%5 == 0){
      console.log("FizzBuzz");
    } else{
      console.log("Fizz");
    }
    
  } else if (i%5 == 0) {
    console.log("Buzz");
  } else{
    console.log(i)
  }
  

};