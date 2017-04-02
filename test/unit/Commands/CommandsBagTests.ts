import { expect } from "chai";
import "mocha";

import { CommandsBag } from "../../../lib/Commands/CommandsBag";
import { LiteralCommand } from "../../../lib/Commands/LiteralCommand";
import { ConversionContext } from "../../../lib/Conversions/ConversionContext";
import { TypeScript } from "../../../lib/Languages/TypeScript";

describe("CommandsBag", () => {
    describe("renderCommand", () => {
        it("retrieves a command by name", () => {
            // Arrange
            const commandsBag = new CommandsBag(new ConversionContext(new TypeScript()));

            // Act
            const command = commandsBag.getCommand("literal");

            // Assert
            expect(command).that.be.instanceof(LiteralCommand);
        });

        it("throws an error for an unknown command", () => {
            // Arrange
            const commandsBag = new CommandsBag(new ConversionContext(new TypeScript()));

            // Act
            const action = () => commandsBag.getCommand("definitely not a command");

            // Assert
            expect(action).to.throw();
        });
    });
});
