// Removing an item from the beginning of an array without using unshift
// first create an array from 0-9
arr = Array.apply(null, Array(10)).map(function(_, i){return i;});

for(var i = 0; i < arr.length; i++) {
	arr[i] = arr[i+1] 
}
// because the items are shifted one postion to the left the last item 
// in the array becomes undefined; the length of the array is still 10; so 
// the code only overwrote the array's original value, it was not actually removed. 

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, undefined ]