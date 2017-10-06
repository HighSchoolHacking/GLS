import { expect } from "chai";
import "mocha";

import { MathOperation } from "../../../../lib/Commands/MathResolution/MathOperations";
import { MathResolver } from "../../../../lib/Commands/MathResolution/MathResolver";

describe("MathResolver", () => {
    describe("resolve", () => {
        it("resolves two added numbers to one", () => {
            // Arrange
            const resolver = new MathResolver();

            // Act
            const resolved = resolver.resolve("1", MathOperation.Addition, "2");

            // Assert
            expect(resolved).to.be.equal("3");
        });

        it("resolves a number and a variable added together", () => {
            // Arrange
            const resolver = new MathResolver();

            // Act
            const resolved = resolver.resolve("1", MathOperation.Addition, "end");

            // Assert
            expect(resolved).to.be.equal("1 + end");
        });

        it("resolves two subtracted numbers to one", () => {
            // Arrange
            const resolver = new MathResolver();

            // Act
            const resolved = resolver.resolve("3", MathOperation.Subtraction, "2");

            // Assert
            expect(resolved).to.be.equal("1");
        });

        it("resolves a number and a variable added together", () => {
            // Arrange
            const resolver = new MathResolver();

            // Act
            const resolved = resolver.resolve("3", MathOperation.Subtraction, "end");

            // Assert
            expect(resolved).to.be.equal("3 - end");
        });
    });
});
