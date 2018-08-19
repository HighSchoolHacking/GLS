import { expect } from "chai";
import "mocha";

import { CaseStyleConverterBag } from "../../../../lib/Rendering/Casing/CaseStyleConverterBag";
import { CaseStyle } from "../../../../lib/Rendering/Languages/Casing/CaseStyle";

describe("CaseStyleConverterBag", () => {
    describe("getConverter", () => {
        it("retrieves a case style by its enum", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();
            const words = ["abc", "def"];

            // Act
            const command = caseStyleConverterBag.getConverter(CaseStyle.FileSystemLowerCase);
            const result = command.convert(words);

            // Assert
            expect(result).to.be.equal("./abc/def");
        });

        it("throws an error for an unknown case style", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const action = () => caseStyleConverterBag.getConverter(-1);

            // Assert
            expect(action).to.throw(/Unknown case style requested(.*)/);
        });
    });

    describe("convert", () => {
        it("converts a case style by its enum", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const converted = caseStyleConverterBag.convertToCase(CaseStyle.PascalCase, ["foo", "bar"]);

            // Assert
            expect(converted).to.be.equal("FooBar");
        });

        it("throws an error for an unknown case style", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const action = () => caseStyleConverterBag.convertToCase(-1, ["foo", "bar"]);

            // Assert
            expect(action).to.throw(/Unknown case style requested(.*)/);
        });
    });
});
