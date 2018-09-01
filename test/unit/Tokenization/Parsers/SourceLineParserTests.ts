import { expect } from "chai";
import "mocha";

import { BlankNode } from "../../../../lib/Tokenization/Nodes/BlankNode";
import { CommandNode } from "../../../../lib/Tokenization/Nodes/CommandNode";
import { IGlsNode } from "../../../../lib/Tokenization/Nodes/IGlsNode";
import { TextNode } from "../../../../lib/Tokenization/Nodes/TextNode";
import { SourceLineParser } from "../../../../lib/Tokenization/Parsers/SourceLineParser";

class TestCase {
    public descriptor: string;
    public rawLine: string;
    public expected: IGlsNode;

    public constructor(descriptor: string, rawLine: string, expected: IGlsNode) {
        this.descriptor = descriptor;
        this.rawLine = rawLine;
        this.expected = expected;
    }
}

describe("SourceLineParser", () => {
    describe("parseLine", () => {
        const cases: TestCase[] = [
            new TestCase("blank line", "", new BlankNode()),
            new TestCase("standalone command name", "abc", new CommandNode("abc", [])),
            new TestCase("command name with a space", "abc def", new CommandNode("abc def", [])),
            new TestCase("command name and an arg", "abc : def", new CommandNode("abc", [new TextNode("def")])),
            new TestCase("command name and two args", "abc : def ghi", new CommandNode("abc", [new TextNode("def"), new TextNode("ghi")])),
            new TestCase("command name and blank string arg", 'abc : ""', new CommandNode("abc", [new TextNode('""')])),
            new TestCase("command name and quote-wrapped arg parenthesis", 'abc : ")"', new CommandNode("abc", [new TextNode('")"')])),
            new TestCase(
                "command name and quote-wrapped second arg parenthesis",
                'abc : (def) ")"',
                new CommandNode("abc", [new TextNode("def"), new TextNode('")"')]),
            ),
            new TestCase("nested standalone CommandNode arg", "abc : { def }", new CommandNode("abc", [new CommandNode("def", [])])),
            new TestCase(
                "nested CommandNode arg with an arg",
                "abc : { def : ghi }",
                new CommandNode("abc", [new CommandNode("def", [new TextNode("ghi")])]),
            ),
            new TestCase(
                "nested CommandNode arg with a space in the command name an arg",
                "abc def : { ghi : jkl }",
                new CommandNode("abc def", [new CommandNode("ghi", [new TextNode("jkl")])]),
            ),
            new TestCase(
                "nested CommandNode arg with two args",
                "abc : { def : ghi jkl }",
                new CommandNode("abc", [new CommandNode("def", [new TextNode("ghi"), new TextNode("jkl")])]),
            ),
            new TestCase(
                "two nested CommandNode args with nested args",
                "abc : { def : ghi jkl } { mno : pqr stu } vwx",
                new CommandNode("abc", [
                    new CommandNode("def", [new TextNode("ghi"), new TextNode("jkl")]),
                    new CommandNode("mno", [new TextNode("pqr"), new TextNode("stu")]),
                    new TextNode("vwx"),
                ]),
            ),
            new TestCase(
                "command with text in parenthesis as an arg",
                "abc : (def ghi)",
                new CommandNode("abc", [new TextNode("def ghi")]),
            ),
            new TestCase(
                "command with text in parenthesis as two args",
                "abc : (def ghi) (jkl mno)",
                new CommandNode("abc", [new TextNode("def ghi"), new TextNode("jkl mno")]),
            ),
            new TestCase(
                "command with sub-parenthesis as an escaped arg",
                "abc : (def ghi (jkl mno\\) pqr)",
                new CommandNode("abc", [new TextNode("def ghi (jkl mno) pqr")]),
            ),
            new TestCase(
                "command with escaped text in parenthesis",
                'abc : (def \\) \\"\\:\\{\\}\\)\\(\\) ghi)',
                new CommandNode("abc", [new TextNode('def ) \\"\\:\\{\\})\\() ghi')]),
            ),
        ];

        for (const { descriptor, rawLine, expected } of cases) {
            it(descriptor, () => {
                // Arrange
                const parser = new SourceLineParser();

                // Act
                const actual = parser.parseLine(rawLine);

                // Assert
                expect(actual).to.deep.equal(expected);
            });
        }
    });
});
