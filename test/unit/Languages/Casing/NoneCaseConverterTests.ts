import { expect } from "chai";
import "mocha";

import { NoneConverter } from "../../../../lib/Languages/Casing/NoneConverter";

describe("NoneConverter", () => {
    describe("convert", () => {
        it("converts a camelCase name", () => {
            // Arrange
            const converter = new NoneConverter();
            const original = "abcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal(original);
        });

        it("converts a PascalCase name", () => {
            // Arrange
            const converter = new NoneConverter();
            const original = "AbcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal(original);
        });

        it("converts a snake_case name", () => {
            // Arrange
            const converter = new NoneConverter();
            const original = "abc_def_ghi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).to.be.equal(original);
        });
    });
});
