import { expect } from "chai";
import "mocha";

import { CommandsBag } from "../../../lib/Commands/CommandsBag";
import { ConversionContext } from "../../../lib/Conversions/ConversionContext";
import { TypeScript } from "../../../lib/Languages/TypeScript";

describe("CommandsBag", () => {
    describe("renderCommand", () => {
        it("renders a command by name", () => {
            // Arrange
            const language = new TypeScript();
            const commandsBag = new CommandsBag(new ConversionContext(language));

            // Act
            const lines = commandsBag.renderCommand(["literal"]);

            // Assert
            expect(lines).to.be.deep.equal({

            });
        });

        it("throws an error for an unknown command", () => {
            // Arrange
            const language = new TypeScript();
            const commandsBag = new CommandsBag(new ConversionContext(language));

            // Act
            const action = () => commandsBag.renderCommand(["definitely not a command"]);

            // Assert
            expect(action).to.throw();
        });
    });
});
