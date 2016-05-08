/// <reference path="CommandResult.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A cluster of code converted from a line of GLS syntax.
     */
    export class LineResults {
        /**
         * Text contents of the result.
         */
        public commandResults: CommandResult[];

        /**
         * Whether this should have a semicolon appended.
         */
        public addSemicolon: boolean;

        /**
         * Any imports that must be in a file to use this.
         */
        public addedImports: { [i: string]: string[] };

        /**
         * Initializes a new instance of the LineResults class.
         * 
         * @param commandResults   Lines of code converted fromthe GLS syntax.
         * @param addsSemicolon   Whether this should end with a semicolon.
         */
        constructor(commandResults: CommandResult[], addSemicolon: boolean) {
            this.commandResults = commandResults;
            this.addSemicolon = addSemicolon;
            this.addedImports = {};
        }

        /**
         * 
         */
        public addImports(imports: { [i: string]: string[] }): void {
            if (this.addedImports === undefined) {
                this.addedImports = imports;
                return;
            }

            for (let packageName in imports) {
                this.addedImports[packageName] = imports[packageName];
            }
        }

        /**
         * Creates a new result containing a single line with a semicolon.
         * 
         * @param text   The contents of the line.
         * @param addSemicolon   Whether the line should end with a semicolon.
         * @returns A new single line result.
         */
        public static newSingleLine(text: string, addSemicolon: boolean): LineResults {
            return new LineResults([new CommandResult(text, 0)], addSemicolon);
        }

        /**
         * Creates a new result containing the start or end of a block.
         * 
         * @param text   The contents of the line.
         * @param indentation   How much the line changes indentation.
         * @returns A new block-changing line result.
         */
        public static newBlockLine(text: string, indentation: number): LineResults {
            return new LineResults([new CommandResult(text, indentation)], false);
        }
    }
}
