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

function towerOfHanoi(n, from, to, helper) {
    if (n > 0) {
        towerOfHanoi(n - 1, from, helper, to);
        to.push(from.pop());
        console.log("------");
        console.log("source: " + from.toString());
        console.log("Dest: " + to.toString());
        console.log("helper: " + helper.toString());
        towerOfHanoi(n - 1, helper, to, from);
    }
}

var source = new Stack();
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

towerOfHanoi(source.size(), source, dest, helper);

source.print();
helper.print();
dest.print();