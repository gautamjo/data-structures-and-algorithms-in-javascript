// ES6 introduces a new primitive type called Symbol that is immutable and can be used as
// an object property. Below Symbol is used to declare the items property in the Stack class
let _items = Symbol();

class Stack {
    constructor() {
        this[_items] = [];
    }
    // adding a push method
    push(elements) {
        this[_items].push(elements);
    }
    // adding a pop methog
    pop() {
        console.log("last item removed");
        this[_items].pop();
    }
    // adding a peek method
    peek() {
        return this[_items][this[_items].length - 1]
    }
    // adding an isEmpty method
    isEmpty() {
        return this[_items].length === 0;
    }
    // adding a size method
    size() {
        return this[_items].length;
    }
    // adding a clear method
    clear() {
        console.log("stack cleared");
        this[_items] = [];
    }
}
// This approach provides a false class private property, because the method 
// Object.getOwnPropertySymbol() can be used to retrieve all the property Symbols
// declared in the class