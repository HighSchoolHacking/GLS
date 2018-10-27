import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a comment block.
 */
export class CommentBlockEndCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.CommentBlockEnd).withDescription("Ends a comment block");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return CommentBlockEndCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.language.syntax.comments.blockEnd);
    }
}
