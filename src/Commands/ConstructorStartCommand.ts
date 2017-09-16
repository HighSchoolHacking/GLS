import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for the beginning of a constructor.
 */
export class ConstructorStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("className", "The name of the class.", true),
        new RepeatingParameters(
            "Function parameters.",
            [
                new SingleParameter("parameterName", "A named parameter for the constructor.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ConstructorStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let declaration = "";
        let output: CommandResult[];

        if (this.language.properties.classes.constructorUsesKeyword) {
            declaration += this.language.properties.classes.constructorKeyword;
        } else {
            declaration += parameters[1];
        }

        declaration += "(";

        if (this.language.properties.classes.constructorTakesThis) {
            declaration += this.language.properties.classes.this;

            if (parameters.length > 3) {
                declaration += ", ";
            }
        }

        if (parameters.length > 3) {
            declaration += this.generateParameterVariable(parameters, 2);

            for (let i = 4; i < parameters.length; i += 2) {
                declaration += ", ";
                declaration += this.generateParameterVariable(parameters, i);
            }
        }

        declaration += ")";

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

        const parameterName: string = parameters[i];
        const parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

        return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
    }
}
