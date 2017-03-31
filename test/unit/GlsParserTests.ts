import { expect } from "chai";
import { describe, it } from "mocha";

import { ConversionContext } from "../../lib/Conversions/ConversionContext";
import { GlsParser } from "../../lib/Conversions/GlsParser";
import { TypeScript } from "../../lib/Languages/TypeScript";

describe("GlsParser", () => {
    describe("parseCommand", () => {
        it("parses a single command", () => {
            // Arrange
            const parser = new GlsParser(new ConversionContext(new TypeScript()));
            const command = "literal";
            const parameters = "aaa bbb ccc";
            const line = `${command} : ${parameters}`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect(parsed).to.be.deep.equal({
                indentation: 0,
                lines: [line],
                text: "aaa bbb ccc"
            });
        });

        it("parses a single recursive command", () => {
            // Arrange
            const parser = new GlsParser(new ConversionContext(new TypeScript()));
            const command = "literal";
            const parameters = "aaa bbb ccc";
            const line = `( ${command} : ${parameters} )`;

            // Act
            const parsed = parser.parseCommand(line);

            // Assert
            expect(parsed).to.be.deep.equal({
                indentation: 0,
                lines: [line],
                text: "aaa bbb ccc"
            });
        });
    });
});
