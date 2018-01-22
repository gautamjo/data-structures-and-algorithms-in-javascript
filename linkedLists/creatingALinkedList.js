function LinkedList() {
    // to create a linkedlist a helper Object called Node needs to be created
    // this Object contains an 'element' attribute which is the value that will be added 
    // and a 'next' attribute is the pointer to the next node
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0,
        head = null;

    this.append = function(element) {
        let node = new Node(element),
            current;

        if (head === null) {
            // first node on the list
            head = node;
        } else {
            current = head;
            // loop the list until find last item
            while (current.next) {
                current = current.next;
            }
            // get the last item and assign next to the node to make the link
            current.next = node;
        }
        // update the size of the list
        length++
        console.log(length);
    };

    this.removeAt = function(position) {
        // check for out of bound values
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            // removing the first item
            if (position === 0) {
                head = current.next;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // link previous with current'next - skip it to remove
                previous.next = current.next;
            }
            length--;
            console.log(length);
            return current.element;

        } else {

            return null;
        }
    };

    this.insert = function(position, element) {

        //check for out-of-bounds values
        if (position >= 0 && position <= length) {

            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) { //add on first position

                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }

            } else if (position === length) { //last item //NEW

                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;

            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node; //NEW
                node.prev = previous; //NEW
            }

            length++; //update size of list

            return true;

        } else {

            return false;
        }
    };

    this.remove = function(element) {

        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function(element) {

        let current = head,
            index = -1;

        //check first item
        if (element == current.element) {
            return 0;
        }

        index++;

        //check in the middle of the list
        while (current.next) {

            if (element == current.element) {
                return index;
            }

            current = current.next;
            index++;
        }

        //check last item
        if (element == current.element) {
            return index;
        }

        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.toString = function() {

        let current = head,
            s = current ? current.element : '';

        while (current && current.next) {
            current = current.next;
            s += ', ' + current.element;
        }

        return s;
    };

    this.inverseToString = function() {

        let current = tail,
            s = current ? current.element : '';

        while (current && current.prev) {
            current = current.prev;
            s += ', ' + current.element;
        }

        return s;
    };

    this.print = function() {
        console.log(this.toString());
    };

    this.printInverse = function() {
        console.log(this.inverseToString());
    };

    this.getHead = function() {
        return head;
    };

    this.getTail = function() {
        return tail;
    };
}