/**
 * Parsers test names from argv.
 */
export class ArgvParser {
    /**
     * Arguments from process.argv.
     */
    private readonly argv: string[];

    /**
     * Initializes a new instance of the ArgvParser class.
     * 
     * @param argv   Arguments from process.argv.
     */
    public constructor(argv: string[]) {
        for (const arg of argv) {
            if (arg.indexOf("--argv=") === 0) {
                this.argv = JSON.parse(arg.slice("--argv=".length));
                return;
            }
        }

        this.argv = [];
    }

    /**
     * @returns Test names from argv preceded by "--command", if any.
     */
    public parseCommandNames(): Set<string> | undefined {
        const testNames = new Set<string>();
        let hadTest = false;

        for (let i = 0; i < this.argv.length - 1; i += 1) {
            if (this.argv[i] === "--command") {
                testNames.add(this.argv[i + 1].toLowerCase());
                hadTest = true;
            }
        }

        if (!hadTest) {
            testNames.add("*");
        }

        return testNames;
    }
}
