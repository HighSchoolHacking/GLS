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
        new SingleParameter("name", "A name for the rest parameter array.", true),
        new SingleParameter("type", "A type for the rest parameter array.", true)
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
        let left: string = this.language.properties.parameters.restParamLeft;
        let right: string = this.language.properties.parameters.restParamRight;

        if (this.language.properties.parameters.restDeclarationLeft) {
            return LineResults.newSingleLine(parameters[2] + left + parameters[1] + right, false);
        }
        if (this.language.properties.parameters.restDeclarationMiddle) {
            return LineResults.newSingleLine(left + parameters[2] + "[] " + parameters[1] + right, false);
        }
        if (this.language.properties.parameters.restDeclarationRight) {
            return LineResults.newSingleLine(left + parameters[1] + right + parameters[2] + "[]", false);
        }
        return LineResults.newSingleLine(left + parameters[1] + right, false);
    }
}
