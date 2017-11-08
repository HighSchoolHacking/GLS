import { expect } from "chai";
import "mocha";

import { LineComponentSeparator } from "../../../lib/Conversions/LineComponentSeparator";

describe("LineComponentSeparator", () => {
    describe("separate", () => {
        const tests = [
            {
                description: "gives a command name when one is given without parameters",
                input: "abc",
                output: ["abc"]
            },
            {
                description: "gives a command name and parameter when a command is given with a parameter",
                input: "abc : def",
                output: ["abc", "def"]
            },
            {
                description: "gives a command name and two parameters when a command is given with two parameters",
                input: "abc : def ghi",
                output: ["abc", "def", "ghi"]
            },
            {
                description: "separates a bracket recursion with a single internal command",
                input: "abc : { def }",
                output: ["abc", "{ def }"]
            },
            {
                description: "separates a bracket recursion with an internal command and parameters",
                input: "abc : { def : ghi jkl }",
                output: ["abc", "{ def : ghi jkl }"]
            },
            {
                description: "separates a bracket recursion with an internal command and parameters",
                input: "abc : { def : ghi jkl }",
                output: ["abc", "{ def : ghi jkl }"]
            },
            {
                description: "separates a parenthesis recursion with internal parameters",
                input: "abc : (def ghi)",
                output: ["abc", "def ghi"]
            },
            {
                description: "ignores brackets within quotes",
                input: 'abc: "{ def : ghi }"',
                output: ["abc", '"{ def : ghi }"']
            },
            {
                description: "ignores brackets within nested quotes",
                input: 'abc : { def ghi : jkl "{" mno }',
                output: ["abc", '{ def ghi : jkl "{" mno }']
            },
            {
                description: "ignores an escaped quote",
                input: 'abc : "\""',
                output: ["abc", '\""']
            }
        ];

        for (const test of tests) {
            it(test.description, () => {
                // Arrange
                const separator = new LineComponentSeparator();

                // Act
                const actual = separator.separate(test.input);

                // Assert
                expect(actual).to.be.deep.equal(test.output);
            });
        }
    });
});
