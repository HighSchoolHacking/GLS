class Utilities {
    public static GetLongest(words) {
        $longest = "";

        foreach ($word in words)
        {
            if (len(word) -gt len(longest)) {
                longest = word;
            }
        }

        Utilities.Log(longest);

        return longest;
    }

    public static Log(word) {
        Write-Output "Logging: " + word;
    }
}
