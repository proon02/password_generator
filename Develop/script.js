// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var caseArray=[];
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

// Array of uppercase characters 
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if (generateBtn) {
var useLowerCase = confirm("Do you want to include lowercase characters?")

var useUpperCase = confirm("Do you want to include uppercase characters?")

var useNumeric = confirm("Do you want to include special characters?")

var useSpecial = confirm("Do you want to include number characters?")
}
while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
  alert("Please select one type of character");
  useLowerCase=confirm("Do you want to include lowercase characters?");
  useUpperCase=confirm("Do you want to include uppercase characters?");
  useNumeric=confirm("Do you want to include numeric characters?");
  useSpecial=confirm("Do you want to include special characters?");
}

var passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
    alert("Please choose a number that is more than 8 and less than 128 characters");
    passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
}

if (useLowerCase==true){
  caseArray.push(lowerCasedCharacters)
}
if (useUpperCase==true){
  caseArray.push(upperCasedCharacters)

}
if (useNumeric==true){
  caseArray.push(numericCharacters)
  
}
if (useSpecial==true){
  caseArray.push(specialCharacters)
}

//// a loop is run for the length of the password

for(let i=0;i<passwordLength;i++){

  let randomCharArrayNum;
  let selectedCharArray;
  let randomCharNum;
  let randomChar;

  //// a random number is generated for the group array (length of group array)
  
  randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length)); //random number based on length of case array
  
  //// a random number is generated for the character array (length of character array)

  selectedCharArray=caseArray[randomCharArrayNum]; //variable that stores selected array from case array
  
  //console.log("The array has " + caseArray.length + " entries"); //testing length of caseArray
  console.log(randomCharArrayNum); //testing random number generated based on length of caseArray

  randomCharNum=Math.floor(Math.random()*selectedCharArray.length);// variable that stores random number based on length of selected array

  console.log("The selected Array is the " + selectedCharArray); //testing array chosen
  console.log("The selected random index is " + randomCharNum); //testing random number generation based on chosen array length 

  randomChar=selectedCharArray[randomCharNum];
  console.log(randomChar);
  console.log("Your random character array num is " + randomCharArrayNum + " and your random character number is " + randomCharNum);

  // now, need to accumulate the string
  password+=randomChar;
  //return passwordString;
  
}
console.log("Your password is " + password);
alert("Your password is " + password);
