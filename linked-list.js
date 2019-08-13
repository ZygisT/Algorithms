// Linked list

function LinkedList() {
  let length = 0;
  let head = null;

  // Create node to store info and link of the element
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    let node = new Node(element);
    if(head === null) {
      head = node;
    } else {
      let currentNode = head;

      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      // Add element to the end of the list
      currentNode.next = node;
    }
    // incriment the length of linked array
    length++;
  }

  this.remove = function(element) {
    let currentNode = head;
    let previousNode;
    if(currentNode.element === element) {
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    length--;
  }
};