var arr2D = [];
arr2D[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2D[1] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// iterating the elements of two-dimentional array
for (var i = 0; i < arr2D.length; i++) {
    for (var j = 0; j < arr2D[i].length; j++) {
        console.log(arr2D[i][j])
    }
}

// the same code above inside a function
function printMatrix(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

printMatrix(arr2D);