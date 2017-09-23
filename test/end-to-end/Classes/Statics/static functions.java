class Utilities {
    public static string getLongest(string[] words) {
        string longest = "";

        for (string word : words) {
            if (word.length() > longest.length()) {
                longest = word;
            }
        }

        Utilities.log(word);

        return longest;
    }

    public static void log(string word) {
        System.out.println("Logging: " + word);
    }
}
