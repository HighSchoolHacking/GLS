import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for printing a comment block line.
 */
export class CommentBlockCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.CommentBlock,
        [],
        [
            new RepeatingParameters(
                "Contents of the comment block line",
                [
                    new SingleParameter("word", "A word in the line.", false)
                ])
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
