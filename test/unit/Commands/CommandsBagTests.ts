import { expect } from "chai";
import "mocha";

import { CommandsBagFactory } from "../../../lib/Rendering/Commands/CommandsBagFactory";
import { LiteralCommand } from "../../../lib/Rendering/Commands/LiteralCommand";
import { TypeScript } from "../../../lib/Rendering/Languages/TypeScript";
import { RenderContext } from "../../../lib/Rendering/RenderContext";

describe("CommandsBag", () => {
    describe("renderCommand", () => {
        it("retrieves a command by name", () => {
            // Arrange
            const commandsBag = CommandsBagFactory.forContext(new RenderContext(new TypeScript()));

            // Act
            const command = commandsBag.getCommand("literal");

            // Assert
            expect(command).that.be.instanceof(LiteralCommand);
        });

        it("throws an error for an unknown command", () => {
            // Arrange
            const commandsBag = CommandsBagFactory.forContext(new RenderContext(new TypeScript()));

            // Act
            const action = () => commandsBag.getCommand("definitely not a command");

            // Assert
            expect(action).to.throw();
        });
    });
});
