import { expect } from "chai";
import "mocha";

import { BannedKeywordsBag } from "../../../lib/Commands/BannedKeywordsBag";
import { LiteralCommand } from "../../../lib/Commands/LiteralCommand";
import { ConversionContext } from "../../../lib/Conversions/ConversionContext";
import { TypeScript } from "../../../lib/Languages/TypeScript";

describe("BannedKeywordsBag", () => {
    describe("renderBannedKeyword", () => {
        it("returns true for a banned keyword", () => {
            // Arrange
            const bannedKeywordsBag = new BannedKeywordsBag();

            // Act
            const keyword = bannedKeywordsBag.validateName("assert");

            // Assert
            expect(keyword).to.equal(true);
        });

        it("returns false for a valid keyword", () => {
            // Arrange
            const bannedKeywordsBag = new BannedKeywordsBag();

            // Act
            const keyword = bannedKeywordsBag.validateName("literal");

            // Assert
            expect(keyword).to.equal(false);
        });
    });
});
