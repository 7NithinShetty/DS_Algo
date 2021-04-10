class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hii there!");
// first.next = new Node("its Nithin Shetty")
// first.next.next = new Node("from belladi")
// first.next.next.next = new Node("Kundapura")

class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    var newTail = this.head;
    var current = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.length) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = val;
      this.tail = val;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let prevNode = this.get(index - 1);
    let newNode = new Node(val);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  //for reverse
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  //     reverse(){
  //         var node = this.head;
  //         this.head = this.tail;
  //         this.tail = node;
  //         let next;
  //         let prev = null;
  //         for(var i=0;i<this.length;i++){
  //             next = node.next;
  //             node.next = prev;
  //             prev = node;
  //             node = next;
  //         }
  //         return this;
  //     }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev;
    let next = null;
    for (var i = 0; i < this.length; i++) {
      prev = node.next;
      node.next = next;
      next = node;
      node = prev;
    }
    return this;
  }

  //   head                         Tail
  //     1 ---> 2 ---> 3 ---> 4 ---> 5 ---> null
  //
  //    let next = null and prev;
  //
  //           Tail                        Head
  //   null <--- 1 <--- 2 <--- 3 <--- 4 <--- 5

  rotate(position) {
    if (position > this.length || position < -this.length) return undefined;
    let rmdFrmHead;
    if (position >= 0 && position <= this.length) {
      while (position) {
        rmdFrmHead = this.shift();
        this.push(rmdFrmHead.val);
        position--;
      }
      return this;
    }
    if (position < 0 && position >= -this.length) {
      let rmdFrmTail;
      while (position) {
        rmdFrmTail = this.pop();
        this.unshift(rmdFrmTail.val);
        position++;
      }
      return this;
    }
  }
}
let list = new SinglyLinkedList();
