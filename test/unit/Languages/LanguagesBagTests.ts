import { expect } from "chai";
import "mocha";

import { LanguagesBag } from "../../../lib/Languages/LanguagesBag";

describe("LanguagesBag", () => {
    describe("getLanguageByExtension", () => {
        it("returns a language by extension", () => {
            // Arrange
            const bag = new LanguagesBag();

            // Act
            const language = bag.getLanguageByExtension(".ts");

            // Assert
            expect(language.properties.general.extension).to.be.equal(".ts");
        });
    });

    describe("getLanguageByName", () => {
        it("returns a language by name", () => {
            // Arrange
            const bag = new LanguagesBag();

            // Act
            const language = bag.getLanguageByName("TypeScript");

            // Assert
            expect(language.properties.general.name).to.be.equal("TypeScript");
        });
    });
});
