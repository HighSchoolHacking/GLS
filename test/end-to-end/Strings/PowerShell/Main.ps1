# Initialization
$haystack = "Hello, Budgie!";
Write-Output haystack;

# Concatenation
$joined = "It is -> " + haystack + " <- It was";
Write-Output joined;

# Characters
$text
$first = text[0];
Write-Output "$(text)'s first character is $(first).";

# Searching
$needle = "Budgie";
$firstIndexOf = haystack.find(needle);
$secondIndexOf = haystack.find(needle, firstIndexOf + len(needle));

# Results
Write-Output "Found a first result at: $(firstIndexOf).";

if (secondIndexOf -neq -1) {
    Write-Output "Found a second result at: $(secondIndexOf).";
}
