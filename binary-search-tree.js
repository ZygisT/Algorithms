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
}