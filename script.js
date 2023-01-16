// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


function generatePassword() {
  let shouldUseLower = true;
  let shouldUseUpper = true;
  let shouldUseNumber = true;
  let shouldUseSpecial = true;
  let passwordCharacters = [];

  let howLong = prompt("How long would you like the password to be? (Must be between 10 and 64 characters)");

  // converting the string answer to a number so can be used later
  let lengthOfPassword = Number(howLong);

  // making sure the number is between 10 and 64 before the other questions are asked.
  if (lengthOfPassword >= 10 && lengthOfPassword <= 64) {
    shouldUseLower = confirm("Would you liker lower cased characters in your password?")
    shouldUseUpper = confirm("Would you like upper cased characters in your password?");
    shouldUseNumber = confirm("Would you like numbers in your password?");
    shouldUseSpecial = confirm("Would you like special characters in your password?");
  } else {
    alert("Invalid password length. Please enter a number between 10 and 64.");
  }

  // checking that user has selected atleast one of the variables as true
  if (!shouldUseLower && !shouldUseUpper && !shouldUseNumber && !shouldUseSpecial) {
    alert("At least one of the shouldUse* variable should be true");
  } else {
    //function to create an array of characters selected by user. Randomises the characters first then adds them to an array depending on how long the user wants the array to be. 
    while (passwordCharacters.length < lengthOfPassword) {
      if (shouldUseLower && passwordCharacters.length < lengthOfPassword) {
        let indexOfLower = Math.floor(Math.random() * lowerCasedCharacters.length);
        passwordCharacters.push(
          lowerCasedCharacters[indexOfLower]
        );
      }
      if (shouldUseUpper && passwordCharacters.length < lengthOfPassword) {
        let indexOfUpper = Math.floor(Math.random() * upperCasedCharacters.length);
        passwordCharacters.push(
          upperCasedCharacters[indexOfUpper]
        );
      }
      if (shouldUseNumber && passwordCharacters.length < lengthOfPassword) {
        let indexOfNumber = Math.floor(Math.random() * numericCharacters.length);
        passwordCharacters.push(
          numericCharacters[indexOfNumber]
        );
      }
      if (shouldUseSpecial && passwordCharacters.length < lengthOfPassword) {
        let indexOfSpecial = Math.floor(Math.random() * specialCharacters.length);
        passwordCharacters.push(
          specialCharacters[indexOfSpecial]
        );
      }
    }
  }

  // shuffle characters within the password characters array using the Fisher-Yates shuffle algorithm to create a new character order
  for (let i = passwordCharacters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [passwordCharacters[i], passwordCharacters[j]] = [passwordCharacters[j], passwordCharacters[i]];
  }

  // convert the password characters array into a single string
  let passwordCharactersString = passwordCharacters.join('');
  return passwordCharactersString;
}

// // // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);







// previous code:

// function which uses boolean values to include what other characters the user wants to include in their password. Then using the users choice of password length to generate a new string with random characters. 
// function generatePassword() {
//   let pLength = prompt("How long would you like the password to be? (Must be between 10 and 64 characters)");
//   if (pLength >= 10 && pLength <= 64) {
//     let upper = confirm("Would you like both uppercase and lowercase characters in your password?");
//     let number = confirm("Would you like numbers in your password?")
//     let special = confirm("Would you like special characters in your password?");
//     let characters = lowerCasedCharacters.join(''); // join need to take array with multiple strings to array with one string and all the values displayed together without spaces.
//     if (upper) {
//       characters += upperCasedCharacters.join('');
//     }
//     if (number) {
//       characters += numericCharacters.join('');
//     }
//     if (special) {
//       characters += specialCharacters.join('');
//     }
//     let newString = "";
//     for (let i = 0; i < pLength; i++) {
//       newString += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return newString;
//   } else {
//     alert("Invalid password length. Please enter a number between 10 and 64.");
//   }
// }

// // join the password characters array into a string
// passwordCharacters.join('');

// console.log(passwordCharacters);
