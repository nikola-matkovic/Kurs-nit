//make array  of first 10 numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sort them in descending order
numbers.sort(function(a, b) {
    return b - a;
    }
);

//use bubble sort function
function bubbleSort(numbers) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] < numbers[i + 1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return numbers;
}
//use quick sort function
function quickSort(numbers) {
    if (numbers.length <= 1) {
        return numbers;
    }
    var pivot = numbers.pop();
    var left = [];
    var right = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] <= pivot) {
            left.push(numbers[i]);
        } else {
            right.push(numbers[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}