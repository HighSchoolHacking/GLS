import { expect } from "chai";
import "mocha";

import { TypeScript } from "../../../lib/Rendering/Languages/TypeScript";
import { RenderContext } from "../../../lib/Rendering/RenderContext";

describe("RenderContext", () => {
    describe("getLanguage", () => {
        it("returns the language", () => {
            const language = new TypeScript();
            const context = new RenderContext(language);

            // Act
            const retrievedLanguage = context.getLanguage();

            // Assert
            expect(retrievedLanguage).to.be.equal(language);
        });
    });
});
