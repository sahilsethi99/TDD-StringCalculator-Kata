function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = ","; // Default delimiter

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterLineEnd); // Extract custom delimiter
        numbers = numbers.substring(delimiterLineEnd + 1); // Get the actual numbers string
    }

    // Replace newlines and custom delimiters with commas
    const sanitizedNumbers = numbers.replace(new RegExp(`[\\n${delimiter}]`, 'g'), ',');

    // Split numbers by commas
    const numberArray = sanitizedNumbers.split(",").map(num => {
        const parsedNum = parseInt(num, 10);
        // Check for NaN values and throw an error for non-numeric inputs
        if (isNaN(parsedNum)) {
            throw new Error(`Invalid input: ${num}`);
        }
        return parsedNum;
    });

    // Check for negative numbers
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);

}

module.exports = { add };