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
  const storageLimit = 15;

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

  // Remove key from hash table
  this.remove = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  // Look up the item
  this.lookup = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash('John', 10000))

let ht = new hashTable();
ht.add('Tom', 'person');
ht.add('Sven', 'dog');
ht.add('McLaren', 'car');
ht.add('Pizza', 'dish')
console.log(ht.lookup('Sven'))
ht.print();

