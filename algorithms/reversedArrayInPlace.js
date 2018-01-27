function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var tempArr = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempArr;
    }
    return arr
}