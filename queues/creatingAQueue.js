// will be creating a queue and the following methods will be available for the queue:
// * enqueue(elements): This adds a new item (or several items) to the tail of the queue
// * dequeue(): This removes the first item from the front of the queue; it also returns 
//the removed item
// * front(): returns the first item in the front of the queue without 
//modifiying the queue in any way
// * isEmpty(): returns true if the queue is empty else returns false
// * size(): returns the number of elements the queue contains

function Queue() {
    let items = [];

    this.enqueue = function(elements) {
        items.push(elements);
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

let queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue("Karan");
queue.enqueue("Komal");
queue.enqueue("katherine");

queue.print(); // Karan,Komal,katherine

console.log(queue.size()); // 3

console.log(queue.front()); // Karan

console.log(queue.dequeue()); // Karan

console.log(queue.size()); // 2

console.log(queue.front()); // Komal

console.log(queue.isEmpty()); // false