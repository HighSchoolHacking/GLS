import java.util.Arrays;

class Utilities {
    public static String getLongest(String[] words) {
        String longest = "";

        for (String word : words) {
            if (word.length() > longest.length()) {
                longest = word;
            }
        }

        Utilities.log(longest);

        return longest;
    }

    public static void log(String word) {
        System.out.println("Logging: " + word);
    }
}

