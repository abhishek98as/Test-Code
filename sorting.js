function binarySortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (binaryValue(arr[j]) < binaryValue(arr[j + 1])) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function binaryValue(num) {
    return (num >>> 0).toString(2);
}

const inputArray = [5, 3, 9, 7, 1];
const sortedArray = binarySortDescending(inputArray);
console.log(sortedArray);



