// fibonacci with arrays
// fibonacci sequence is a sequence of numbers where the next number is the sum of the 
// previous two numbers
var fibonacci = [1, 1];
// checking fib sequence of the first 10 numbers
var num = 10;

for (var i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

fibonacci.forEach(function(d){
	console.log(d);
});

