/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a constructor.
     */
    export class ConstructorStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("className", "The name of the class.", true),
            new Parameters.RepeatingParameters(
                "Function parameters.",
                [
                    new Parameters.SingleParameter("parameterName", "A named parameter for the constructor.", true),
                    new Parameters.SingleParameter("parameterType", "The type of the parameter.", true)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ConstructorStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): LineResults {
            let declaration: string = "",
                output: CommandResult[];

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

                for (let i: number = 4; i < parameters.length; i += 2) {
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

            let parameterName: string = parameters[i];
            let parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

            return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
        }
    }
}
