# Internal Structure

As in the root `README.md`, the driving class to convert GLS syntax into real language code is `Gls`.

The conversion process consists of two steps:
1. Create temporary line summaries from the raw GLS
2. Convert those line summaries into language output

Read below for technical details.

## `Gls`

```typescript
import { Gls } from "general-language-syntax");

const gls = new Gls();
gls.setLanguage("CSharp");

// System.Console.WriteLine("Hello world!");
gls.convert([
    `print : ("Hello world!")`
]);
```

Each `Gls` instance has a current language.
The public method `convert` takes in an array of lines of raw GLS syntax and returns an array of lines in the output language.

> *Don't forget to `setLanguage` before calling `convert`!*


## `ConversionContext`

Within the `Gls` instance is a `ConversionContext` instance with a plethora of public methods.
The most notable method is also `convert`, and is directly called by the parent `Gls`.

> The `ConversionContext` instance is itself immutable (no conversion state is stored); only variables created within its methods local to a conversion will change.

Within `convert`, a private `LineResultsGenerator` instance generates an array of `LineResults` describing each GLS line's language equivalent with its private `GlsParser`.
Those are then converted to the language output using a private `OutputGenerator`.

### `LineResults`

Each `LineResults` instance is a summary of a single raw GLS line's rendered language output.
It contains:
  * Raw text to be output
  * Whether the line should end with a semicolon *(if not a sub-command)*
  * Any collected imports required for a file to use the line

### `LineResultsGenerator`

Uses a private `GlsParser` to create an array of `LineResults` from raw GLS syntax.
An `ImportsStore` also keeps track of imports required by each line.
After all lines are parsed, imports are converted to `LineResults` with a private `ImportsPrinter` and prepended to the results array.

#### `GlsParser`

Creates an array of `LineResults` from raw GLS syntax.
Each line is assumed to consist of a command name and, optionally, ` : ` followed by space-separated arguments to the command.

Each command name is linked by a private `CommandsBag` instance to an instance of its `Command` sub-class.
That command instance has access to the parent `ConversionContext`.

> *Arguments may contain spaces by being wrapped in `()` parenthesis*.

Arguments may be recursive by being wrapped in `{ ` ` }` brackets.
Recursing on a command will parse the sub-command as usual, then add it to the parent's parameters with `"\n"`-split sub-lines.

#### `Command`

Describes the parameters for a single GLS command *(if any)* and how to render the results.
Each `Command` instance has access to the output language properties and root conversion context.
The `render` method takes in the words parsed from the raw GLS syntax, including the command name, and outputs a `LineResults` instance.

### `OutputGenerator`

Converts an array of `LineResults` to the language output.
For each line in the array, its text is added to a list of output lines, with indentation prepended and a semicolon appended if specified.


## In Summary

Calling `convert` on a `Gls` instance passes the raw GLS lines to a `ConversionContext` instance.
Those lines are converted to temporary `LineResults` summaries in its `LineResultsGenerator` instance using a `GlsParser`.
Those `LineResults` are converted to the output language with the context's `OutputGenerator` instance.

```
                                 Gls
                                  |
                       (contains) |
                                  |
                                  V
        ---------------> ConversionContext
        |                  /            \
        |                 /              \
        |                /                \
        |    (contains) /                  \ (contains)
        |              /                    \
        |             /                      \
        |            V                        V
        |   LineResultsGenerator -----> OutputGenerator
        |                 |
        |      (contains) |
        |                 |
        |                 V
        |            GlsParser
        |                 |
        -------------------
 (renders commands with access to)
```
