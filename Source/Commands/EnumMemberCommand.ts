/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the declaring an enum member value.
     */
    export class EnumMemberCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("memberName", "A member of the container enum.", true),
            new Parameters.SingleParameter("memberValue", "A value for the enum member.", true),
            new Parameters.SingleParameter("comma", "Whether a comma is needed.", false)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return EnumMemberCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (memberName, memberValue[, ","]).
         */
        public render(parameters: string[]): LineResults {
            let result: string = "";

            result += parameters[1];
            result += this.language.properties.enums.declareValueLeft;
            result += parameters[2];
            result += this.language.properties.enums.declareValueRight;

            if (parameters.length === 4) {
                result += this.language.properties.enums.declareCommaRight;
            } else {
                result += this.language.properties.enums.declareLastRight;
            }

            return LineResults.newSingleLine(result, false);
        }
    }
}
