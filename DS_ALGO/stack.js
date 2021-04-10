class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    let First = this.first;

    if (!this.size) return null;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;

    this.size--;
    return First;
  }
}

let stack = new Stack();
