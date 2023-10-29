function bubbleSort(arr) {
    const Arrlength = arr.length;

    for (let i = 0; i < Arrlength - 1; i++) {
        for (let j = 0; j < Arrlength - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const inputArray = [5, 3, 9, 7, 1];
const sortedArray = bubbleSort(inputArray);
console.log(sortedArray);
