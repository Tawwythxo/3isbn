const { it, describe, expect } = require("@jest/globals");
const { checkISBN } = require('./checkISBN');

describe('checkISBN', () => {

    [
        { input: "100000000", output: "1" },
        { input: "010000000", output: "2" },
        { input: "001000000", output: "3" },
        { input: "000100000", output: "4" },
        { input: "000010000", output: "5" },
        { input: "000001000", output: "6" },
        { input: "000000100", output: "7" },
        { input: "000000010", output: "8" },
        { input: "000000001", output: "9" },
        { input: "000020000x", output: "x" },


        { input: "3258031816", output: "9" },
        { input: "32-5803-18-16", output: "9" },

        { input: "3528031816", output: "6" },
        { input: "3442151473", output: "3" },
        { input: "349913599x", output: "x" },
        { input: "3-4421-5147-3", output: "3" },
        { input: "3-4991-3599-x", output: "x" },

        { input: "3-928475-32-0", output: "" },


    ].forEach(({ input, output }) => {
        it(`should turn ${input} to ${output}`, () => {
            expect(checkISBN(input)).toBe(output)
        });
    });
})