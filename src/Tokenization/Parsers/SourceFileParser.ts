import { GlsFile } from "../GlsFile";
import { IGlsNode } from "../Nodes/IGlsNode";
import { SourceLineParser } from "./SourceLineParser";

/**
 * Parses lines of raw source syntax into GLS files.
 */
export class SourceFileParser {
    /**
     * Parses individual lines of raw syntax into GLS nodes.
     */
    private readonly sourceLineParser: SourceLineParser;

    /**
     * Initializes a new instance of the SourceTreeParser class.
     */
    public constructor() {
        this.sourceLineParser = new SourceLineParser();
    }

    /**
     * Parses lines of raw source syntax into GLS nodes.
     *
     * @param rawLines   Lines of raw source syntax.
     * @returns Parsed file of GLS nodes.
     */
    public parseLines(rawLines: string[]): GlsFile {
        const nodes: IGlsNode[] = [];

        for (const rawLine of rawLines) {
            nodes.push(this.sourceLineParser.parseLine(rawLine));
        }

        return new GlsFile(nodes);
    }

}
