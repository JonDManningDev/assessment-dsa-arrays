/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  const number = numbers.length + 1;
  let missing = null;

  for (let n = 1; n <= number; n++) {
    let match = false;

    for (let i = 0; i < numbers.length; i++) {
      if (n === numbers[i]) {
        match = true;
        break;
      }
    }

    if (!match) {
      missing = n;
      return missing;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
    const number = numbers.length + 1;
    const numberSum = number * (number + 1) / 2;
    let arraySum = 0;
    for (let i =  0; i < numbers.length; i++) {
        arraySum += numbers[i];
    }
    const missingNumber = numberSum - arraySum;
    return missingNumber;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
