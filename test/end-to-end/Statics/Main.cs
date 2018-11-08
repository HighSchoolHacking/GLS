//
using System;

class Utilities
{
    public static string GetLongest(string[] words)
    {
        string longest = "";

        foreach (string word in words)
        {
            if (word.Length > longest.Length)
            {
                longest = word;
            }
        }

        Utilities.Log(longest);

        return longest;
    }

    public static void Log(string word)
    {
        Console.WriteLine("Logging: " + word);
    }
}
//
