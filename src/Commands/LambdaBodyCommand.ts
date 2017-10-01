import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for a lambda function body.
 */
export class LambdaBodyCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.LambdaBody,
        [],
        [
            new SingleParameter(
                "returnType",
                "Return type of the lambda function",
                true),
            new RepeatingParameters(
                "Lambda function parameters.",
                [
                    new SingleParameter(
                        "parameterName",
                        "A named parameter for the lambda function.",
                        true),
                    new SingleParameter(
                        "parameterType",
                        "The type of the parameter.",
                        true)
                ]),
            new SingleParameter(
                "functionBody",
                "The actual body of the lambda function",
                true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return LambdaBodyCommand.metadata;
    }

    /**
     * Renders the lambda for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.lambdas.returnTypeRequired) {
            throw Error("returnTypeRequired=true not implemented");
        }

        let lambdaBody = "";

        lambdaBody += this.language.properties.lambdas.functionLeft;

        if (parameters.length > 3) {
            lambdaBody += this.generateParameterVariable(parameters, 2);

            for (let i = 4; (i + 1) < parameters.length; i += 2) {
                lambdaBody += ", ";
                lambdaBody += this.generateParameterVariable(parameters, i);
            }
        }

        lambdaBody += this.language.properties.lambdas.functionMiddle;
        lambdaBody += parameters[parameters.length - 1];
        lambdaBody += this.language.properties.lambdas.functionRight;

        const output = [new CommandResult(lambdaBody, 0)];
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
        if (!this.language.properties.lambdas.parameterTypeRequired) {
            return parameters[i];
        }

        const parameterName: string = parameters[i];
        const parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

        return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
    }
}
