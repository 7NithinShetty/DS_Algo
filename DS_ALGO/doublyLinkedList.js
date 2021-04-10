class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      //             console.log("push performed")  //this line for the "inserting" setion
    }
    this.length++;
    return this;
  }

  pop() {
    let removedTail = this.tail;
    if (!this.length) return removedTail;
    else if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null;
      //             console.log("pop performed")  //this line for the "remove" setion
    }
    this.length--;
    return removedTail;
  }

  shift() {
    let currentHead = this.head;
    if (!this.length) return currentHead;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      currentHead.next = null;
      this.head.prev = null;
      //             console.log("shift performed")  //this line for the "remove" setion
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      //             console.log("unshift performed")  //this line for the "inserting" setion
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    var current;
    if (index <= this.length / 2) {
      console.log("Started searching from the Head");
      let count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
      //            return current;
    } else {
      console.log("Started searching from the Tail");
      let count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
      //             return current;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
  // reverse() {
  //   let node = this.head;
  //   this.head = this.tail;
  //   this.tail = node;
  //   let next;
  //   let prev = null;
  //   for (var i = 0; i < this.length; i++) {
  //     next = node.next;
  //     node.next = prev;
  //     node.prev = next;
  //     prev = node;
  //     node = next;
  //   }
  //   return this;
  // }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev;
    for (var i = 0; i < this.length; i++) {
      prev = node.next;
      node.next = next;
      node.prev = prev;
      next = node;
      node = prev;
    }
    return this;
  }
}

let firstList = new DoublyLinkedList();

//examples
firstList.push(1);
firstList.push(2);
firstList.push(3);
firstList.push(4);
firstList.push(5);
firstList.push(6);
firstList.push(7);
firstList.push(8);
firstList.push(9);
firstList.push(10);
