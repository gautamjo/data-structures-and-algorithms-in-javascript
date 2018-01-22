// to ensure that a property will be private in a class WeakMap can be used 
// a WeakMap stores a key value pair, where the object is a key and the value can be a 
// data type
let Stack = (function() {
    const items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }

        push(elements) {
            let s = items.get(this);
            s.push(elements);
        }

        pop() {
            console.log("last item removed");
            let s = items.get(this);
            let r = s.pop();
            return r;
        }

        peek() {
            let s = items.get(this);
            return s[s.length - 1];
        }

        isEmpty() {
            let s = items.get(this);
            return s.length === 0;
        }

        size() {
            let s = items.get(this);
            return s.length;
        }

        clear() {
            console.log("stack cleared");
            items.set(this, [])
        }

        toString() {
        	return items.get(this).toString();
        }
    }

    return Stack;
})();
// Though now the Stack class has a private property called items with this approach 
// however, it is not possible to inherit private properties if the class 
// is extended