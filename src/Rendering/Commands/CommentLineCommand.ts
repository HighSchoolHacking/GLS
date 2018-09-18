import { Language } from "../Languages/Language";
import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A single-line comment.
 */
export class CommentLineCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.CommentLine)
        .withDescription("A single-line comment")
        .withParameters([
            new RepeatingParameters("Contents of the comment line", [new SingleParameter("word", "A word in the line.", false)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return CommentLineCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const language: Language = this.language;
        let result = "";

        result += language.syntax.comments.lineLeft;
        result += parameters.slice(1).join(" ");
        result += language.syntax.comments.lineRight;

        return LineResults.newSingleLine(result, false);
    }
}
