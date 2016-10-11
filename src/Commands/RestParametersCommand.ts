import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for creating an array that takes in unassigned arguments.
 */
export class RestParametersCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("type", "A type for the rest parameter array.", true),
        new SingleParameter("name", "A name for the rest parameter array.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return RestParametersCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let left: string = this.language.properties.parameters.RestParamLeft;
        let right: string = this.language.properties.parameters.RestParamRight;

        if (this.language.properties.parameters.RestParamDeclarationLeft) {
            return LineResults.newSingleLine(parameters[1] + left + parameters[2] + right, false);
        }
        else if (this.language.properties.parameters.RestParamDeclarationMiddle) {
            return LineResults.newSingleLine(left + parameters[1] + "[] " + parameters[2] + right, false);
        }
        else if (this.language.properties.parameters.RestParamDeclarationRight) {
            return LineResults.newSingleLine(left + parameters[2] + right + parameters[1] + "[]", false);
        }
        else {
            return LineResults.newSingleLine(left + parameters[2] + right, false);
        }
    }
}
