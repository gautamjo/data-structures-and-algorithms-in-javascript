// a stack is an ordered collection of items that follows the LIFO (Last In First Out)
// principle. The end of the stack is known as the top and the bottom of the stack is 
// known as the base.

// creating a stack object 
function Stack() {
	// properties and methods go here
	// a data structure is needed to store the elements 
	// of the stack. Therefore creating an array to do this.
	var items = [];
	// adding a push method for adding items to the top of the stack
	this.push = function(element) {
		items.push(element);
	};
	// adding a pop method to remove the top item of the stack.
	// it also returns the removed elements
	this.pop = function() {
		items.pop();
	};
	// adding a peek method to check the top element of the stack
	// this does not modify the stack. this is only for information.
	this.peek = function() {
		return items[items.length - 1];
	};
	// adding an isEmpty method that returns true if the stack is empty and false if 
	// the size of the stack is bigger than 0
	this.isEmpty = function(){
		return items.length === 0;
	};
	// adding a size method that returns the number of elements the stack contains.
	// it is similar to the length property of the array object. however because 
	// size is the term usually used for stacks instead of length the method is named so
	this.size = function() {
		return items.length;
	};
	// adding a clear method that simply empties the stack, removing all its elements
	this.clear = function() {
		item = [];
	};
	// adding a helper method that prints the elments of the stack on the console
	this.print = function() {
		console.log(items.toString());
	}
}

// creating an instance of the stack object that was just created

var stack = new Stack();

// checking if the stack is empty
console.log(stack.isEmpty()); // true

// lets add some elements to the stack
for(var i = 10; i < 15; i++){
	stack.push(i);
}

// checking the last number at the top of the stack
console.log(stack.peek()); // 14

// pushing another elment into the stack
stack.push(15);

// checking the size of the stack
console.log(stack.size()); // 6

// removing the last item that was appended to the stack
stack.pop();

// checking the size of the stack again
console.log(stack.size()); // 5

// print elements on the console
stack.print() // 10,11,12,13,14