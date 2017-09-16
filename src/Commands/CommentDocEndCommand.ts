import { Command } from "./Command";
import { LineResults } from "./LineResults";

/**
 * A command for ending a documentation block.
 */
export class CommentDocEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.language.properties.comments.docEnd, false);
    }
}
