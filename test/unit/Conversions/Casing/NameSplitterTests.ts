import { expect } from "chai";

import { NameSplitter } from "../../../../lib/Conversions/Casing/NameSplitter";

describe("NameSplitter", () => {
    describe("split", () => {
        const itSplitsIntoWords = (name: string, expected: string[]) => {
            // Arrange
            const splitter = new NameSplitter();

            // Act
            const actual = splitter.split(name);

            // Assert
            expect(actual).to.be.deep.equal(expected);
        };

        it("gives nothing for a blank name", () => {
            itSplitsIntoWords("", []);
        });

        it("splits a single name", () => {
            itSplitsIntoWords("Abc", ["Abc"]);
        });

        it("splits two words from a name", () => {
            itSplitsIntoWords("AbcDef", ["Abc", "Def"]);
        });

        it("splits three words from a name", () => {
            itSplitsIntoWords("AbcDefGhi", ["Abc", "Def", "Ghi"]);
        });
    });
});
