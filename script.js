// Assignment Code
function generatePassword(){

  var length = prompt("How long would you like your password (between 8 and 128 characters)?")
  var lowerCase = confirm("Would you like lowercase letters?")
  var upperCase = confirm("Would you like uppercaser letters?")
  var numeric = confirm("Would you like to include numbers in your password?")
  var specialCharacters = confirm("would you like to include special characters?")
  var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numbers = ['0','1','2','3','4','5','6','7','8','9']
  var specCharacters = ['!','@','#','$','%','^','&','*','-','+']


  var finalCharacters = []
  if(lowerCase===true){
    finalCharacters.push(...lowerCaseLetters)
  }
  if(upperCase===true){
    finalCharacters.push(...upperCaseLetters)
  }
  if (numeric===true){
    finalCharacters.push(...numbers)
  }
  if (specialCharacters===true){
    finalCharacters.push(...specCharacters)
  }


  var generatedPassword;

  if(8<=length<=128 && finalCharacters.length>0){
    for (var i = 0; i < length; i++) {
      var randomArrayPosition = Math.floor(Math.random()*finalCharacters.length)
      var randomValue = finalCharacters[randomArrayPosition]
      if(generatedPassword===undefined){
        generatedPassword=randomValue
      }
      else {
        generatedPassword = generatedPassword + randomValue
      }
    }
  }
  else {
    alert("Wrong")
  }

  return generatedPassword 
}
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




