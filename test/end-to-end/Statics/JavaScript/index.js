class Utilities {
    static getLongest(words) {
        let longest = "";

        for (let word of words) {
            if (word.length > longest.length) {
                longest = word;
            }
        }

        Utilities.log(longest);

        return longest;
    }

    static log(word) {
        console.log("Logging: " + word);
    }
}

