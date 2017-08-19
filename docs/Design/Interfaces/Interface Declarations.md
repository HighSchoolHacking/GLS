# Interface Declarations

## Feature Overview

Interfaces are used as outlines for classes that implement them.
They contain methods that a child class will need to implement.
This doc contains interface declaration as well as ways for interfaces to extend from other interfaces.


## Commands

### `interface start`

`interface start : interfaceName [extendedInterfaceName1 extendedInterfacename2...]`

A command to begin interface declaration.
It will take the interface's name as a parameter.
It will also take optional parameters of interface(s) to extend from.

### `interface end`

`interface end`

A command to end an interface declaration.


## Usage

```gls
interface start : IPoint
interface end

interface start : INewCar ICar IVehicle
interface end
```

### CSharp

```csharp
interface IPoint
{
}

interface INewCar : ICar, IVehicle
{
}
```

### Java

```java
interface IPoint {
}

interface INewCar extends ICar, IVehicle {
}
```

### TypeScript

```typescript
interface IPoint {
}

interface INewCar extends ICar, IVehicle {
}
```


## Errata

* Explicit interfaces do not exist in Ruby and Python, so these commands will not print anything in Ruby or Python.
