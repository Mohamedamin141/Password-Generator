// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;
var Userpick;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask for user Input
  passwordLength = prompt("How many characters do you wnat for your password? Choose between 8 and 128");
  
  if(!passwordLength) {
    alert("Enter a value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
  
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    confirmUpper = confirm("Will this contain upper case letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmSymbol = confirm("Will this contain Symbol characters?");
    
  };

  // if they don't choce an option
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSymbol) {
    Userpick = alert("You must choose at Least One");
  // if the 4 options are ture
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSymbol) {
    Userpick = lowerCase.concat(upperCase, numbers, Symbol);
  }
  // if 3 options are ture
  else if (confirmLower && confirmUpper && confirmNumber) {
    Userpick = lowerCase.concat(upperCase, numbers);
  }
  else if (confirmLower && confirmUpper && confirmSymbol) {
    Userpick = lowerCase.concat(upperCase, Symbol);
  }
  else if (confirmLower && confirmNumber && confirmSymbol) {
    Userpick = lowerCase.concat(numbers, Symbol);
  }
  else if (confirmUpper && confirmNumber && confirmSymbol) {
    Userpick = upperCase.concat(numbers, Symbol);
  }
  // if 2 options are ture
  else if (confirmLower && confirmUpper) {
    Userpick = lowerCase.concat(upperCase);
  }
  else if (confirmLower && confirmNumber) {
    Userpick = lowerCase.concat(numbers);
  }
  else if (confirmLower && confirmSymbol) {
    Userpick = lowerCase.concat(Symbol);
  }
  else if (confirmUpper && confirmNumber) {
    Userpick = upperCase.concat(numbers);
  }
  else if (confirmUpper && confirmSymbol) {
    Userpick = upperCase.concat(Symbol);
  }
  else if (confirmNumber && confirmSymbol) {
    Userpick = numbers.concat(Symbol);
  }
  // if one option is ture
      else if (confirmLower) {
        Userpick = lowerCase;
      }
      else if (confirmUpper) {
        Userpick = blankUpper.concat(upperCase);
      }
      else if (confirmNumber) {
        Userpick = numbers;
      }
      else if (confirmSymbol) {
        Userpick = Symbol;
      };

  var passwordBox = [];
  

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = Userpick[Math.floor(Math.random() * Userpick.length)];
    passwordBox.push(allChoices);
  }
  var password = passwordBox.join("");
  return password;
  
}

