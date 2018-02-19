import { BlankNode } from "../Nodes/BlankNode";
import { CommandNode } from "../Nodes/CommandNode";
import { IGlsNode } from "../Nodes/IGlsNode";
import { TextNode } from "../Nodes/TextNode";
import { StringSearching } from "./StringSearching";

/**
 * Parses individual lines of raw syntax into GLS nodes.
 */
export class SourceLineParser {
    /**
     * Parses a line of raw source syntax into a GLS nodes.
     *
     * @param rawLine   Raw line of source syntax.
     */
    public parseLine(rawLine: string): IGlsNode {
        rawLine = rawLine.trim();
        if (rawLine === "") {
            return new BlankNode();
        }

        const colonIndex: number = rawLine.indexOf(":");
        if (colonIndex === -1) {
            return new CommandNode(rawLine.trim(), []);
        }

        const command: string = rawLine.substring(0, colonIndex).trim();
        const rawArgs = rawLine.substring(colonIndex + 1).trim();
        const args: IGlsNode[] = [];

        this.parseCommandArgs(rawArgs, 0, args);

        return new CommandNode(command, args);
    }

    /**
     * @returns Next starting index after the last added node.
     */
    private parseCommandArgs(rawArgs: string, start: number, nodes: IGlsNode[]): number {
        for (let i = start; i < rawArgs.length; i += 1) {
            switch (rawArgs[i]) {
                // Sub-command start
                case "{":
                    i = this.parseSubCommand(rawArgs, i, nodes);
                    break;

                // Sub-command end
                case "}":
                    return i + 1;

                // Parenthesis start
                case "(":
                    i = this.parseParenthesis(rawArgs, i + 1, nodes);
                    break;

                // Parenthesis end
                case ")":
                    break;

                // Space start
                case " ":
                    break;

                // Regular text start
                default:
                    i = this.parseTextCommand(rawArgs, i, nodes);
            }
        }

        return rawArgs.length;
    }

    /**
     * @returns Next starting index after the last added node.
     */
    private parseSubCommand(text: string, i: number, nodes: IGlsNode[]): number {
        // Move past the starting "{" or "{ "
        i = StringSearching.getNextStartOfWordIndex(text, i + 1);

        // Command name
        const commandNameEnd = StringSearching.getNextEndOfCommandNameIndex(text, i);
        const commandName = text.substring(i, commandNameEnd).trim();

        // "}" (command end) or ":" (command args start)
        i = StringSearching.getNextNonSpaceIndex(text, commandNameEnd);

        // "}" (command end)
        if (text[i] === "}") {
            nodes.push(new CommandNode(commandName, []));
            return i + 1;
        }

        // ":" (command args start)
        const commandArgs: IGlsNode[] = [];
        i = this.parseCommandArgs(text, i + 1, commandArgs);

        nodes.push(new CommandNode(commandName, commandArgs));

        return i;
    }

    /**
     * @returns Next starting index after the last added node.
     */
    private parseParenthesis(rawArgs: string, i: number, nodes: IGlsNode[]): number {
        const nextEndOfWordIndex = StringSearching.getNextEndOfParenthesisWordIndex(rawArgs, i);
        const textRaw = rawArgs.substring(i, nextEndOfWordIndex);
        const text = StringSearching.removeBackslashesFromWord(textRaw);

        nodes.push(new TextNode(text));

        return nextEndOfWordIndex;
    }

    /**
     * @returns Next starting index after the last added node.
     */
    private parseTextCommand(rawArgs: string, i: number, nodes: IGlsNode[]): number {
        const nextEndOfWordIndex = StringSearching.getNextEndOfWordIndex(rawArgs, i);
        const text = rawArgs.substring(i, nextEndOfWordIndex);

        nodes.push(new TextNode(text));

        return nextEndOfWordIndex;
    }
}
