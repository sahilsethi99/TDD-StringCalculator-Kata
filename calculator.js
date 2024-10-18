function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    if (!isNaN(numbers)) {
        return parseInt(numbers, 10);  // handle single number input
    }
}

module.exports = { add };