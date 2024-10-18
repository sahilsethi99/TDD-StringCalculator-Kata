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

    // Split numbers by commas and handle multiple numbers
    const numberArray = sanitizedNumbers.split(",").map(num => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };