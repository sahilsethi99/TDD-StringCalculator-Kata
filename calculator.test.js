const {add }= require('./calculator');  // assuming our function will be in a file called calculator.js

test('should return 0 when an empty string is passed', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself when a single number is passed', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('should return the sum when newlines are used as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should return the sum when a custom delimiter is used', () => {
    expect(add("//;\n1;2;3")).toBe(6);
});
