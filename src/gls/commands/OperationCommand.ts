import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for printing an operation.
 */
export class OperationCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("value", "A value to work with.", true),
        new SingleParameter("operator", "The operation's operator.", true),
        new SingleParameter("value", "A value to work with.", true),
        new RepeatingParameters(
            "Additional values and operators",
            [
                new SingleParameter("item", "An additional operator.", false),
                new SingleParameter("item", "An additional value to work with.", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return OperationCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = this.context.convertCommon("value", parameters[1]);

        for (let i: number = 2; i < parameters.length; i += 2) {
            result += " " + this.context.convertCommon("operator", parameters[i]);
            result += " " + this.context.convertCommon("value", parameters[i + 1]);
        }

        return LineResults.newSingleLine(result, true);
    }
}
