// Reverse String Algorithms


// _________________________________________________________________________


// Reverse string with built in functions

// function reverseString(str) {
//   let originalStr = str.split("")
//   console.log(originalStr)

//   let reverseStr = originalStr.reverse();
//   console.log(reverseStr)

//   let joinStr = reverseStr.join("");
//   console.log(joinStr)

// }
// reverseString('Hello')


// _________________________________________________________________________


// Reverse string with loop

// let letters = [];

// let word = "amazing"

// let rword = "";

// // Push each letter into array
// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // pop off the array in reverse order
// for (let i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// if(rword === word) {
//   console.log(`${word} and ${rword} is a palindrome`);
// } else {
//   console.log(`${word} and ${rword} is not a palindrome`);
// }


// _________________________________________________________________________


// Reverse string recursively

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0); 
//   } 
// }

// reverseString('Hello')