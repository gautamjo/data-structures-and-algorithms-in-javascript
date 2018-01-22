var arr = Array.apply(null, Array(10)).map(function(_, i) { return i; });
// reverse the array
var reversedArr = arr.reverse()

//++++++++
//| sort |
//++++++++
// simply sorting an array using the sort method won't sort it properly. This is because 
// the sort method by default sorts the elments lexographically assuming that the 
// elments are strings 
var sortedArr = reversedArr.sort(function(a, b) {
    return a - b;
});

console.log(sortedArr);

// the previous code can also be represented like so
function compare(a, b) {
    if (a < b) {
        //returns -1 if b is greater than a
        return -1;
    } else if (a > b) {
        //return 1 if a is greater than b
        return 1;
        //else returns 0 of a and b are equal
    } else {
        return 0;
    }
}

console.log(arr.sort(compare));

//++++++++++++++++++
//| custom sorting |
//++++++++++++++++++
// we can sort an array with any type of object in it
var persons = [
    { name: "John", age: 30 },
    { name: "Aarti", age: 25 },
    { name: "Omar", age: 20 }
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    } else {
        return 0;
    }
}

console.log(persons.sort(comparePerson));

//+++++++++++++++++++
//| sorting strings	|
//+++++++++++++++++++
// javascript compares each character according to its ASCII value. Therefore, sort 
// strings correctly we will have to pass a compareFunction which contains code
// to ignore the case of the letters

var names = ["Anapurna", "Jacob", "anapurna", "Jacob"];

function compareString(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

console.log(names.sort(compareString)); // [ 'Anapurna', 'anapurna', 'Jacob', 'Jacob' ]

// for accented characters we can use localCompare method
var names2 = ["Noël", "Noel"];

console.log(names2.sort(function(a, b) {
    return a.localeCompare(b);
})); // [ 'Noel', 'Noël' ]