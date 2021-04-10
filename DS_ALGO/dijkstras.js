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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstras(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return the path at the end
    let currentSmallest;

    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //as long as there is something to visit
    while (nodes.values.length) {
      currentSmallest = nodes.dequeue().val;
      if (currentSmallest === finish) {
        while (previous[currentSmallest]) {
          path.push(currentSmallest);
          currentSmallest = previous[currentSmallest];
        }
        break;
      }
      if (currentSmallest || distances[currentSmallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[currentSmallest]) {
          //finding neighbour node(s)
          let nextNode = this.adjacencyList[currentSmallest][neighbour];
          //calculating new distance to neighbouring node(s)
          let candidate = distances[currentSmallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            //Updating the new samllest distance to neighbour
            distances[nextNeighbour] = candidate;
            //Updating previous - throgh path to neighbour
            previous[nextNeighbour] = currentSmallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(currentSmallest).reverse();
  }
}

//              A
//          4 /    \ 5
//           /      \
//          B        C
//        1 |        | 3
//          |        |
//          D ___2__ E
//          \       /
//         1 \     / 1.5
//              F

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4.5);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "D", 1);
graph.addEdge("D", "E", 2);
graph.addEdge("E", "C", 1);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// graph.addEdge("A","B", 4)
// graph.addEdge("A","C", 2)
// graph.addEdge("B","E", 3)
// graph.addEdge("C","D", 2)
// graph.addEdge("C","F", 4)
// graph.addEdge("D","E", 3)
// graph.addEdge("D","F", 1)
// graph.addEdge("E","F", 1);

// graph.Dijkstras("A","E");
