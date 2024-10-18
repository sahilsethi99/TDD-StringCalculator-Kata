function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    // Replace newlines with commas
    const sanitizedNumbers = numbers.replace(/\n/g, ',');
    
    // Handle single number
    if (!isNaN(sanitizedNumbers)) {
        return parseInt(sanitizedNumbers, 10);
    }

    // Split numbers by commas and handle multiple numbers
    const numberArray = sanitizedNumbers.split(",").map(num => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };