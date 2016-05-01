/// <reference path="CaseStyle.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Allowed casing preferences.
     */
    export abstract class CaseStyleConverter {
        /**
         * Converts a name into the equivalent case style.
         * 
         * @param name   A name to convert.
         * @returns The name's equivalent in this converter's case style.
         */
        public convert(name: string): string {
            let position: number = 0;

            while (position < name.length) {
                let nextWordStart = this.moveToNextWord(name, position);
                name = this.applyTransformationToWord(name, position, nextWordStart);
                position = nextWordStart;
            }

            return name.replace(/_/g, "");
        }

        /**
         * 
         */
        protected applyTransformationToWord(name: string, start: number, nextWordStart: number): string {
            return name;
        }

        /**
         * 
         */
        private moveToNextWord(name: string, start: number): number {
            start += 1;

            while (start < name.length) {
                if (!this.isLowerCase(name[start])) {
                    break;
                }

                start += 1;
            }

            return start;
        }

        /**
         * 
         */
        private isLowerCase(character: string): boolean {
            return character.toLowerCase() === character;
        }
    }
}
