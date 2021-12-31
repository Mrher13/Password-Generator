// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword("password");
    var passwordText = document.querySelector("#generate");

    passwordText.value = password;
    
}


// Add event listener to generate button
generate.addEventListener("click", writePassword);