import { Command } from "./Command";
import { LineResults } from "./LineResults";

/**
 * A command for ending an enum declaration.
 */
export class EnumEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let ender: string = this.renderEnumEnd();

        if (ender === "\0") {
            return LineResults.newBlockLine("\0", -1);
        }

        return LineResults.newBlockLine(ender, -1);
    }

    /**
     * Renders the end block for enums.
     * 
     * @returns The end block for enums.
     */
    protected renderEnumEnd(): string {
        if (this.language.properties.enums.isObject) {
            return this.language.properties.conditionals.end + ";";
        }

        else {
            return this.language.properties.conditionals.end;
        }
    }
}
