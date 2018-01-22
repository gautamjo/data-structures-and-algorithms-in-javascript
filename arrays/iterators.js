// creating a function that returns true if a number is even else returns false
function isEven(x) {
    return (x % 2 === 0);
}

// creating a array of 15 items
var arr = Array.apply(null, Array(15)).map(function(_, i) { return i; });


// ++++++++++
// | every 	|
// ++++++++++
// iterating using the every method will iterate each element of the array until 
// the return of the function is false. In this case it will only iterate till 1
// and return false as 1 is not a multiple of 2 
console.log(arr.every(isEven));

// ++++++++++
// | some 	|
// ++++++++++
// iterating using the some method is almost the same. except it will stop iterating
// the elements once it hits a true. In this case the first element is 0 and that is true.
// So it will return true and stop iterating.
console.log(arr.some(isEven));

// +++++++++++
// | forEach |
// +++++++++++
// forEach iterates over all the elements of the array no matter what
arr.forEach(function(d) {
    console.log(isEven(d))
});

// ++++++++++
// | map 	|
// ++++++++++
// the map method iterates over all the elements and returns a new array with the results
console.log(arr.map(isEven)); // [true, false, true, false, true, false, true, false, 
//true, false, true, false, true, false, true, false]

// I can assign the result from the map method to a variable and use 
// indices to check value of elements.
var resultMap = arr.map(isEven);
console.log("Item at index 0 was:", resultMap[0]); // Item at index 0 was: true
console.log("Item at index 13 was:", resultMap[13]); // Item at index 0 was: false

// ++++++++++
// | filter |
// ++++++++++
// filter returns a new array of result of only those elements that evaluate to true. 
// However the result contains numbers instead of boolean values.
var filtered = arr.filter(isEven);
console.log(filtered); // [ 0, 2, 4, 6, 8, 10, 12, 14 ]

// ++++++++++
// | reduce |
// ++++++++++
// the reduce method takes a function with previousValue, currentValue, index and 
// array as parameters. This function returns a value added to an accumulator which is 
// returned after the method stops execution. It can be useful if we want to sum up values
// of an array.
var reduced = arr.reduce(function(previous, current, index) {
    return previous + current;
});
console.log(reduced); // 105