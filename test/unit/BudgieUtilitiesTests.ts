import { expect } from "chai";
import "mocha";

import { BudgieUtilities } from "../../lib/BudgieUtilities";

describe("BudgieUtilities", () => {
    describe("stringReplaceAll", () => {
        interface ITestCase {
            description: string;
            expected: string;
            haystack: string;
            needle: string;
            replacement: string;
        }

        const testCases: ITestCase[] = [
            {
                description: "empty haystack",
                expected: "",
                haystack: "",
                needle: "needle",
                replacement: "replacement",
            },
            {
                description: "haystack with no matches",
                expected: "    ",
                haystack: "    ",
                needle: "needle",
                replacement: "replacement",
            },
            {
                description: "haystack with one match",
                expected: "  replacement  ",
                haystack: "  needle  ",
                needle: "needle",
                replacement: "replacement",
            },
            {
                description: "haystack with two matches",
                expected: "  replacement  replacement  ",
                haystack: "  needle  needle  ",
                needle: "needle",
                replacement: "replacement",
            },
            {
                description: "haystack with a needle that includes itself",
                expected: "  (needle)  (needle)  ",
                haystack: "  needle  needle  ",
                needle: "needle",
                replacement: "(needle)",
            },
        ];

        for (const test of testCases) {
            it(test.description, () => {
                // Act
                const actual = BudgieUtilities.stringReplaceAll(test.haystack, test.needle, test.replacement);

                // Act
                expect(actual).to.be.equal(test.expected);
            });
        }
    });
});
