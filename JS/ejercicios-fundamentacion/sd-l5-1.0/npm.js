import validator from 'validator'
import promptSync from 'prompt-sync';
 
const prompt = promptSync();
 
let inputEmail = "";
 
while (!validator.isEmail(inputEmail)) {
  inputEmail = prompt("Enter your email address: ");
}
 
console.log("Thank you!");