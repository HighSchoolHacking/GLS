import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for the end of a new dictionary.
 */
export class DictionaryNewEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: ().
     */
    public render(parameters: string[]): LineResults {
        let ender: string = this.language.properties.dictionaries.initializeEnd;

        return new LineResults([new CommandResult(ender, -1)], true);
    }
}
