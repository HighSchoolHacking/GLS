# Enums

An "enum" is a container for a specific set of constant names that should be referenced by variables.
Languages vary in their understanding of how to represent these fixed values, but all can achieve some equivalent.

Start an enum with `enum start`, which takes in a PascalCase name of an enum.
Ed an enum with `enum end`.

Each enum value is declared with `enum member`, which takes in a PascalCase name of a member value, an integer value, and if not the last in the enum, a `,` comma.

```gls
enum start : Direction
    enum member : Unknown 0 ,
    enum member : Horizontal 1 ,
    enum member : Vertical 2
enum end
```

In C#:

```csharp
enum Direction
{
    Unknown = 0,
    Horizontal = 1,
    Vertical = 2
}
```

In Python:

```python
class Direction(Enum):
    Unknown = 0
    Horizontal = 1
    Vertical = 2
```

Enum types can be treated as their own type in type declarations.
Later on, you can reference these enum values using the `enum` command, which takes in a name of an enum and a name of one of its values.

```gls
variable : direction Direction { enum : Direction Horizontal }
```

* In C#: `Direction direction = Direction.Horizontal;`
* In Python: `direction = Direction.Horizontal`

## Exports

You can export enums from the current file by including the `export` keyword before the enum's name.

```gls
enum start : export Direction
    enum member : Unknown 0 ,
    enum member : Horizontal 1 ,
    enum member : Vertical 2
enum end
```

In C#:

```csharp
public enum Direction
{
    Unknown = 0,
    Horizontal = 1,
    Vertical = 2
}
```

In Python:

```python
class Direction(Enum):
    Unknown = 0
    Horizontal = 1
    Vertical = 2
```

## Notes

Enums are fairly non-standard across languages.
Don't assume member values to be anything more than a visual suggestion:

* Some languages such as C# will sometimes later treat the values as string-likes, such as in string contatenation.
* Some languages such as Java will skip printing them altogether.
