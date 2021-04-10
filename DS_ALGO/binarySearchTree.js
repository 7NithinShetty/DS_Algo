class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTrees {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else current = current.left;
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else current = current.right;
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    if (this.root === null) return false;
    while (current) {
      if (val === current.val) return true;
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
    }
    return false;
  }

  //Breadth First Search Tree
  //                  10
  //              8       15
  //           5   9   13    20

  BSF() {
    let visitedData = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visitedData.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visitedData;
  }
  //Depth First Search - preOrder
  //                  10
  //              8       15
  //           5   9   13    20
  DFSpreOrder() {
    let visitedData = [];
    let current = this.root;
    function traverse(node) {
      visitedData.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedData;
  }
  //                  10
  //              8       15
  //           5   9   13    20
  DFSinOrder() {
    let visitedData = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedData.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedData;
  }
  //                  10
  //              8       15
  //           5   9   13    20

  //   [5,8,9,10,13,15,20]
  DFSpostOrder() {
    let visitedData = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedData.push(node.val);
    }
    traverse(current);
    return visitedData;
  }
}

let tree = new BinarySearchTrees();
tree.insert(10);
tree.insert(15);
tree.insert(8);
tree.insert(9);
tree.insert(5);
tree.insert(13);
tree.insert(20);
