/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
    if (!numbers.length) return numbers;
    numbers.sort((a, b) => a - b).splice(1, numbers.length - 2);
    return numbers;
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
    if (!numbers.length) return numbers;
    let largest = Number.NEGATIVE_INFINITY;
    let smallest = Number.POSITIVE_INFINITY;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) largest = numbers[i];
        if (numbers[i] < smallest) smallest = numbers[i];
    }
    return [smallest, largest];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
