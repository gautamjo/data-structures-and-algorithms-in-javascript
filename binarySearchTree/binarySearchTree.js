function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if (value <= this.value) {
        if (!this.left) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }

    }
};

BST.prototype.contains = function(value) {
    if (value === this.value) {
        return true;
    } else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
};

// in order, pre order, post order
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === "pre-order") {
        iteratorFunc(this.value);
    }
    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "in-order") {
        iteratorFunc(this.value);
    }
    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "post-order") {
        iteratorFunc(this.value);
    }
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    // queue = first in first out
    var queue = [this];

    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }
};

BST.prototype.getMinVal = function() {
    if (!this.left) {
        return this.value;
    }
    return this.left.getMinVal();
};

BST.prototype.getMaxVal = function() {
    if (!this.right) {
        return this.value;
    }
    return this.right.getMaxVal();
}; 

function logDepth(value) {
    console.log(value);
}

function logBreadth(node) {
    console.log(node.value);
}

var bst = new BST(50);

bst.insert(20);
bst.insert(30);
bst.insert(15);
bst.insert(70);
bst.insert(65);
bst.insert(75);
console.log("Node Value", bst.value);
console.log("\n");
console.log("Post-order depth first traversal");
bst.depthFirstTraversal(logDepth, "post-order");
console.log("\n");
console.log("breadth first traversal");
bst.breadthFirstTraversal(logBreadth);
console.log("\n");
console.log("minimum value:", bst.getMinVal());
console.log("maximum value:", bst.getMaxVal());