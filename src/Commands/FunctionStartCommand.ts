import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for the beginning of a function.
 */
export class FunctionStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the function.", true),
        new SingleParameter("returnType", "The return type of the function.", true),
        new RepeatingParameters(
            "Function parameters.",
            [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true)
            ]),
        new RepeatingParameters(
            "Possible exceptions.",
            [
                new SingleParameter("possibleException", "A possible exceptions thrown by this function.", true)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return FunctionStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        let returnType: string = this.context.convertCommon("type", parameters[2]);
        let declaration: string = "";
        let output: CommandResult[];

        if (this.language.properties.functions.explicitReturns && !this.language.properties.functions.returnTypeAfterName) {
            declaration += returnType;
        }

        declaration += this.language.properties.functions.defineStartLeft;
        declaration += parameters[1] + "(";

        if (parameters.length > 3) {
            declaration += this.generateParameterVariable(parameters, 3);

            for (let i: number = 5; i < parameters.length; i += 2) {
                declaration += ", ";
                declaration += this.generateParameterVariable(parameters, i);
            }
        }

        declaration += ")";

        if (this.language.properties.functions.explicitReturns && this.language.properties.functions.returnTypeAfterName) {
            declaration += this.language.properties.functions.returnTypeMarker;
            declaration += returnType;
        }

        output = [new CommandResult(declaration, 0)];
        this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);

        return new LineResults(output, false);
    }

    /**
     * Generates a string for a parameter.
     * 
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): string {
        if (!this.language.properties.variables.declarationRequired) {
            return parameters[i];
        }

        let parameterName: string = parameters[i];
        let parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

        return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
    }
}
