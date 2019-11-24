# Internal Structure

The driving class to convert Budgie syntax into real language code is `Budgie`.
Its internal conversion process consists of three steps:

1. **Tokenization**
2. **Rendering**
3. **Merging**

## 1. Tokenization

Given raw syntax as string(s), it must be "tokenized" (parsed) into Budgie nodes.
Budgie nodes come in three varieties, each of which implement the exported `IBudgieNode` interface:

* `BlankNode`: Blank line with no non-whitespace characters.
* `CommandNode`: Command name followed by any number of arguments.
* `TextNode`: Raw text passed to a command.

For example, given the following line:

```budgie
variable declare : foo number { operation : 1 plus 2 }
```

The corresponding Budgie file's node structure in JSON would look like:

```json
{
    "nodes": [
        {
            "args": [
                "foo",
                "number",
                {
                    "args": [
                        "1",
                        "plus",
                        "2"
                    ],
                    "command": "operation",
                    "type": "Command"
                }
            ],
            "command": "variable",
            "type": "Command"
        }
    ]
}
```

### `SourceFileParser`

Parsing raw Budgie strings is done by `SourceFileParser`, which uses a `SourceLineParser` to convert each line of the input file.
You can directly create a `BudgieFile` containing `IBudgieNode`s using one without a driving `Budgie` context:

```javascript
import { SourceFileParser } from "budgielang";

const parser = new SourceFileParser();

parser.parseLines([
    `print: ("Hello world!")`
]);
```

## 2. Rendering

Given a `BudgieFile`, each "line" (root-level node) is converted to an intermediate `LineResults` instance.
The `LineResults` class contains an array of `CommandResult` instances, which store the generated language-specific code and desired indentation, and whether the line should have a semicolon.

> Semicolons and indentation levels are separate from the `CommandResult` text because nested commands need to ignore them.
> For example, `operation : b (increase by) c` creates a semicolon and is indented normally on its own,
> but not inside `list push : a { operation : b (increase by) c }`.

### `RenderContext`

Rendering is managed by a `RenderContext` instance containing a plethora of public methods.
It has references to the output `Language`, `Command` classes that can render nodes to the language, and current directory path of the parsed file.
The `RenderContext` instance is exposed to each `Command` for recursion.

The most notable method is also `convert`, and is directly called by the parent `Budgie`.
This `convert` takes in a `BudgieFile` and returns an array of `LineResults`.

```javascript
import { CSharp, RenderContext, SourceFileParser } from "budgielang";

const parser = new SourceFileParser();
const context = new RenderContext(new CSharp());

const BudgieFile = parser.parseLines([
    `print: ("Hello world!")`
]);

// System.Console.WriteLine("Hello world!");
context.convert(BudgieFile);
```

The recursive step to convert `IBudgieNode`s into `LineResults` is done by an internal `BudgieNodeRenderer`.

### `Command`

Each available Budgie command is keyed to a `Command` sub-class by name.
They're retrieved by name by the `BudgieNodeRenderer` using a `CommandsBag`.
Raw Budgie describes the commands in `lower case`; `Command` sub-classes have the corresponding name in `PascalCase`.
For example, `list push` corresponds to `ListPushCommand` in `src/Rendering/Commands/ListPushCommand.ts`.

Commands render `LineResults` through their `render` function.

#### `CommandMetadata`

Each `Command` stores a `CommandMetadata` member with some basic information on the command, such as its name and description.
The metadata also includes the expected parameters the command takes in as an. `IParameter` array.
These are validated by the `BudgieNodeRenderer` against what the command is passed before commands are rendered.

## 3. Merging

Once a file's `LineResults` are collected into an array, they're conglomerated into a `string[]` of output language lines.

This boils down to an advanced string concatenation: each result of each `LineResult` is added to the overall `output`, factoring in indentation.
