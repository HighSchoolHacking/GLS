import { BlockEndCommand } from "./BlockEndCommand";
import { LineResults } from "./LineResults";

/**
 * A command for the end of a catch block.
 */
export class CatchEndCommand extends BlockEndCommand {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newBlockLine("\0", -1);
    }
}
