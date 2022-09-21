// Assignment Code
var generateBtn = document.querySelector("#generate");

//generatePassoword function 
function generatePassword(){
  //prompted for the length of the password
  var userInput = window.prompt("How long is your passoword?")
  var passwordLength = parseInt(userInput)
function randomNum(min,max){
  return Math.floor(Math.random()*(max -min)+ min)
}
  //choose a length of at least 8 characters and no more than 128 characters
  if(passwordlength<8 || passwordLength>128)
  window.alert("choose a length of at least 8 characters and no more than 128 characters")
  return
}
//confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


var lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var Arr = [];
//const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const numbers = "0123456789";
//const symbols = "!@#$%^&*_-+=";

//const generateBtn = document.getElementById("generate");
//const passwordTxt = document.getElementById("password");
//const UpperEL = document.getElementById("uppercase");
//const LowerEL = document.getElementById("lowercase");
//const numberEL = document.getElementById("numbers");
//const symbolsEL = document.getElementById("symbols");


if(WantsNumbers === true){
  Arr.push(numbersZeroToNine)

}
if(WantsUpper === true){
  Arr.push(upperCaseLetters)

}

if(WantsLower === true){
  Arr.push(lowerCaseLetters)

}

if(WantsSymbols === true){
  Arr.push(selectedSpecialCharacters)

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
