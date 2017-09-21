import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for calling a function.
 */
export class FunctionCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the function.", true),
        new RepeatingParameters(
            "Function parameters.",
            [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return FunctionCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        const functionName: string = parameters[1];

        let output = "";
        output += this.context.convertStringToCase(functionName, this.language.properties.functions.case);
        output += "(";

        if (parameters.length > 2) {
            output += parameters[2];

            for (let i = 3; i < parameters.length; i += 1) {
                output += ", ";
                output += parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output, true);
    }
}
