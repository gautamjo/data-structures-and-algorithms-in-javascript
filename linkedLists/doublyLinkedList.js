function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// add method to the LinkedList prototype called addToHead
// this method takes in a parameter named value
LinkedList.prototype.addToHead = function(value) {
    // create a variable named newNode that will be an instance of the Node Object/Class
    var newNode = new Node(value, this.head, null);
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
};

// add method to the LinkedList prototype called addToTail
// this method takes in a parameter named value
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
    if (!this.head) {
        return null;
    }
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) {
        this.head.previous = null;
    } else {
        this.tail = null;
    }
    return val;
};

LinkedList.prototype.removeTail = function() {
    if (!this.tail) {
        return null;
    }
    var val = this.tail.value;
    this.tail.next = null;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    return val;
};

LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) {
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
};

LinkedList.prototype.indexOf = function(value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            indexes.value(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
}