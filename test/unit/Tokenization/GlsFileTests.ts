import { expect } from "chai";
import "mocha";

import { GlsFile } from "../../../lib/Tokenization/GlsFile";
import { BlankNode } from "../../../lib/Tokenization/Nodes/BlankNode";
import { CommandNode } from "../../../lib/Tokenization/Nodes/CommandNode";
import { IGlsNode } from "../../../lib/Tokenization/Nodes/IGlsNode";
import { TextNode } from "../../../lib/Tokenization/Nodes/TextNode";

describe("GlsFile", () => {
    describe("getNodes", () => {
        it("gives no nodes when there are none in the file", () => {
            // Arrange
            const expected: IGlsNode[] = [];
            const file = new GlsFile(expected);

            // Act
            const actual = file.getNodes();

            // Assert
            expect(actual).to.deep.equal(expected);
        });

        it("gives nodes when there are nodes in the file", () => {
            // Arrange
            const expected: IGlsNode[] = [
                new BlankNode(),
                new TextNode("abc"),
                new CommandNode("def", [new TextNode("ghi")]),
            ];
            const file = new GlsFile(expected);

            // Act
            const actual = file.getNodes();

            // Assert
            expect(actual).to.deep.equal(expected);
        });
    });
});
