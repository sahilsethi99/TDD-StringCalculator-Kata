const { add } = require('./calculator');

function testAddFunction() {
    const testCases = [
        { input: "", expected: 0 },
        { input: "1", expected: 1 },
        { input: "1,5", expected: 6 },
        { input: "1\n2,3", expected: 6 },
        { input: "//;\n1;2", expected: 3 },
        { input: "2,3,4", expected: 9 },
        { input: "10\n20,30\n40", expected: 100 },
        { input: "//:\n5:10:15", expected: 30 },
        { input: "1,-2,3", expectedError: 'Negative numbers not allowed: -2' },
        { input: "-1,-2", expectedError: 'Negative numbers not allowed: -1, -2' },
        { input: "abc", expectedError: 'Invalid input: abc' }
    ];

    testCases.forEach(({ input, expected, expectedError }) => {
        try {
            const result = add(input);
            console.log(`add("${input}") = ${result} (Expected: ${expected})`);
            if (expectedError) {
                console.error(`Error: Expected to throw "${expectedError}" but did not.`);
            }
        } catch (error) {
            if (expectedError) {
                console.log(`add("${input}") threw an error: "${error.message}" (Expected: ${expectedError})`);
            } else {
                console.error(`Error: Unexpected error for input "${input}": "${error.message}"`);
            }
        }
    });
}

testAddFunction();
