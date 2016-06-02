import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for printing a comment block line.
 */
export class CommentBlockCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new RepeatingParameters(
            "Contents of the comment block line",
            [
                new SingleParameter("word", "A word in the line.", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return CommentBlockCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: string = "";

        output += this.language.properties.comments.blockLineLeft;
        output += parameters.slice(1).join(" ");
        output += this.language.properties.comments.blockLineRight;

        return LineResults.newSingleLine(output, false);
    }
}
