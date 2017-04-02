/**
 * Parsers test names from argv.
 */
export class ArgvParser {
    /**
     * Arguments from process.argv.
     */
    private argv: string[];

    /**
     * Initializes a new instance of the ArgvParser class.
     * 
     * @param argv   Arguments from process.argv.
     */
    constructor(argv: string[]) {
        this.argv = argv;
    }

    /**
     * @returns Test names from argv preceded by "--command".
     */
    public parseCommandNames(): Set<string> {
        const testNames = new Set();

        for (let i = 0; i < this.argv.length - 1; i += 1) {
            if (this.argv[i] === "--command") {
                testNames.add(this.argv[i + 1].toLowerCase());
            }
        }

        return testNames;
    }
}
