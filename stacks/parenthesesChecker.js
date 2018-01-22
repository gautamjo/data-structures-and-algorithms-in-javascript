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

// creating a function to check if parentheses are balanced
function parenthesesChecker(symbols) {
    let stack = new Stack(),
        balanced = true,
        index = 0,
        symbol, top,
        opens = "([{",
        closers = ")]}";

    while (index < symbols.length && balanced) {
        symbol = symbols[index];
        if (opens.indexOf(symbol) > -1) {
            stack.push(symbol);
            console.log(`open symbol - stacking ${symbol}`);
        } else {
            console.log(`close symbol ${symbol}`);
            if (stack.isEmpty()) {
                balanced = false;
                console.log("Stack is empty, no more symbols to pop and compare");
            } else {
                top = stack.pop();

                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    balanced = false;
                    console.log(`poping symbol ${top} - is not a match compared to ${symbol}`);
                } else {
                    console.log(`poping symbol ${top} - is a match compared to ${symbol}`);
                }
            }
        }
        index++;
    }

    if (balanced && stack.isEmpty()) {
        return true;
    }
    return false;
}

console.log(parenthesesChecker('[{()]'));