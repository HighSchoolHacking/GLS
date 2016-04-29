# Class Declarations

## Feature Overview

This improvement adds support for class declarations to GLS, including:

* Naming a class
* Declaring any generics *(optional)*
* Declaring a class to extend *(optional)*


## Commands

### `class start`

`class start` `:` `classDescriptor`*`[, parentClassDescriptor]`*

Starting a class declaration will be done with the `class start` command. 
* The first parameter (required) will be the class' descriptor.
* The second parameter (optional) will be a parent class' descriptor.

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

class start : Shape Measurements<Point>
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
```

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

### Ruby

```ruby
class Point
end

class Measurements
end

class Shape < Measurements
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


## Implementation

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>DeclareStartLeft</td>
            <td>string</td>
            <td>Start of the first line of a class declaration.</td>
        </tr>
        <tr>
            <td>DeclareExtendsLeft</td>
            <td>string</td>
            <td>Start of a parent class declaration within a class declaration.</td>
        </tr>
        <tr>
            <td>DeclareExtendsRight</td>
            <td>string</td>
            <td>End of a parent class declaration within a class declaration.</td>
        </tr>
        <tr>
            <td>DeclareStartRight</td>
            <td>string</td>
            <td>End of the first line of a class declaration.</td>
        </tr>
        <tr>
            <td>DeclareEnd</td>
            <td>string</td>
            <td>End line of a class declaration.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>DeclareStartLeft</th>
        <th>DeclareExtendsLeft</th>
        <th>DeclareExtendsRight</th>
        <th>DeclareStartRight</th>
        <th>DeclareEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`"class "`</td>
            <td>`" : "`</td>
            <td>`""`</td>
            <td>`"\n{"`</td>
            <td>`"}"`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`"class "`</td>
            <td>`" extends "`</td>
            <td>`""`</td>
            <td>`"{"`</td>
            <td>`"}"`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`"def "`</td>
            <td>`"("`</td>
            <td>`")"`</td>
            <td>`":"`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`"class "`</td>
            <td>`" < "`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`"end"`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`"class "`</td>
            <td>`" extends"`</td>
            <td>`""`</td>
            <td>`"{"`</td>
            <td>`"}"`</td>
        </tr>
    </tbody>
</table>

### Errata

* Some languages such as Java and TypeScript do not support multiple inheritance, so GLS will not.
* Interfaces do not exist in Python, so marking a class as implementing one is currently out of scope.
* Adding modifiers such as `"extends"` to generics is currently out of scope.
* Duck-typed languages such as Ruby and Python have no need for generics, so GLS will skip printing generic information in them.
