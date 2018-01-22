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
            items.set(this, []);
        }

        toString() {
            return items.get(this).toString();
        }

        print() {
            console.log(this.toString());
        }
    }

    return Stack;
})();

// a function to convert base10 or decimal numbers to binary
function divideBy2(decimalNum) {
    var remStack = new Stack(),
        rem,
        binaryString = "";

    while (decimalNum > 0) {
        rem = Math.floor(decimalNum % 2);
        remStack.push(rem);
        decimalNum = Math.floor(decimalNum / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}


console.log(divideBy2(10)); // 1010