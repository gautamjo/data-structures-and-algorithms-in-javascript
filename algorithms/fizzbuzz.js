function fizzBuzz(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 15 === 0) {
            console.log(i, 'FizzBuzz');
        } else if (i % 3 === 0) {
            console.log(i, 'Fizz');
        } else if (i % 5 === 0) {
            console.log(i, "Buzz");
        } else {
            console.log(i);
        }
    }
}