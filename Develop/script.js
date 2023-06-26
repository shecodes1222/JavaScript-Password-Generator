// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
  else {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Special Characters
var capitalCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Function to generate password
function generatePassword() {
  var text = "";
  var consolidatedArr = [];

  //Getting input from the user
  let passLength = prompt("Enter the length of your password between 8-128 characters.");

  if (isNaN(passLength)) {
    alert("Password length can be only between 8-128 characters. Please input password again!");
    return;
  };

  //Combination of character preferences and building password
  let choiceCap = "Include uppercase letter in password?";
  prefCap = confirm(choiceCap);

  let choiceSmall = "Include lower case letters in your password?";
  prefSmall = confirm(choiceSmall);

  let choiceSpec = "Include special characters in your password?";
  prefSpec = confirm(choiceSpec);

  let choiceNum = "Include numbers in your password?";
  prefNum = confirm(choiceNum);


  //if none of the top choices are made then do the following
  if (!prefCap && !prefSmall && !prefSpec && !prefNum) {
    alert("Must have atleast one choice of character set. Try again! ");
    consolidatedArr = [];
    return;
  } else {

    if (prefCap == true) {
      consolidatedArr = consolidatedArr.concat(capitalCase);
    }

    if (prefSmall == true) {
      consolidatedArr = consolidatedArr.concat(smallCase);
    }
    if (prefSpec == true) {
      consolidatedArr = consolidatedArr.concat(specialChar);
    }
    if (prefNum == true) {
      consolidatedArr = consolidatedArr.concat(numberArr);
    }
  }

  //Creating Password
  for (var i = 0; i < passLength; i++)
    text += consolidatedArr[Math.floor(Math.random() * consolidatedArr.length)];
  return text;
}