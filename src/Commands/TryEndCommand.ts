import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for the end of a try block.
 */
export class TryEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let ender: string = this.language.properties.exceptions.blockEnd;

        return new LineResults([new CommandResult(ender, -1)], false);
    }
}
