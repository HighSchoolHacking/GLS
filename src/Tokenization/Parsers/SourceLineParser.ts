import { BlankNode } from "../Nodes/BlankNode";
import { CommandNode } from "../Nodes/CommandNode";
import { IGlsNode } from "../Nodes/IGlsNode";
import { StringNode } from "../StringNode";
import { ParseStackContext } from "./ParseStackContext";

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
        if (rawLine.trim() === "") {
            return new BlankNode();
        }

        const colonIndex: number = rawLine.indexOf(":");
        if (colonIndex === -1) {
            return new CommandNode(rawLine.trim(), []);
        }

        const command: string = rawLine.substring(0, colonIndex).trim();
        const args: IGlsNode[] = this.parseCommandArgs(rawLine.substring(colonIndex + 1).trim());

        return new CommandNode(command, args);
    }

    private parseCommandArgs(rawArgs: string): IGlsNode[] {
        const nodes: IGlsNode[] = [];
        const context: ParseStackContext[] = [];
        let currentIndex = 0;
        let startingIndexOfStringNode = 0; // tslint:disable-line
        let readingControlCharacters = true;

        // This just in: .addChild

        // tslint:disable one-line
        // Todo within this: each one should ensure it's within the proper stack type
        // Todo: consider moving to a transient state-mutating class
        while (currentIndex < rawArgs.length) {
            const currentCharacter = rawArgs[currentIndex];

            // Starting a ( for the first time: add it to the context stack
            if (currentCharacter === "(") {
                if (context.length === 0 || context[context.length - 1].getStartingCharacter() !== "(") {
                    context.push(new ParseStackContext(currentCharacter));
                    readingControlCharacters = true;
                }

                currentIndex += 1;
                continue;
            }

            // Starting a {: add it to the stack
            if (currentCharacter === "{") {
                context.push(new ParseStackContext(currentCharacter));
                currentIndex += 1;
                continue;
            }

            // : separator: add it to the child context (assumed to be {)
            if (currentCharacter === ":") {
                context[context.length - 1].addChild(new Gls)
                currentIndex += 1;
                continue;
            }
            // In theory this is part of the the preceding { context...
            // Space: if reading a raw string, add it as a string node
            else if (currentCharacter === " ") {
                if (!readingControlCharacters) {
                    readingControlCharacters = true;

                    // Deep (: keep going within the string node
                    // (we have to go back 2 because this should wrap regular string characters)
                    if (context.length >= 2 && context[context.length - 2].getStartingCharacter() !== "(") {
                        nodes.push(new StringNode(rawArgs.substring(startingIndexOfStringNode, currentIndex)));
                    }
                    else if (context.length > 1) {
                        // : separator:
                        if (context[context.length - 1].getStartingCharacter() === ":") {
                            // WAT
                        }

                    }

                    // : separator:
                }
            }
            // Regular character: add the full string to the context stack
            else {
                // Optimization: search for next space?
                if (readingControlCharacters) {
                    context.push(new ParseStackContext(currentCharacter));
                    readingControlCharacters = false;
                }
            }

            // ...wat
            currentIndex += 1;
        }

        return nodes;
    }
}
