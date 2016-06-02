import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for printing a comment line.
 */
export class CommentLineCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new RepeatingParameters(
            "Contents of the comment line.",
            [
                new SingleParameter("word", "A word in the line.", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return CommentLineCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let language: Language = this.language;
        let result: string = "";

        result += language.properties.comments.lineLeft;
        result += parameters.slice(1).join(" ");
        result += language.properties.comments.lineRight;

        return LineResults.newSingleLine(result, false);
    }
}
