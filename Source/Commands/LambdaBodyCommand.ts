/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a lambda function body.
     */
    export class LambdaBodyCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            /*
            new Parameters.SingleParameter("returnType", "The return type of the function.", true),
            */
            new Parameters.SingleParameter(
                "returnType",
                "Return type of the lambda function",
                true),
            new Parameters.RepeatingParameters(
                "Lambda function parameters.",
                [
                    new Parameters.SingleParameter(
                        "parameterName",
                        "A named parameter for the lambda function.",
                        true),
                    new Parameters.SingleParameter(
                        "parameterType",
                        "The type of the parameter.",
                        true)
                ]),
            new Parameters.SingleParameter(
                "functionBody",
                "The actual body of the lambda function",
                true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return LambdaBodyCommand.parameters;
        }

        /**
         * Renders the lambda for a language with the given parameters.
         *     GLS syntax (order of parameters) lambda returnType [parameterName, parameterType, ...] command
         *     Render format: lambdaLeft parameterType parameterName, ... lambdaMiddle commandString lambdaRight
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([parameterName, parameterType, ...]).
         */
        public render(parameters: string[]): LineResults {
            let returnType: string = this.context.convertCommon("type", parameters[2]),
                lambdaBody: string = "",
                output: CommandResult[];

            lambdaBody += this.language.properties.lambdas.functionLeft;

            if (this.language.properties.lambdas.returnTypeRequired) {
                // No language requires this yet, so format is unknown.
                throw Error("returnTypeRequired=true not implemented");
            }

            // If we have at least 1 set of parameters, need to handle them.
            if (parameters.length > 3) {
                lambdaBody += this.generateParameterVariable(parameters, 2);

                // Condition (i + 1) < parameters.length to ensure we don't accidentally
                // render the command as a variable.
                for (let i: number = 4; (i + 1) < parameters.length; i += 2) {
                    lambdaBody += ", ";
                    lambdaBody += this.generateParameterVariable(parameters, i);
                }
            }

            lambdaBody += this.language.properties.lambdas.functionMiddle;

            // Lambda function body is passed to us as 1 string, so just append.
            lambdaBody += parameters[parameters.length - 1];

            lambdaBody += this.language.properties.lambdas.functionRight;

            output = [new CommandResult(lambdaBody, 0)];
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

            let parameterName: string = parameters[i];
            let parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

            return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
        }
    }
}
