# Imports

Supported languages generally have one or two of the following forms of imports:

1. Importing specific items within a package

2. Importing an entire package

We define a package here as either an external package or local file within the same project.

_**Importing and exporting across files is not yet fully implemented.**_

#### Built-In Imports

You may have seen in previous examples that some languages prepend imports before their code. C\#, for example, has `using System;` before any instance of `Console.WriteLine`. GLS will keep track of system imports required for each native command. 



