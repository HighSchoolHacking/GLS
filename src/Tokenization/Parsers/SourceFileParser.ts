import { BudgieFile } from "../BudgieFile";
import { IBudgieNode } from "../Nodes/IBudgieNode";
import { SourceLineParser } from "./SourceLineParser";

/**
 * Parses lines of raw source syntax into Budgie files.
 */
export class SourceFileParser {
    /**
     * Parses individual lines of raw syntax into Budgie nodes.
     */
    private readonly sourceLineParser: SourceLineParser;

    /**
     * Initializes a new instance of the SourceTreeParser class.
     */
    public constructor() {
        this.sourceLineParser = new SourceLineParser();
    }

    /**
     * Parses lines of raw source syntax into Budgie nodes.
     *
     * @param rawLines   Lines of raw source syntax.
     * @returns Parsed file of Budgie nodes.
     */
    public parseLines(rawLines: string[]): BudgieFile {
        const nodes: IBudgieNode[] = [];

        for (const rawLine of rawLines) {
            nodes.push(this.sourceLineParser.parseLine(rawLine));
        }

        return new BudgieFile(nodes);
    }
}
