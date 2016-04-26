/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a function.
     */
    export class FunctionStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("name", "The name of the function.", true),
            new Parameters.SingleParameter("returnType", "The return type of the function.", true),
            new Parameters.RepeatingParameters(
                "Function parameters.",
                [
                    new Parameters.SingleParameter("parameterName", "A named parameter for the function.", true),
                    new Parameters.SingleParameter("parameterType", "The type of the parameter.", true)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return FunctionStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, returnType[, parameterName, parameterType, ...]).
         */
        public render(parameters: string[]): LineResults {
            let returnType: string = this.context.convertCommon("type", parameters[2]),
                declaration: string = "",
                output: CommandResult[];

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
}
