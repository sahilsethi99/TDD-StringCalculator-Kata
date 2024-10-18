const {add }= require('./calculator');  // assuming our function will be in a file called calculator.js

test('should return 0 when an empty string is passed', () => {
    expect(add("")).toBe(0);
});