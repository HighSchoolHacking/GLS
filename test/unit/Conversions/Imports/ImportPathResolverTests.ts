import { expect } from "chai";
import "mocha";

import { ImportPathResolver } from "../../../../lib/Conversions/Imports/ImportPathResolver";

describe("ImportPathResolver", () => {
    describe("resolve", () => {
        const itResolvesFromTo = (filePath: string[], importPath: string[], expected: string[]) => {
            // Arrange
            const resolver = new ImportPathResolver();

            // Act
            const resolved = resolver.resolve(filePath, importPath);

            // Assert
            expect(resolved).to.be.deep.equal(expected);
        };

        it("resolves a sibling path", () => {
            itResolvesFromTo(
                ["aaa", "bbb"],
                ["aaa", "bbb", "ccc"],
                ["ccc"]);
        });

        it("resolves a parent path", () => {
            itResolvesFromTo(
                ["aaa", "bbb"],
                ["aaa"],
                [".."]);
        });

        it("resolves a distant parent path", () => {
            itResolvesFromTo(
                ["aaa", "bbb", "ccc"],
                ["aaa"],
                ["..", ".."]);
        });

        it("resolves a parent sibling path", () => {
            itResolvesFromTo(
                ["aaa", "bbb", "ccc"],
                ["aaa", "ddd"],
                ["..", "..", "ddd"]);
        });

        it("resolves a cousin path", () => {
            itResolvesFromTo(
                ["aaa", "bbb"],
                ["aaa", "ccc"],
                ["..", "ccc"]);
        });

        it("resolves a distant cousin path", () => {
            itResolvesFromTo(
                ["aaa", "bbb", "ccc"],
                ["aaa", "ddd", "eee"],
                ["..", "..", "ddd", "eee"]);
        });
    });
});
