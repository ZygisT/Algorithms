/* Hash table */

let hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

let hashTable = function() {
  
  let storage = [];
  const storageLimit = 4;

  // Helper function
  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    let index = hash(key, storageLimit)
    // if index undefined set it to key and value
    if(storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      // If it is not undefined
      let inserted = false;
      // loop thru each index to check if key already exists
      for (let i = 0; i < storage[index].length; i++) {
        // if key exists set new value
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      // if key does not exist push new item / multiple entries
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };
}