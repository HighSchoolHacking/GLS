# Files

All the samples thus far have been isolated snippets of code.
Some languages, particularly class-based ones, will have some scaffolding at the beginning and end of files.
These lines are often dependent upon both the file name and/or path within a project.

The first line of every `.bg` file should be a `file start`, which takes any number of PascalCase folder names representing the file's path in its project, followed by the PascalCase file name.

The last line of every `.bg` file should be a `file end`.

```budgie
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

Note that because of [Java](https://docs.oracle.com/javase/specs/jls/se8/html/jls-7.html#jls-7.6), each file must export a construct with the same file's name.
You can use any of:

* `class start : export` to export a [class](./classes.md)
* `enum start : export` to export an [enum](./enums.md)
* `interface start : export` to export an [interface](./interfaces.md)
* `standalone functions declare start : export` to export a [standalone function group](./standalone-functions.md)
