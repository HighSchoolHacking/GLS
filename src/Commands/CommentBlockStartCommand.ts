import { Command } from "./Command";
import { LineResults } from "./LineResults";

/**
 * A command for starting a comment block.
 */
export class CommentBlockStartCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.language.properties.comments.blockStart, false);
    }
}
