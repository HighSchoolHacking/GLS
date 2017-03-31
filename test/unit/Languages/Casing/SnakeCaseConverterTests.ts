import { expect } from "chai";
import "mocha";

import { SnakeCaseConverter } from "../../../../src/Languages/Casing/SnakeCaseConverter";

describe("SnakeCaseConverter", () => {
    describe("convert", () => {
        it("converts a camelCase name", () => {
            // Arrange
            const converter = new SnakeCaseConverter();
            const original = "abcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).that.be.equal("aaa_bbb_ccc");
        });

        it("converts a PascalCase name", () => {
            // Arrange
            const converter = new SnakeCaseConverter();
            const original = "AbcDefGhi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).that.be.equal("aaa_bbb_ccc");
        });

        it("converts a snake_case name", () => {
            // Arrange
            const converter = new SnakeCaseConverter();
            const original = "abc_def_ghi";

            // Act
            const converted = converter.convert(original);

            // Assert
            expect(converted).that.be.equal(original);
        });
    });
});
