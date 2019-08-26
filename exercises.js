// Callback function

function test(arr, callback) {
  arr.push(100)
  callback()
}

var myArr = [1,2,3];

test(myArr, () => console.log('Array has been modified'));



// Js Closures

// Get the secret

function hiddenCode() {
  let code = "You\'ve found a secret code"
  return function totallyNotSecretCode() {
    return code
  }
}

const getCode = hiddenCode()

console.log(getCode())
