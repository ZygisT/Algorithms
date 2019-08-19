function Queue () {
  let collection = [];
  // Helper Function
  this.print = function() {
    console.log(collection);
  }
  this.enqueue = function(element) {
    collection.push(element);
  }
  this.dequeue = function() {
    collection.shift();
  }
  this.front = function() {
    return collection[0];
  }
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    return (collection.length === 0);
  }
}

let q = new Queue();

// Queue items
q.enqueue('Tom');
q.enqueue('James');
q.enqueue('Tiffany');
q.enqueue('Rosalinda');

// Print Queue to check it
q.print();

// Dequeue first item
q.dequeue();

// Print Queue to check it
q.print();

// Check item in front of queue, size of queue, if queue is empty
// Queue = array
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());



