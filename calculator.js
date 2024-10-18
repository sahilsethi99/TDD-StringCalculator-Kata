function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    // Handle single number
    if (!isNaN(numbers)) {
        return parseInt(numbers, 10);  // handle single number input
    }

     // Split numbers by commas and handle multiple numbers
     const numberArray = numbers.split(",").map(num => parseInt(num, 10));
     return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };