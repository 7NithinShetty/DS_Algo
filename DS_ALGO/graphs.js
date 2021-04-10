class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let edge = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, edge);
    }
    //         var a = this.adjacencyList[vertex].length;
    //         for(let i=a-2;i>0;i--){
    //            this.removeAdge(vertex, this.adjacencyList.vertex[i]);
    //         }
    delete this.adjacencyList[vertex];
  }

  //Graph Traversal Depth First Recursive
  depthFirstRecursive(startingVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighnor) => {
        if (!visited[neighnor]) return dfs(neighnor);
      });
    })(startingVertex);
    return result;
  }

  //Graph Traversal Depth First Iterative
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighnor) => {
        if (!visited[neighnor]) {
          visited[neighnor] = true;
          stack.push(neighnor);
        }
      });
    }
    return result;
  }
  //Graph Traversal Breadth First
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}
//              A
//            /    \
//           B      C
//           |      |
//           D  ___ E
//            \   /
//              F

let g1 = new Graph();
g1.addVertex("A");
g1.addVertex("B");
g1.addVertex("C");
g1.addVertex("D");
g1.addVertex("E");
g1.addVertex("F");

g1.addEdge("A", "B");
g1.addEdge("A", "C");
g1.addEdge("B", "D");
g1.addEdge("D", "E");
g1.addEdge("E", "C");
g1.addEdge("D", "F");
g1.addEdge("E", "F");
