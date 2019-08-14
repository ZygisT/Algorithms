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

  this.isEmpty = function() {
    return length === 0;
  }

  this.indexOf = function(element) {
    let currentNode = head;
    let index = -1;

    while(currentNode) {
      index++;
      if(currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    // Element is not in the link list
    return -1;
  }

  this.elementAt = function(index) {
    let currentNode = head;
    let count = 0;
    // Loop until the right index has been found
    while (count < index) {
      count ++;
      currentNode = currentNode.next
    }
    return currentNode.element;
  }

  // Insert node at specific location
  this.addAt = function(index, element) {
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    /* 
    If index we are trying to insert into is larger
    than the length of array return false 
    */
    if(index > length) {
      return false;
    }

    if(index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while(currentIndex < index) {
        currentIndex ++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  }

  // Remove node at specific location
  this.removeAt = function(index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    /*
    Cannot remove negative index or
    index larger or equal the length of array
    */
    if (index < 0 || index >= length) {
      return null
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
        while(currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  }
};

