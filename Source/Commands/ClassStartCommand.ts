/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/MultipleParameters.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
/// <reference path="Parameters/SingleParameter.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the start of a class declaration.
     */
    export class ClassStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("name", "The type of the class.", true),
            new Parameters.MultipleParameters(
                "Classes this extends.",
                false,
                [
                    new Parameters.SingleParameter("extends", "\"extends\"", true),
                    new Parameters.RepeatingParameters(
                        "Names of classes this extends.",
                        [
                            new Parameters.SingleParameter("className", "A class this extends.", true)
                        ])
                ]),
            new Parameters.MultipleParameters(
                "Interfaces this implements.",
                false,
                [
                    new Parameters.SingleParameter("implements", "\"implements\"", true),
                    new Parameters.RepeatingParameters(
                        "Names of interfaces this implements.",
                        [
                            new Parameters.SingleParameter("interfaceName", "An interface this implements.", true)
                        ])
                ])
        ];

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        public render(parameters: string[]): LineResults {
            this.requireParametersLengthMinimum(parameters, 1);

            throw new Error("Not implemented.");
        }
    }
}
