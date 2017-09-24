# Interfaces

Most languages either lack type annotations or recognize some kind of "interface" descriptor of types. As with member variable declarations, declaring an interface is allowed in GLS and only creates code in strongly or gradually typed languages.

`interface start` takes in a PascalCase name of an interface followed by any number of interfaces to extend from. End an interface with `interface end`. 

Declare public methods on an interface with `interface method`, which takes the name of the interface in PascalCase, the return type, followed by any number of \(name, type\) parameters.

```gls
interface start : IShape
    interface method : GetArea float
interface end

interface start : IPolygon IShape
    interface method : GetPerimeter float
interface end
```

In C\#:

```csharp
interface IShape
{
    float GetArea();
}

interface IPolygon : IShape
{
    float GetPerimeter();
}
```



