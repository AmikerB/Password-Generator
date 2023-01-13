// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

let user = {
  pLength: 0,
  lower: true,
  upper: true,
  number: true,
  special: true,
}

// Function to prompt user for password options
function getPasswordOptions() {
  user.pLength = prompt("How long would you like the password to be?");
  user.lower = confirm("Would you like both upper and lowercae characters?");
  user.number = confirm("Would you like numbers in your password?")
  user.special = confirm("Would you like special characters in your passward?");
  return;
}

// create loop which generates different array combinations depending on whts tru and whats false 



for (let i = 0; i < user.pLength; i++) {
  let random = math.floor(math.random()) * //put name of above loop here);
}


// Function for getting a random element from an array
function getRandom(arr) {

} // yes should return. will return a single random element.

// Function to generate password with user input
function generatePassword() {
  let password = ..();

  // logic goes here

  return password

} // uses above two functions to generate a password

// do not need to worry about code below
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);