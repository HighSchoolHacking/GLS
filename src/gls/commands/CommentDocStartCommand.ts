import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";

/**
 * A command for starting a documentation block.
 */
export class CommentDocStartCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.language.properties.comments.docStart, false);
    }
}
