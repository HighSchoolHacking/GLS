import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for the end of a foreach loop.
 */
export class ForEachEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const ender: string = this.language.properties.loops.forEachEnd;

        return new LineResults([new CommandResult(ender, -1)], false);
    }
}
