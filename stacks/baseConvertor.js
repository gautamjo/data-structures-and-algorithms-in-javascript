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

// a function to convert from decimal to any base
function baseConverter(decimalNum, base) {
    let remStack = new Stack(),
        rem;
    baseString = "",
        digits = "0123456789ABCDEF";

    while (decimalNum > 0) {
        rem = Math.floor(decimalNum % base);
        remStack.push(rem);
        decimalNum = Math.floor(decimalNum / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(1256890, 2)) // 100110010110110111010
console.log(baseConverter(1256890, 8)) // 4626672
console.log(baseConverter(1256890, 16)) // 132DBA