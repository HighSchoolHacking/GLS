/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Casing/CaseStyle.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for declaring a member variable.
     */
    export class MemberVariableDeclareCommand extends Command {
        /**
         * Information on parameters this command takes in.
         * 
         * @todo Use a value restriction on privacy (once it's implemented).
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("privacy", "The privacy of the member variable.", true),
            new Parameters.SingleParameter("name", "The name of the member variable.", true),
            new Parameters.SingleParameter("type", "The type of the variable.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return MemberVariableDeclareCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): LineResults {
            if (this.language.properties.classes.members.variables.skipMemberVariables) {
                return LineResults.newSingleLine("\0", false);
            }

            let output: string = "",
                privacy: string = parameters[1],
                casingStyle: Languages.Casing.CaseStyle;

            if (privacy === "public") {
                output += this.language.properties.classes.members.variables.public;
                casingStyle = this.language.properties.classes.members.variables.publicCase;
            } else if (privacy === "protected") {
                output += this.language.properties.classes.members.variables.protected;
                casingStyle = this.language.properties.classes.members.variables.protectedCase;
            } else if (privacy === "private") {
                output += this.language.properties.classes.members.variables.private;
                casingStyle = this.language.properties.classes.members.variables.privateCase;
            } else {
                throw new Error(`Unknown privacy: '${parameters[1]}'.`);
            }

            let name: string = this.context.convertToCase(parameters[2], casingStyle);
            output += this.context.convertParsed(["variable inline", name, parameters[3]]).commandResults[0].text;

            return LineResults.newSingleLine(output, true);
        }
    }
}
