import { expect } from "chai";
import "mocha";

import { PascalCaseConverter } from "../../../../lib/Languages/Casing/PascalCaseConverter";

describe("PascalCaseConverter", () => {
    describe("convert", () => {
        it("converts a camelCase name", () => {
            // Arrange
            const converter = new PascalCaseConverter();
            const original = "abcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal("AbcDefGhi");
        });

        it("converts a PascalCase name", () => {
            // Arrange
            const converter = new PascalCaseConverter();
            const original = "AbcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal(original);
        });

        it("converts a snake_case name", () => {
            // Arrange
            const converter = new PascalCaseConverter();
            const original = "abc_def_ghi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal("AbcDefGhi");
        });
    });
});
