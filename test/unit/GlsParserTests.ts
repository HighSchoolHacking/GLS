import { expect } from "chai";
import "mocha";

import { CommandNames } from "../../lib/Commands/CommandNames";
import { CommandsBagFactory } from "../../lib/Commands/CommandsBagFactory";
import { GlsParser } from "../../lib/Conversions/GlsParser";
import { TypeScript } from "../../lib/Languages/TypeScript";

describe("GlsParser", () => {
    describe("parseCommand", () => {
        const stubParser = () =>
            new GlsParser(CommandsBagFactory.forLanguage(new TypeScript()));

        it("parses a command", () => {
            // Arrange
            const parser = stubParser();
            const line = `${CommandNames.Literal} : abc def ghi`;

            // Act
            const parsed = parser.parseCommand(line, 0);

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
            const line = `${CommandNames.Literal} : { ${CommandNames.Literal} : abc def ghi } jkl`;

            // Act
            const parsed = parser.parseCommand(line, 0);

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
            const line = `${CommandNames.Variable} : abc def ghi`;

            // Act
            const parsed = parser.parseCommand(line, 0);

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
