import { expect } from "chai";
import "mocha";

import { ConversionContext } from "../../../lib/Conversions/ConversionContext";
import { TypeScript } from "../../../lib/Languages/TypeScript";

describe("ConversionContext", () => {
    describe("getLanguage", () => {
        it("returns the language", () => {
            const language = new TypeScript();
            const context = new ConversionContext(language);

            // Act
            const retrievedLanguage = context.getLanguage();

            // Assert
            expect(retrievedLanguage).to.be.equal(language);
        });
    });
});
