/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A general command for the end of a conditional block.
     */
    export class BlockEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        public render(parameters: string[]): LineResults {
            let ender: string = this.language.properties.conditionals.end;

            if (ender === "\0") {
                return LineResults.newBlockLine("\0", -1);
            }

            return LineResults.newBlockLine(ender, -1);
        }

        /**
         * Renders the default end block for conditionals.
         * 
         * @returns The default end block for conditionals.
         */
        protected renderBlockEnd(): string {
            return this.language.properties.conditionals.end;
        }
    }
}
