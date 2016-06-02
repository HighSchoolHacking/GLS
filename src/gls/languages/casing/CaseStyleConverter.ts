
/**
 * Allowed casing preferences.
 */
export abstract class CaseStyleConverter {
    /**
     * Converts a name to the equivalent case style.
     * 
     * @param name   A name to convert.
     * @returns The name's equivalent in this converter's case style.
     */
    public convert(name: string): string {
        let position: number = 0;
        let nameConverted: string = "";

        name = name.replace(/\//g, "");

        while (position < name.length) {
            let nextWordStart = this.findNextWordStart(name, position);
            let nextWord = name.substring(position, nextWordStart);
            nextWord = nextWord.replace(/_/g, "").toLowerCase();
            nextWord = this.applyTransformationToWord(nextWord);

            nameConverted += nextWord;
            position = nextWordStart;
        }

        return nameConverted;
    }

    /**
     * Applies this style's transformation to a word (by default, none).
     * 
     * @param name   A word to convert.
     * @returns The word after this style's transformation.
     */
    protected applyTransformationToWord(word: string): string {
        return word;
    }

    /**
     * Finds the starting index of the next word in a name.
     * 
     * @param name   A name.
     * @param previousWordEnd   The ending position of the name's previous word.
     * @returns The starting index of the next word in name.
     */
    private findNextWordStart(name: string, previousWordEnd: number): number {
        let position = previousWordEnd + 1;

        while (position < name.length) {
            if (!this.isLowerCase(name[position])) {
                break;
            }

            if (name[position - 1] === "_" && name !== "_") {
                break;
            }

            position += 1;
        }

        return position;
    }

    /**
     * Determines if a character is lower case.
     * 
     * @param character   A character to check casing of.
     * @returns Whether character is lower case.
     */
    private isLowerCase(character: string): boolean {
        return character.toLowerCase() === character;
    }
}
