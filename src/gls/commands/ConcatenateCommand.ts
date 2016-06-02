import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for concatenating strings.
 */
export class ConcatenateCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("string", "A string to concatenate.", true),
        new SingleParameter("string", "A string to concatenate.", true),
        new RepeatingParameters(
            "Additional strings to concatenate.",
            [
                new SingleParameter("string", "A string to concatenate.", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ConcatenateCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = parameters[1];

        for (let i: number = 2; i < parameters.length; i += 1) {
            result += this.language.properties.strings.concatenate + parameters[i];
        }

        return LineResults.newSingleLine(result, false);
    }
}
