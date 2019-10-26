package strings;

class Main {
    public static void main(String[] args) {
        // Initialization
        String haystack = "Hello, Budgie!";
        System.out.println(haystack);

        // Concatenation
        String joined = "It is -> " + haystack + " <- It was";
        System.out.println(joined);

        // Characters
        String text = "abc";
        char first = text.charAt(0);
        System.out.println(String.format("%s's first character is %c.", text, first));

        // Searching
        String needle = "Budgie";
        Integer firstIndexOf = haystack.indexOf(needle);
        Integer secondIndexOf = haystack.indexOf(needle, firstIndexOf + needle.length());

        // Results
        System.out.println(String.format("Found a first result at: %d.", firstIndexOf));

        if (secondIndexOf != -1) {
            System.out.println(String.format("Found a second result at: %d.", secondIndexOf));
        }
    }
}
