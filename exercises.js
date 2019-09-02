// Callback function

function test(arr, callback) {
  arr.push(100)
  callback()
}

var myArr = [1,2,3];

test(myArr, () => console.log('Array has been modified'));



// ____________________________________________________________________________________



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



// ___________________________________________________________________________________



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



// ____________________________________________________________________________________



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



// ____________________________________________________________________________________



// String to lowercase 

var toLowerCase = function(str) {
  return str.toLowerCase()
};

toLowerCase('Hello')



// ____________________________________________________________________________________



// String to Uppercase 

var toUpperCase = function(str) {
  return str.toUpperCase()
};

toUpperCase('hello')



// ____________________________________________________________________________________



// Generate random number

function random(){
  return 1 + Math.random() * 4;
}

random()



// ____________________________________________________________________________________



// Simple slice method

var shortenArray = (arr, start, end) => {
  return arr.slice(start, end)
}

shortenArray([1,true,'Pizza', undefined, null], 0, 3)



// ____________________________________________________________________________________



// Merge arrays and sort the merged array


var arrayMerge = (arr1, arr2) => {

  return [...arr1,...arr2].sort((a, b) => a - b)
}

console.log(arrayMerge([100, 50, 1], ['a', 'b', 'c']))



// ____________________________________________________________________________________



// Js Object

var car = {
  name: 'Lamborghini',
  series: 'Aventador',
  model: 'S',
  fullName: function() {
    return `${this.name} ${this.series} ${this.model}`
  },
  yearOfRelease: 2017,
  overview: 'An icon cannot be reinvented, it can only be challenged. And only Aventador could surpass itself. Following Miura, Islero, Countach, and Urraco, Lamborghini’s most iconic model now reaps the inheritance of the historic S models and evolves into the new Aventador S.'
}


car.fullName()





