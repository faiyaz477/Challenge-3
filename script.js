// Assignment Code
var generateBtn = document.querySelector("#generate");

//generatePassoword function 
function generatePassword(){
  //prompted for the length of the password
  var userInput = window.prompt("How long is your passoword?")
  var passwordLength = parseInt(userInput)
  console.log(userInput)
  //choose a length of at least 8 characters and no more than 128 characters
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
