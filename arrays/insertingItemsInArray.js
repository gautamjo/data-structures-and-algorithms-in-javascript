// inserting an element to the beginning of an array without using unshift
// first creating an array from 0 - 9
var arr = Array.apply(null, Array(10)).map(function(_, i) { return i; });

// looping over the array assinging previous number to the current index
for (var i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
}
// assigning -1 to array at index 0
arr[0] = -1;

console.log(arr);