# Files

All the samples thus far have been isolated snippets of code.
Some languages, particularly class-based ones, will have some scaffolding at the beginning and end of files.
These lines are often dependent upon both the file name and/or path within a project.

The first line of every `.gls` file should be a `file start`, which takes any number of PascalCase folder names representing the file's path in its project, followed by the PascalCase file name.

The last line of every `.gls` file should be a `file end`.

```gls
file start : Models Speech Word
    class start : Word
        comment line : ...
    class end
file end
```

In C#:

```csharp
namespace Models.Speech
{
    class Word
    {
        // ...
    }
}
```

In Python:

```python
class Word:
    # ...
```
