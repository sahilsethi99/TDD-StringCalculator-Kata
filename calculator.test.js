const { add } = require('./calculator'); // Import the add function from calculator.js

// Test suite for the add function
describe('add function', () => {
    // Test case for empty string input
    test('should return 0 when an empty string is passed', () => {
        expect(add("")).toBe(0);
    });

    // Test case for a single number input
    test('should return the number itself when a single number is passed', () => {
        expect(add("1")).toBe(1);
    });

    // Test case for multiple numbers input
    test('should return the sum when two numbers are passed', () => {
        expect(add("1,5")).toBe(6);
    });

    // Test case for input with new line between numbers
    test('should return the sum when new lines are used between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    // Test case for custom delimiter
    test('should return the sum when a custom delimiter is used', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    // Test case for invalid input (non-numeric)
    test('should throw an error for non-numeric input', () => {
        expect(() => add("abc")).toThrow('Invalid input: abc');
    });

    // Test case for negative numbers
    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow('Negative numbers not allowed: -2');
    });

    // Test case for multiple negative numbers
    test('should throw an error for multiple negative numbers', () => {
        expect(() => add("-1,-2")).toThrow('Negative numbers not allowed: -1, -2');
    });
});
