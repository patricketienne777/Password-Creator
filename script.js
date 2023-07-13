// Assignment Code
var lowAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var highAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specials = ["!", "?", "#", "$", "@", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "<", ">", ";", ":", "/"]

var generateBtn = document.querySelector("#generate");

console.log(generateBtn);
function generatePassword() {
  var passwordOptions = []
  var finalPassword = []


  var length = window.prompt("Please specify password length")

  if (length === "" || isNaN(length) === true || length < 8 || length > 128) {
    window.alert("Please meet password criteria. Choose between 8-128")
    return
  }

  var containUppercase = window.confirm("Would you like uppercase letters?")
  console.log(containUppercase)

  var containLowercase = window.confirm("Would you like lowercase letters?")
  var containNumbers = window.confirm("Would you like Numbers in your password?")
  var containSpecials = window.confirm("Would you like Special Characters in your password?")
  if (containUppercase === true) {
    passwordOptions = passwordOptions.concat(highAlphabet)
  }
  if (containLowercase === true) {
    passwordOptions = passwordOptions.concat(lowAlphabet)
  }
  if (containNumbers === true) {
    passwordOptions = passwordOptions.concat(number)
  }
  if (containSpecials === true) {
    passwordOptions = passwordOptions.concat(specials)
  }
  
  if (containUppercase === false && containNumbers === false && containLowercase === false && containSpecials === false) {
    window.alert("Please meet password criteria. Password must contain at least one type of character.")
    return
  }
  
  for (let index = 0; index < length; index++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])

  }
  var x = Math.floor(Math.random() * 10)
  console.log(finalPassword)
  return finalPassword.join("")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
