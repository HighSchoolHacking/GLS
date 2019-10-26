import { expect } from "chai";
import "mocha";

import { BudgieFile } from "../../../lib/Tokenization/BudgieFile";
import { BlankNode } from "../../../lib/Tokenization/Nodes/BlankNode";
import { CommandNode } from "../../../lib/Tokenization/Nodes/CommandNode";
import { IBudgieNode } from "../../../lib/Tokenization/Nodes/IBudgieNode";
import { TextNode } from "../../../lib/Tokenization/Nodes/TextNode";

describe("BudgieFile", () => {
    describe("getNodes", () => {
        it("gives no nodes when there are none in the file", () => {
            // Arrange
            const expected: IBudgieNode[] = [];
            const file = new BudgieFile(expected);

            // Act
            const actual = file.getNodes();

            // Assert
            expect(actual).to.deep.equal(expected);
        });

        it("gives nodes when there are nodes in the file", () => {
            // Arrange
            const expected: IBudgieNode[] = [new BlankNode(), new TextNode("abc"), new CommandNode("def", [new TextNode("ghi")])];
            const file = new BudgieFile(expected);

            // Act
            const actual = file.getNodes();

            // Assert
            expect(actual).to.deep.equal(expected);
        });
    });
});
