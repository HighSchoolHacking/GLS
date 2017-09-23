//
class Utilities {
    public static getLongest(words: string[]): string {
        let longest: string = "";

        for (let word of words) {
            if (word.length > longest.length) {
                longest = word;
            }
        }

        Utilities.log(word);

        return longest;
    }

    public static log(word: string): void {
        console.log("Logging: " + word);
    }
}
//
