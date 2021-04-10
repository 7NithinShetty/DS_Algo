class maxBinaryHeap {
  constructor() {
    this.values = [45, 35, 33, 20, 18, 31, 28];
  }
  // inserting a value into the heap
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let ind = this.values.length - 1;
    let element = this.values[ind];
    while (ind > 0) {
      let parentInd = Math.floor((ind - 1) / 2);
      let parent = this.values[parentInd];
      if (element <= parent) break;
      this.values[parentInd] = element;
      this.values[ind] = parent;
      ind = parentInd;
    }
  }
  //Extracting a value from the heap
  extracaMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let ind = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildInd = 2 * ind + 1;
      let rightChildInd = 2 * ind + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildInd < length) {
        leftChild = this.values[leftChildInd];
        if (leftChild > element) swap = leftChildInd;
      }
      if (rightChildInd < length) {
        rightChild = this.values[rightChildInd];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildInd;
      }
      if (swap === null) break;
      this.values[ind] = this.values[swap];
      this.values[swap] = element;
      ind = swap;
    }
  }
}

let heap = new maxBinaryHeap();

//Priority Queue using minBinaryQueue

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // Enqueue
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let ind = this.values.length - 1;
    let element = this.values[ind];
    while (ind > 0) {
      let parentInd = Math.floor((ind - 1) / 2);
      let parent = this.values[parentInd];
      if (element.priority >= parent.priority) break;
      this.values[parentInd] = element;
      this.values[ind] = parent;
      ind = parentInd;
    }
  }
  //Dequeue
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let ind = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildInd = 2 * ind + 1;
      let rightChildInd = 2 * ind + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildInd < length) {
        leftChild = this.values[leftChildInd];
        if (leftChild.priority < element.priority) swap = leftChildInd;
      }
      if (rightChildInd < length) {
        rightChild = this.values[rightChildInd];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildInd;
      }
      if (swap === null) break;
      this.values[ind] = this.values[swap];
      this.values[swap] = element;
      ind = swap;
    }
  }
}

let pq = new PriorityQueue();
