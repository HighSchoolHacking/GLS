//
using System;

// Initialization
string haystack = "Hello, GLS!";

// Searching
string needle = "GLS";
int firstIndexOf = haystack.IndexOf(needle);
int secondIndexOf = haystack.IndexOf(needle, firstIndexOf + needle.Length);

// Results
Console.WriteLine(string.Format("Found a first result at: {0}.", firstIndexOf));

if (secondIndexOf != -1)
{
    Console.WriteLine(string.Format("Found a second result at: {0}.", secondIndexOf));
}
//
