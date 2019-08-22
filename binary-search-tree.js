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

  add(data) {
    // Referance to root node
    const node = this.root;
    // If it is first node on the tree
    if(node === null) {
      this.root = new Node(data);
      return;
    } else {

      // Node starts as root node
      const searchTree = function(node) {
        // If node data is less than node.data put
        // node on the left side of tree
        if (data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
          // If node data is more than node.data put
          // node on the right side of tree
        } else if (data > node.data) {
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
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

  /*  
  Check if tree is balanced
  Tree is balanced if difference between min height   
  and max height is not more 1
  */

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  findMinHeight(node = this.root) {
    // If there are no nodes return null
    if (node == null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  findMaxHeight(node = this.root) {
    // If there are no nodes return null
    if (node == null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  /*
  inOrder function returns tree values from
  left to right
  */
  inOrder() {
    // If there is no tree return null
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  /* 
  preOrder function checks root nodes 
  before leaf nodes
  */
  preOrder() {
    // If there is no tree return null
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  /* 
  postOrder function checks nodes from
  leaf nodes first up to root nodes
  */
  postOrder() {
    // If there is no tree return null
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  /* 
  levelOrder function checks nodes in levels (layers)
  and starts from the top
  */
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while(Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if(node.left != null) {
          Q.push(node.left);
        };
        if (node.right != null) {
          Q.push(node.right);
        };
      };
      return result;
    } else {
      return null;
    };
  };
}


const bst = new BST();

// Tree #1

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);

bst.remove(17)
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(22);
console.log(bst.findMax());
console.log(bst.isPresent(22));

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());

// Tree #2

bst.add(50);
bst.add(17);
bst.add(72);
bst.add(12);
bst.add(23);
bst.add(9);
bst.add(14);
bst.add(19);
bst.add(54);
bst.add(67);
bst.add(76);

bst.remove(54)
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(22);
console.log(bst.findMax());
console.log(bst.isPresent(23));

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());

