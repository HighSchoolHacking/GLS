import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";

/**
 * A command for printing the "break" keyword.
 */
export class BreakCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: ().
     */
    public render(parameters: string[]): LineResults {
        let output: string = this.language.properties.loops.break;

        return LineResults.newSingleLine(output, true);
    }
}
