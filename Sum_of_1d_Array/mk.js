

function sumOf1DArray(arr) {
    var sum = 0
    var arr2 = []
    for (var n = 0; n < arr.length; n++) {
        sum += arr[n]
        arr2.push(sum)
    }
    return arr2

}


console.log(sumOf1DArray([1, 2, 3, 4]));

