/**
 * Adds a string of numbers and returns the sum, supporting custom delimiters.
 * 
 * @param {string} numbers - A string of comma-separated or custom-delimited numbers.
 * @returns {number} The sum of the numbers.
 * @throws {Error} Throws an error for invalid inputs and negative numbers.
 */
function add(numbers) {
    if (numbers === "") return 0; // Return 0 for empty input

    const { delimiter, numbersString } = extractDelimiter(numbers); // Extract delimiter
    const numberArray = parseNumbers(sanitizeInput(numbersString, delimiter)); // Parse numbers

    checkForNegativeNumbers(numberArray); // Check for negatives

    return numberArray.reduce((sum, num) => sum + num, 0); // Return the sum
}

function extractDelimiter(numbers) {
    let delimiter = ","; // Default delimiter
    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterLineEnd); // Extract custom delimiter
        numbers = numbers.substring(delimiterLineEnd + 1); // Get the numbers string
    }
    return { delimiter, numbersString: numbers };
}

function sanitizeInput(numbersString, delimiter) {
    return numbersString.replace(new RegExp(`[\\n${delimiter}]`, 'g'), ','); // Replace delimiters
}

function parseNumbers(numbersString) {
    return numbersString.split(",").map(num => {
        const parsedNum = parseInt(num, 10); // Parse each number
        if (isNaN(parsedNum)) throw new Error(`Invalid input: ${num}`); // Check for NaN
        return parsedNum;
    });
}

function checkForNegativeNumbers(numberArray) {
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`); // Throw if negatives
    }
}

module.exports = { add };
