# Interfaces

Most languages either lack type annotations or recognize some kind of "interface" descriptor of types.
As with member variable declarations, declaring an interface is allowed in GLS and only creates code in strongly or gradually typed languages.

`interface start` takes in a PascalCase name of an interface followed by any number of interfaces to extend from.
End an interface with `interface end`.

Declare public methods on an interface with `interface method`, which takes the name of the method in PascalCase, the return type, followed by any number of (name, type) parameters.

```gls
interface start : IShape
    interface method : GetArea double
interface end

interface start : IPolygon IShape
    interface method : GetPerimeter double
interface end
```

In C#:

```csharp
interface IShape
{
    double GetArea();
}

interface IPolygon : IShape
{
    double GetPerimeter();
}
```

## Exports

You can export interfaces from the current file by including the `export` keyword before the interface's name.

```gls
interface start : export IShape
    interface method : GetArea double
interface end
```

In C#:

```csharp
public interface IShape
{
    double GetArea();
}
```
