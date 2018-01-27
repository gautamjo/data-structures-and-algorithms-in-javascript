var arr = Array.apply(null, Array(10)).map(function(_, i) { return i; });

// reverse an array without using reverse function
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr.length - 1 - i;
}

console.log(arr); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]


// another way to reverse 
function reverseArray(arr) {
    var arrOutput = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arrOutput.push(arr[i]);
    }
    return arrOutput;
}

// the array that was reversed from 9-0 with the first code snippet is reverse back to 0-9
// using reverseArray function
console.log(reverseArray(arr)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]