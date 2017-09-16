/**
 * Splits name strings into words.
 */
export class NameSplitter {
    /**
     * Splits a name string into words.
     *
     * @param name   Name string to be split.
     * @returns Casing-compatible words from the name.
     */
    public split(name: string): string[] {
        const results: string[] = [];
        let start = 0;

        for (let end = 1; end < name.length; end += 1) {
            if (this.isUpperCase(name[end])) {
                results.push(name.substring(start, end));
                start = end;
            }
        }

        if (start !== name.length) {
            results.push(name.substring(start, name.length));
        }

        return results;
    }

    /**
     * Determines whether a letter is uppercase.
     *
     * @param letter   Letter from a name.
     * @returns Whether the letter is uppercase.
     */
    private isUpperCase(letter: string): boolean {
        return letter === letter.toUpperCase();
    }
}
