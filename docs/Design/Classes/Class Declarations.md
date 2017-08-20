# Class Declarations

## Feature Overview

All GLS languages have the ability to express the concept of a "class" in the traditional Object Oriented Programming sense.
They can also declare a parent class to extend.
Languages that support strong or gradual type systems can also declaring parent interfaces to implement, if any.


## Commands

### `class start`

`class start : classDescriptor[ extends parentClassDescriptor][ implements parentInterfaceName1 parentInterfaceName2 ...] `

Starting a class declaration will be done with the `class start` command. 
* The first parameter (required) will be the class' descriptor.
* Optionally, a parent class can be declared by typing "extends" followed by the parent class' descriptor.
* Optionally, interfaces to implement can be declared by typing "implements" followed by the interface(s)' names.

A class descriptor is a class name.

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
* Some languages do not support interfaces, so GLS will not print any information related to implementing them in these languages.
