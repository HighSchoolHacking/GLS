import { expect } from "chai";
import "mocha";

import { CommandsBag } from "../../lib/Commands/CommandsBag";
import { CaseStyleConverterBag } from "../../lib/Conversions/Casing/CaseStyleConverterBag";
import { ConversionContext } from "../../lib/Conversions/ConversionContext";
import { GlsParser } from "../../lib/Conversions/GlsParser";
import { TypeScript } from "../../lib/Languages/TypeScript";

describe("GlsParser", () => {
    describe("parseCommand", () => {
        const stubParser = () => {
            return new GlsParser(new CaseStyleConverterBag(), new CommandsBag(new ConversionContext(new TypeScript())));
        };

        it("parses a command", () => {
            // Arrange
            const parser = stubParser();
            const line = `literal : abc def ghi`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect({ ...parsed }).to.be.deep.equal({
                addSemicolon: false,
                addedImports: [],
                commandResults: [
                    {
                        indentation: 0,
                        text: "abc def ghi"
                    }
                ]
            });
        });

        it("parses a recursive command", () => {
            // Arrange
            const parser = stubParser();
            const line = `literal : { literal : abc def ghi } jkl`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect({ ...parsed }).to.be.deep.equal({
                addSemicolon: false,
                addedImports: [],
                commandResults: [
                    {
                        indentation: 0,
                        text: "abc def ghi jkl"
                    }
                ]
            });
        });

        it("parses a recursive command that adds a semicolon", () => {
            // Arrange
            const parser = stubParser();
            const line = `variable : abc def ghi`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect({ ...parsed }).to.be.deep.equal({
                addSemicolon: true,
                addedImports: [],
                commandResults: [
                    {
                        indentation: 0,
                        text: "let abc: def = ghi"
                    }
                ]
            });
        });
    });
});
