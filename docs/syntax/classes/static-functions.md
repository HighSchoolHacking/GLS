# Static Functions

As with static variables, Budgie syntax for static functions behaves almost identically to the member equivalents.
The only difference is that accessing them takes in the class name instead of an instance reference.

```budgie
class start : Utilities
    static function declare start : public GetLongest string words { array type : string }
        variable : longest string

        for each start : words word string
            if start : { operation : { string length : word } (greater than) { string length : longest } }
                operation : longest equals word
            if end
        for each end

        static function : public Utilities log word

        return : longest
    static function declare end

    static function declare start : public log void word string
        print : { concatenate : ("Logging: ") word }
    static function declare end
class end
```

In C#:

```csharp
using System;

class Utilities
{
    public static string GetLongest(string[] words)
    {
        string longest;

        foreach (string word in words)
        {
            if (word.Length > longest.Length)
            {
                longest = word;
            }
        }

        Utilities.Log(word);

        return longest;
    }

    public static void Log(string word)
    {
        Console.WriteLine("Logging: " + word);
    }
}
```

In Python:

```python
class Utilities:
    @staticmethod
    def get_longest(words):
        for word in words:
            if len(word) > len(longest):
                longest = word

        Utilities.log(word)

        return longest

    @staticmethod
    def log(word):
        print("Logging: " + word)
```
