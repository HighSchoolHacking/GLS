# Class Declarations

## Feature Overview

This improvement adds support for class declarations to GLS, including:

* Naming a class
* Declaring any generics *(optional)*
* Declaring a class to extend *(optional)*


## Language Examples

### Java  
```java
class Point
{
}

class Measurements<T>
{
}

class Shape extends Measurements<Point>
{
}
```

### Python

```python
class Point:

class Measurements:

class Shape(Measurements):

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
```

### Ruby

```ruby
class Point
end

class Measurements
end

class Shape
    extends Measurements
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
```


## Design

### `class start`

`class start` `:` `classDescriptor`*`[, parentClassDescriptor]`*

Starting a class declaration will be done with the `class start` command. 
* The first parameter (required) will be the class' descriptor.
* The second parameter (optional) will be a parent class' descriptor.

A class descriptor is a class name and, optionally, any number of names of generics.

### `class end`

`class end`

Ending a class declaration will be done with the `class end` command.

### Usage

```
class start : Point
class end

class start : Measurements<T> 
class end

class start : Shape Measurements<Point>
class end
```


## Errata

* JavaScript and TypeScript do not support multiple inheritance, so GLS will not.
* Interfaces do not exist in Python, so marking a class as implementing one is currently out of scope.
* Adding modifiers such as "extends" to generics is currently out of scope.
* Loosely typed languages such as Ruby and Python don't explicitly generics because they don't need to. Duck typing is sufficient.
