import { expect } from "chai";
import "mocha";

import { CaseStyle } from "../../../../lib/Languages/Casing/CaseStyle";
import { CaseStyleConverterBag } from "../../../../lib/Languages/Casing/CaseStyleConverterBag";

describe("CaseStyleConverterBag", () => {
    describe("convert", () => {
        it("converts in the CamelCase case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "abc-def";

            // Act
            const converted = converter.convert(original, CaseStyle.CamelCase);

            // Assert
            expect(converted).to.be.equal("abcDef");
        });

        it("converts in the FileSystem case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "abc-def";

            // Act
            const converted = converter.convert(original, CaseStyle.FileSystem);

            // Assert
            expect(converted).to.be.equal("abc/def");
        });

        it("converts in the None case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "abc-def";

            // Act
            const converted = converter.convert(original, CaseStyle.None);

            // Assert
            expect(converted).to.be.equal(original);
        });

        it("converts in the PackageLowerCase case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "abc-def";

            // Act
            const converted = converter.convert(original, CaseStyle.PackageLowerCase);

            // Assert
            expect(converted).to.be.equal("abc.def");
        });

        it("converts in the PackageUpperCase case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "Abc.Def";

            // Act
            const converted = converter.convert(original, CaseStyle.PackageUpperCase);

            // Assert
            expect(converted).to.be.equal("Abc.Def");
        });

        it("converts in the PascalCase case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "abc-def";

            // Act
            const converted = converter.convert(original, CaseStyle.PascalCase);

            // Assert
            expect(converted).to.be.equal("SomeName");
        });

        it("converts in the SnakeCase case style", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();
            const original = "abc-def";

            // Act
            const converted = converter.convert(original, CaseStyle.SnakeCase);

            // Assert
            expect(converted).to.be.equal("abc_def");
        });

        it("throws an error for an unknown case", () => {
            // Arrange
            const converter = new CaseStyleConverterBag();

            // Act
            const action = () => converter.convert("", -1);

            // Assert
            expect(action).to.throw();
        });
    });
});
