
const adjList1 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // your code here
    /*
     Write a function called printBreadthFirst
    that will traverse the given graph breadth-first,
     printing each node when visited exactly once, on a newline.
     */


    // Create a queue and enqueue the starting node
    let q = [start]
    //Create a set to store visited nodes
    let visited = new Set().add(start)
    //While the queue is not empty, repeat steps 4-6
    while (q.length > 0) {

        //Dequeue the first node
        let dequeued = q.shift()
        //DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
        console.log(dequeued)

        //For each unvisited neighbor, add it to the visited nodes and to the back of the queue

        adjList1[dequeued].forEach(node => {
            if (!visited.has(node)) {
                q.push(node)
                visited.add(node)
            }

        });
    }


}

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  4, 3, 5, 6, 2, 1

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const adjList2 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printDepthFirst(start) {
    // your code here

    // Create a queue and enqueue the starting node
    let stack = [start]
    //Create a set to store visited nodes
    let visited = new Set().add(start)
    //While the queue is not empty, repeat steps 4-6
    while (stack.length > 0) {

        //Dequeue the first node
        let popped = stack.pop()
        //DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
        console.log(popped)

        //For each unvisited neighbor, add it to the visited nodes and to the back of the queue

        adjList2[popped].forEach(node => {
            if (!visited.has(node)) {
                stack.push(node)
                visited.add(node)
            }

        });
    }
}

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// // One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// // One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// // One possible solution:  4, 6, 5, 2, 1, 3



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adjList3 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    // your code here


    // Create a queue and enqueue the starting node
    let q = [start]
    //Create a set to store visited nodes
    let visited = new Set().add(start)
    //While the queue is not empty, repeat steps 4-6
    while (q.length > 0) {

        //Dequeue the first node
        let dequeued = q.shift()
        //DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
        if (dequeued === end) return true;

        //For each unvisited neighbor, add it to the visited nodes and to the back of the queue

        adjList3[dequeued].forEach(node => {
            if (!visited.has(node)) {
                q.push(node)
                visited.add(node)
            }

        });
    }
    return false

}

// console.log("First Test:");
// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log("Second Test:");
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log("Third Test:");
// console.log(breadthFirstSearch(6, 1)); // -> false






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adjList4 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
    // your code here
    //1. Create a queue. Create a separate array containing the starting node. Enqueue this array. The enqueued array is the current path.
    let q =[[start]]

    //2.Create a set to store visited nodes
    let visited = new Set().add(start)

    //3.While the queue is not empty, repeat steps 4-6
    while(q.length >0){

        //4.Dequeue the first path, and save it in a variable
        let dequeuedPath = q.shift();
        //5.Save the last node in the path in a variable (DO NOT pop it)
        let lastNode = dequeuedPath[dequeuedPath.length-1]
        //6.IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
        if(dequeuedPath === end)return dequeuedPath;

          //1.For each unvisited neighbor of the last node:
          adjList4[lastNode].forEach(node => {
            if(!visited.has(node)){
             let newPath = [...dequeuedPath, [node]];
              // dequeuedPath.push([node])
               q.push(newPath)
                //2.Add it to the visited nodes set
                visited.add(node)
            }
          })

    }
    return false
    //7. Copy the saved path, and add the neighbor to the end. Enqueue this new path
    //8. If the queue has become empty without finding the thing, then the thing has not been found. Return false, an error, or a message as appropriate for the problem you are solving.
}

console.log("First Test 4:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test 4:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test 4:");
console.log(aShortestPath(6, 1)); // -> false





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adjList5 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function degreesOfSeparation(start, end) {
    // your code here
}

// console.log("First Test:");
// console.log(degreesOfSeparation(1, 3)); // -> 2
// console.log("Second Test:");
// console.log(degreesOfSeparation(5, 2)); // -> 1
// console.log("Third Test:");
// console.log(degreesOfSeparation(6, 1)); // -> false
