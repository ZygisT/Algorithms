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
