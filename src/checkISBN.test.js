const { it, describe, expect } = require("@jest/globals");
const { checkISBN } = require('./checkISBN');

describe('checkISBN', () => {

    [
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