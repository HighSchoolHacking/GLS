# Class Declarations

## Feature Overview

This improvement adds support for class declarations to GLS, including:

* Naming a class
* Declaring any generics *(optional)*
* Declaring a parent class to extend *(optional)*
* Declaring parent interfaces to implement *(optional)*


## Commands

### `class start`

`class start : classDescriptor[ extends parentClassDescriptor][ implements parentInterfaceName1 parentInterfaceName2 ...] `

Starting a class declaration will be done with the `class start` command. 
* The first parameter (required) will be the class' descriptor.
* Optionally, a parent class can be declared by typing "extends" followed by the parent class' descriptor.
* Optionally, interfaces to implement can be declared by typing "implements" followed by the interface(s)' names.

A class descriptor is a class name and, optionally, any number of names of generics.

### `class end`

`class end`

Ending a class declaration will be done with the `class end` command.


## Usage

```
class start : Point
class end

class start : Measurements<T> 
class end

class start : Shape extends Measurements<Point>
class end

class start : Point implements ICoordinates
class end

class start : Square extends Shape implements IPoint ICoordinates
class end
```

### CSharp

```csharp
class Point
{
}

class Measurements<T>
{
}

class Shape : Measurements<Point>
{
}

class Point : ICoordinates
{
}

class Square : Shape, IPoint, ICoordinates
{
}
```

### Java

```java
class Point {
}

class Measurements<T> {
}

class Shape extends Measurements<Point> {
}

class Point implements ICoordinates {
}

class Square extends Shape implements IPoint, ICoordinates {
}
```

### Python

```python
class Point:

class Measurements:

class Shape(Measurements):

class Point:

class Square(Shape):

```

### Ruby

```ruby
class Point
end

class Measurements
end

class Shape < Measurements
end

class Point
end

class Square < Shape
end
```

### TypeScript

```typescript
class Point {
}

class Measurements<T> {
}

class Shape extends Measurements<Point> {
}

class Point implements ICoordinates {
}

class Square extends Shape implements IPoint, ICoordinates {
}
```


## Errata

* Some languages such as Java and TypeScript do not support multiple class inheritance, so GLS will not.
* Interfaces do not exist in most duck-typed languages, so marking a class as implementing one is currently out of scope.
* Adding modifiers such as `"extends"` to generics is currently out of scope.
* Duck-typed languages such as Ruby and Python have no need for generics, so GLS will skip printing generic information in them.
* Some languages do not support interfaces, so GLS will not print any information related to implementing them in these languages.
