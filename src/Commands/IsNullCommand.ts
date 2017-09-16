import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for checking whether a variable is null.
 */
export class IsNullCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("value", "A value to check against null.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return IsNullCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const left: string = this.language.properties.variables.isNullLeft;
        const middle: string = this.language.properties.variables.isNullMiddle;
        const right: string = this.language.properties.variables.nullRight;

        return LineResults.newSingleLine(left + parameters[1] + middle + right, false);
    }
}
