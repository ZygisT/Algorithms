// Binary Search Tree

// Initiliaze a Node
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Init Binary search tree
class BST {
  // Create root node which is at the top of the tree
  constructor() {
    this.root = null;
  }

  // add function
  add(data) {
    // Referance to root node
    const node = this.root;
    // If it is first node on the tree
    if(node === null) {
      this.root = new Node(data);
      return;
    } else {
      // Recursive function

      // Node starts as root node
      const searchTree = function(node) {
        // If node data is less than node.data put
        // node on the left side of tree
        if (data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // Return searchTree and start searching
            // where to put node again (Recursiveness)
            return searchTree(node.left);
          }
          // If node data is more than node.data put
          // node on the right side of tree
        } else if (data > node.data) {
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            // Return searchTree and start searching
            // where to put node again (Recursiveness)
            return searchTree(node.left);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  // Return min value
  findMin() {
    // Starting position
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data
  }

  // Return max value
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current == current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // Check if data in the tree
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Remove node and data
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      // if data was found
      if (data == node.data) {

        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }

        // node has no left child
        if (node.left == null) {
          return node.right;
        }

        // node has no right child
        if (node.right == null) {
          return node.left;
        }

        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode == tempNode.left
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;

        // Left side of the tree
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}


const bst = new BST();

bst.add(5);
bst.add(9);
bst.add(1);
bst.add(3);
bst.add(7);
bst.add(4);
// bst.add(2);
// bst.remove(5)
// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.findMax());
// console.log(bst.isPresent(5));
