// Callback function

function test(arr, callback) {
  arr.push(100)
  callback()
}

var myArr = [1,2,3];

test(myArr, () => console.log('Array has been modified'));



// Js Closures

// Get the private variable (secret code)

/* 
Explanation: You cannot access variable in the parent (hiddenCode) function from outside.
You need to create a helper function (child function) which is called nested function
which creates a closure. Child function (closure) has access to local (child), outer (parent) and global scopes.
*/

function hiddenCode() {

  let code = "You\'ve found a secret code"

  return function totallyNotSecretCode() {
    return code
  }
  
}

const getCode = hiddenCode()

console.log(getCode())


// Longest Word
// Find the longest word in the string

function findWord(word) {

  // Split the words in the given string
  word.replace(/[^a-z0-9]/g, '');
  
  // Return an array containing each word
  let arr = word.split(' ')

  // Sort each array index (word) by it's length
  arr.sort((a,b) => {return b.length - a.length})
  
  // Return first item in the array (after sorting longest word will be first)
  return arr[0]
  
}

console.log(findWord(' John and Mary bought 5 apples and 3 oranges '))


// Replace letters and capitalize vowels

function replaceLetters(word) {
  
  // replace for each letter a-z exacute a callback function
  // which cheks if letter is z if true return a
  // if false return a string from charCode method + 1
  // charCode is a number that a letter represents
  // +1 to charCode number means moving to the next letter
  let converted = word.replace(/[a-z]/gi, (char) => {
    return char === 'z' || char === 'Z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
  })
  
  // Execute callback function on all provided vowels
  // Use toUpperCase method on each letter
  let capitalized = converted.replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase();
  })
 
  return capitalized
}

console.log(replaceLetters('Pizza'));


// String to lowercase 

var toLowerCase = function(str) {
  return str.toLowerCase()
};

toLowerCase('Hello')

// String to Uppercase 

var toUpperCase = function(str) {
  return str.toUpperCase()
};

toUpperCase('hello')

// Generate random number

function random(){
  return 1 + Math.random() * 4;
}

random()

// Simple slice method

var shortenArray = (arr, start, end) => {
  return arr.slice(start, end)
}

shortenArray([1,true,'Pizza', undefined, null], 0, 3)

