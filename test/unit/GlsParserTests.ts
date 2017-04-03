import { expect } from "chai";
import "mocha";

import { ConversionContext } from "../../lib/Conversions/ConversionContext";
import { GlsParser } from "../../lib/Conversions/GlsParser";
import { TypeScript } from "../../lib/Languages/TypeScript";

describe("GlsParser", () => {
    describe("parseCommand", () => {
        it("parses a single command", () => {
            // Arrange
            const parser = new GlsParser(new ConversionContext(new TypeScript()));
            const command = "literal";
            const line = `literal : abc def ghi`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect({ ...parsed }).to.be.deep.equal({
                addSemicolon: false,
                addedImports: {},
                commandResults: [
                    {
                        indentation: 0,
                        text: "abc def ghi"
                    }
                ]
            });
        });

        it("parses a single recursive command", () => {
            // Arrange
            const parser = new GlsParser(new ConversionContext(new TypeScript()));
            const command = "literal";
            const line = `literal : { literal : abc def ghi } jkl`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect({ ...parsed }).to.be.deep.equal({
                addSemicolon: false,
                addedImports: {},
                commandResults: [
                    {
                        indentation: 0,
                        text: "abc def ghi jkl"
                    }
                ]
            });
        });
    });
});
