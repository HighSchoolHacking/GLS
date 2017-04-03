import { expect } from "chai";
import "mocha";

import { CamelCaseConverter } from "../../../../lib/Languages/Casing/CamelCaseConverter";

describe("CamelCaseConverter", () => {
    describe("convert", () => {
        it("converts a camelCase name", () => {
            // Arrange
            const converter = new CamelCaseConverter();
            const original = "abcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal(original);
        });

        it("converts a PascalCase name", () => {
            // Arrange
            const converter = new CamelCaseConverter();
            const original = "AbcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal("abcDefGhi");
        });

        it("converts a snake_case name", () => {
            // Arrange
            const converter = new CamelCaseConverter();
            const original = "abc_def_ghi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal("abcDefGhi");
        });
    });
});
