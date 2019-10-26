using System;

namespace Strings
{
    class Program
    {
        public static void Main()
        {
            // Initialization
            string haystack = "Hello, Budgie!";
            Console.WriteLine(haystack);

            // Concatenation
            string joined = "It is -> " + haystack + " <- It was";
            Console.WriteLine(joined);

            // Characters
            string text = "abc";
            char first = text[0];
            Console.WriteLine(string.Format("{0}'s first character is {1}.", text, first));

            // Searching
            string needle = "Budgie";
            int firstIndexOf = haystack.IndexOf(needle);
            int secondIndexOf = haystack.IndexOf(needle, firstIndexOf + needle.Length);

            // Results
            Console.WriteLine(string.Format("Found a first result at: {0}.", firstIndexOf));

            if (secondIndexOf != -1)
            {
                Console.WriteLine(string.Format("Found a second result at: {0}.", secondIndexOf));
            }
        }
    }
}
