# Imports

Supported languages generally have one or two of the following forms of imports:

1. Importing specific items within a package
2. Importing an entire package

We define a package here as either an external package or a local ("relative") file within the same project.
So far, only importing specific items from relative files is supported.

## Relative Imports

You can import specific constructs from other files using `import local`.
It takes in three sections:

* Absolute directory path from the project root to file to import from, including the file's name
* Optionally, the `use` keyword followed by any runtime constructs (such as classes) to retrieve from the file
* Optionally, the `types` keyword followed by any interfaces to retrieve from the file

Languages that do not recognize interfaces, such as JavaScript, will ignore any `types` imports.

```budgie
file start : MyProject Samples Sample
    import local : MyProject Actors Actor use Actor
    import local : MyProject Collections Storage use Storage types IStorage
    import local : MyProject Definitions ActorDefinitions IAction types IAction
file end
```

In C#:

```csharp
using MyProject.Actors;
using MyProject.Collections;
using MyProject.Definitions.ActorDefinitions;

namespace MyProject.Samples
{
}
```

In Python:

```python
from ..actors.actor import Actor
from ..collections.storage import Storage
```

### Standalone Imports

[Standalone functions](./standalone-functions.md) may become either a single class or collection of functions depending on the output language,
so they must imported using a specialized `import standalone functions` command within an `import local` command's `use` section.
It takes in the group name to import from and any number of items from the group.

```budgie
file start : MyProject Samples Sample
    import local : MyProject Utilities Strings use { import standalone functions : Strings IsPalindrome Repeat }
file end
```

In C#:

```csharp
using MyProject.Utilities;

namespace MyProject.Samples
{
}
```

In Python:

```python
from ...utilities.strings import is_palindrome repeat
```

## Absolute Imports

These are not supported yet.

### Built-In Imports

You may have seen in previous examples that some languages prepend imports before their code.
C#, for example, has `using System;` before any instance of `Console.WriteLine`.
Budgie will keep track of system imports required for each native command.
