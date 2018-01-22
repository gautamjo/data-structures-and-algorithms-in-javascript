// an array can be outputted into a single string by using the toString method
var arr = Array.apply(null, Array(10)).map(function(_, i){return i;});

console.log(arr.toString()); // 0,1,2,3,4,5,6,7,8,9 

// .join method can be used to separate the elements using a different separator such as -
console.log(arr.join("-"));