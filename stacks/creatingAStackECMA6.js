class Stack {
	constructor () {this.items = []; }
	// adding a push method
	push(element) {
		this.items.push(element);
	}
	// adding a pop method
	pop(){
		console.log("last item removed");
		this.items.pop();
	}
	// adding a peek method
	peek(){
		return this.items[this.items.length - 1];
	}
	// adding an isEmpty method
	isEmpty(){
		return this.items.length === 0;
	}
	// adding a size method
	size(){
		return this.items.length;
	}
	// adding a clear method
	clear(){
		console.log("stack cleared");
		this.items = [];
	}
}

// creating a new stack
let stack = new Stack();

stack.push(10);
stack.push(12);
stack.push(15);

console.log(stack.peek()); // 15

console.log(stack.isEmpty()); // false

console.log(stack.size()) // 3

stack.pop(); // last item removed

console.log(stack.size()) // 2

stack.clear(); // stack cleared

console.log(stack.isEmpty()); // true