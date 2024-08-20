// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  let counter = 0;

  for (let i = 0; i < 20; i++) {
    if(i%2 === 0){
      console.log(i);
    } else{
      if(counter < buzzWords.length){
        console.log(buzzWords[counter]);
        counter += 1;
      }else{
        counter = 0;
      }
      
    }

  };