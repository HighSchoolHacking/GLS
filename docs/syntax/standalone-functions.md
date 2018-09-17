# Standalone Functions

It's common to use functions or methods that have no logical connection as members of classes.
Dynamic languages with first-class functions such as JavaScript and Python typically declare these as standalone functions declare stored as regular variables.
Static languages with class-based files such as C# and Java typically declare these as static methods within static classes.

## Declaring Standalone Functions

GLS unifies the two with the concept of a `standalone function`.
These functions, similar to static functions, are referenced in GLS code as members of some standalone container, which becomes a static class in static languages but goes away in dynamic languages.

Declaring a standalone function requires placing it within a group of them, similar to a static class declaration.

* `standalone functions declare start` takes a single parameter as the name of the group in PascalCase, which will become the class name in static languages.
It may take in the `export` keyword before the name of the group to indicate the group being available to import in other files.
* `standalone functions declare end` closes the group and takes no parameters.
* `standalone function declare start` takes in either `public` or `private` to indicate its availability outside of the group, the function name in PascalCase, return type, and any number of (name, type) pairs of parameters.
* `standalone function declare end` closes a function and takes no parameters.

Calling standalone functions with `standalone function` takes in the name of the group in PascalCase, the privacy of the command, the name of the method in PascalCase, then any parameters.

```gls
standalone functions declare start : export TextUtilities
    standalone function declare start : public SquareText string text string
        return : { standalone function : TextUtilities private RepeatText text { string length : text } }
    standalone function declare end

    standalone function declare start : private RepeatText string text string times int
        variable : combined string ""

        for numbers start : i int 0 times
            operation : combined (increase by) text
        for numbers end

        return : combined
    standalone function end
standalone functions declare end
```

In C#:

```csharp
public static class TextUtilities
{
    public static string SquareText(string text)
    {
        return TextUtilities.RepeatText(text, text.Length);
    }

    private static string RepeatText(string text, int times)
    {
        string combined = "";

        for (int i = 0; i < times; i++)
        {
            combined += text;
        }

        return combined;
    }
}
```

In Python:

```python
def square_text(text):
    return repeat_text(text, len(text))

def repeat_text(text, times):
    combined = ""

    for (i in range(0, times)):
        combined += text

    return combined
```

## Importing Standalone Functions

The `import standalone functions` command must be used after the `use` in import declarations because different languages will import either the container group (static class) or individual functions.
It takes in the name of the group in PascalCase followed by any number of standalone function names in PascalCase to import.

```gls
import local : Utilities Text use { import standalone functions : TextUtilities RepeatText }

variable : repeated string { standalone function : TextUtilities public RepeatText "foo" 7 }
```

In C#:

```csharp
using Utilities.Text;

string repeated = TextUtilities.RepeatText("foo", 7);
```

In Python:

```python
from "./utilities/text" import repeat_text

repeated = repeat_text("foo", 7)
```
