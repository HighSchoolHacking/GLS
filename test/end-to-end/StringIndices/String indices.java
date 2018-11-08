//
// Initialization
String haystack = "Hello, GLS!";

// Searching
String needle = "GLS";
int firstIndexOf = haystack.indexOf(needle);
int secondIndexOf = haystack.indexOf(needle, firstIndexOf + needle.length());

// Results
System.out.println(String.format("Found a first result at: %0$d.", firstIndexOf));

if (secondIndexOf != -1) {
    System.out.println(String.format("Found a second result at: %0$d.", secondIndexOf));
}
//
