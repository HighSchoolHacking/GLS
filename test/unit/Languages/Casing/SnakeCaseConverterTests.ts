import { expect } from "chai";
import "mocha";

import { SnakeCaseConverter } from "../../../../lib/Languages/Casing/SnakeCaseConverter";

describe("SnakeCaseConverter", () => {
    describe("convert", () => {
        it("converts a camelCase name", () => {
            // Arrange
            const converter = new SnakeCaseConverter();
            const original = "abcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal("abc_def_ghi");
        });

        it("converts a PascalCase name", () => {
            // Arrange
            const converter = new SnakeCaseConverter();
            const original = "AbcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal("abc_def_ghi");
        });

        it("converts a snake_case name", () => {
            // Arrange
            const converter = new SnakeCaseConverter();
            const original = "abc_def_ghi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal(original);
        });
    });
});
