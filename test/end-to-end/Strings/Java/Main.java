package strings;

class Index {
    public static void main(String[] args) {
        // Initialization
        String haystack = "Hello, GLS!";
        System.out.println(haystack);

        // Concatenation
        String joined = "It is -> " + haystack + " <- It was";
        System.out.println(joined);

        // Characters
        String text = "abc";
        char first = text.get(0);
        System.out.println(String.format("%0$s's first character is %1$c.", text, first));

        // Searching
        String needle = "GLS";
        Integer firstIndexOf = haystack.indexOf(needle);
        Integer secondIndexOf = haystack.indexOf(needle, firstIndexOf + needle.length());

        // Results
        System.out.println(String.format("Found a first result at: %0$d.", firstIndexOf));

        if (secondIndexOf != -1) {
            System.out.println(String.format("Found a second result at: %0$d.", secondIndexOf));
        }
    }
}
