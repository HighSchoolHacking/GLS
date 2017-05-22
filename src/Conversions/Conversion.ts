import { CommandResult } from "../Commands/CommandResult";
import { LineResults } from "../Commands/LineResults";
import { ConversionContext } from "./ConversionContext";

/**
 * A single conversion run from raw GLS syntax to a language.
 */
export class Conversion {
    /**
     * The driving context for this conversion.Z
     */
    private context: ConversionContext;

    /**
     * Raw lines of GLS syntax being converted.
     */
    private glsLines: string[];

    /**
     * Accumulated clusters of code converted fromthe raw GLS syntax.
     */
    private allLineResults: LineResults[];

    /**
     * Accumulated imports retrieved from functions.
     */
    private imports: { [i: string]: string[] };

    /**
     * Initializes a new instance of the Conversion class.
     */
    constructor(glsLines: string[], context: ConversionContext) {
        this.context = context;
        this.glsLines = glsLines;
    }

    /**
     * Converts the stored lines of GLS syntax to language code.
     * 
     * @returns Converted lines of language code.
     */
    public convert(): string[] {
        this.allLineResults = [];
        this.imports = {};

        this.generateAllLineResults();
        this.convertImportsToLineResults();

        let output: string[] = [];
        let indentation: number = 0;

        for (let i: number = 0; i < this.allLineResults.length; i += 1) {
            let lineResults: LineResults = this.allLineResults[i];
            let commandResults: CommandResult[] = lineResults.commandResults;

            for (let j: number = 0; j < commandResults.length; j += 1) {
                let result: CommandResult = commandResults[j];

                if (result.indentation < 0) {
                    indentation += result.indentation;
                }

                if (result.text !== "\0") {
                    output.push(this.generateTabs(indentation) + result.text);
                }

                if (result.indentation > 0) {
                    indentation += result.indentation;
                }
            }

            if (lineResults.addSemicolon) {
                output[output.length - 1] += this.context.getLanguage().properties.style.semicolon;
            }
        }

        return output;
    }

    /**
     * Generates line results from raw GLS syntax.
     */
    private generateAllLineResults(): void {
        for (let i: number = 0; i < this.glsLines.length; i += 1) {
            if (this.glsLines[i].trim() === "") {
                this.allLineResults.push(LineResults.newSingleLine("", false));
                continue;
            }

            let lineResults: LineResults = this.context.getParser().parseCommand(this.glsLines[i]);
            this.allLineResults.push(lineResults);

            if (lineResults.addedImports !== undefined) {
                this.addImports(lineResults.addedImports);
            }
        }
    }

    /**
     * Adds new imports to the stored imports.
     * 
     * @param addedImports   New imports to store.
     */
    private addImports(addedImports: { [i: string]: string[] } ): void {
        for (let packageName in addedImports) {
            this.addImportItems(packageName, addedImports[packageName]);
        }
    }

    /**
     * Adds items to a package's stored imports.
     * 
     * @param packageName   The name of a package.
     * @param items   Items to import from the package.
     */
    private addImportItems(packageName: string, items: string[]): void {
        if (!this.imports.hasOwnProperty(packageName)) {
            this.imports[packageName] = items;
            return;
        }

        for (let i: number = 0; i < items.length; i += 1) {
            if (this.imports[packageName].indexOf(items[i]) !== -1) {
                this.imports[packageName].push(items[i]);
            }
        }
    }

    /**
     * Transfers captured import statements from commands to line results.
     */
    private convertImportsToLineResults(): void {
        if (Object.keys(this.imports).length !== 0) {
            this.allLineResults.unshift(LineResults.newSingleLine("", false));
        }

        for (let packageName in this.imports) {
            this.convertImportToLineResults(packageName.split("/"), this.imports[packageName]);
        }
    }

    /**
     * Converts a captured import statement to line results.
     * 
     * @param directories   Directory path to import from.
     * @param items   Items being imported from the package.
     */
    private convertImportToLineResults(directories: string[], items: string[]): void {
        let parameters: string[] = ["import", ...directories, "use", ...items];
        this.allLineResults.unshift(this.context.convertParsed(parameters));
    }

    /**
     * Generates spaces equivalent to 4-space code tabbing.
     * 
     * @param amount   How many tabs should be added.
     * @returns An all-spaces String of length = amount * 4.
     */
    private generateTabs(amount: number): string {
        let output: string = "";

        for (let i: number = 0; i < amount; i += 1) {
            output += "    ";
        }

        return output;
    }
}
