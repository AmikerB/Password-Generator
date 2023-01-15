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

let shouldUseUpper = true;
let shouldUseNumber = true;
let shouldUseSpecial = true;
let passwordCharacters = [];

let howLong = prompt("How long would you like the password to be? (Must be between 10 and 64 characters)");

let lengthOfPassword = Number(howLong);

if (lengthOfPassword >= 10 && lengthOfPassword <= 64) {
  shouldUseUpper = confirm("Would you like both uppercase and lowercase characters in your password?");
  shouldUseNumber = confirm("Would you like numbers in your password?");
  shouldUseSpecial = confirm("Would you like special characters in your password?");
} else {
  alert("Invalid password length. Please enter a number between 10 and 64.");
}


// continue here 

// ******* below returns first few in array then rest is undefined
if (shouldUseUpper) {
  let indexOfUpper = Math.floor(Math.random() * upperCasedCharacters.length);
  passwordCharacters.push(
    upperCasedCharacters[indexOfUpper]
  );
}

if (shouldUseNumber) {
  let indexOfNumber = Math.floor(Math.random() * numericCharacters.length);
  passwordCharacters.push(
    numericCharacters[indexOfNumber]
  );
}

if (shouldUseSpecial) {
  let indexOfSpecial = Math.floor(Math.random() * specialCharacters.length);
  passwordCharacters.push(
    specialCharacters[indexOfSpecial]
  );
}

let passwordCharactersLengthSoFar = passwordCharacters.length;

for (let i = passwordCharactersLengthSoFar; i < lengthOfPassword; i++) {
  passwordCharacters.push(
    lowerCasedCharacters[Math.random() * specialCharacters.length],
  );
}


// TO DO: shuffle characters string 




// join the password characters array into a string
passwordCharacters.join('');

console.log(passwordCharacters);



// // Get references to the #generate element
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



// // // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

