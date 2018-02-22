import { LineResults } from "../Rendering/LineResults";

/**
 * Generates language output by merging line results.
 */
export class OutputMerger {
    /**
     * Characters to output for semicolon-ended lines.
     */
    private semicolon: string;

    /**
     * Initializes a new instance of the OutputMerger class.
     *
     * @param semicolon   Characters to output for semicolon-ended lines.
     */
    public constructor(semicolon: string) {
        this.semicolon = semicolon;
    }

    /**
     * Generates language output by merging a file's line results.
     *
     * @param fileLineResults   GLS line results from a file.
     * @return Language output from the line results.
     */
    public mergeFileLineResults(fileLineResults: LineResults[]): string[] {
        const output: string[] = [];
        let indentation = 0;

        for (const lineResults of fileLineResults) {
            for (const result of lineResults.commandResults) {
                if (result.indentation < 0) {
                    indentation += result.indentation;
                }

                if (result.text === "") {
                    output.push("");
                } else if (result.text !== "\0") {
                    output.push(this.generateTabs(indentation) + result.text);
                }

                if (result.indentation > 0) {
                    indentation += result.indentation;
                }
            }

            if (lineResults.addSemicolon) {
                output[output.length - 1] += this.semicolon;
            }
        }

        return output;
    }

    /**
     * Generates spaces equivalent to 4-space code tabbing.
     *
     * @param amount   How many tabs should be added.
     * @returns An all-spaces String of length = amount * 4.
     */
    private generateTabs(amount: number): string {
        let output = "";

        for (let i = 0; i < amount; i += 1) {
            output += "    ";
        }

        return output;
    }
}
