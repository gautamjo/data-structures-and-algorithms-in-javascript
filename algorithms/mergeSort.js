function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var arr1 = arr.slice(0, mid);
    var arr2 = arr.slice(mid);

    return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(arr1, arr2) {
    var result = [];
    while (arr1.length && arr2.length) {
        var minElem;
        if (arr1[0] < arr2[0]) {
            minElem = arr1.shift();
        } else {
            minElem = arr2.shift();
        }
        result.push(minElem);
    }

    if (arr1.length) {
        result = result.concat(arr1);
    } else {
        result = result.concat(arr2);
    }

    return result;

}