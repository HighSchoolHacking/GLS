import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A single line within a comment block.
 */
export class CommentBlockCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.CommentBlock)
        .withDescription("A single line within a comment block")
        .withParameters([
            new RepeatingParameters("Contents of the comment block line", [new SingleParameter("word", "A word in the line.", false)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return CommentBlockCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = "";

        output += this.language.properties.comments.blockLineLeft;
        output += parameters.slice(1).join(" ");
        output += this.language.properties.comments.blockLineRight;

        return LineResults.newSingleLine(output, false);
    }
}
