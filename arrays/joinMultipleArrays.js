var zero = 0,
    positiveNumbers = [1, 2, 3],
    negativeNumbers = [-3, -2, -1],
    numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers) // [ -3, -2, -1, 0, 1, 2, 3 ]