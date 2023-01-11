// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Add password criteria arrays 
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Add confirmation message
function generatePassword(){


  const length = numberOfCharacters()
  const hasNumber = confirm("Numbers?")
  const hasSpecialChar = confirm("Special characters ?")
  const hasAlpaLower = confirm("Lowercase character")
  const hasAlphaUpper = confirm("UpperCase")
  const availableCharacters = [
    ...(hasNumber ? number : []),
    ...(hasSpecialChar ? specialChar : []),
    ...(hasAlpaLower ? alphaLower : []),
    ...(hasAlphaUpper ? alphaUpper : []),
  ]
  console.log(availableCharacters)

}



//Add condattion function
function numberOfCharacters() {
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
  if (numberOfCharacters <= 7 || numberOfCharacters >= 129) {
    alert("Please enter valid length.")
    numberOfCharacters()
  }
  return confirmLength
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
