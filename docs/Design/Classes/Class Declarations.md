# Class Declarations

## Feature Overview

This improvement adds support for class declarations to GLS, including:

* Naming a class
* Declaring any generics *(optional)*
* Declaring a parent class to extend *(optional)*
* Declaring parent interfaces to implement *(optional)*


## Commands

### `class start`

`class start : classDescriptor[ extends parentClassDescriptor][ implements parentInterfaceName1 parentInterfaceName2 parentInterfaceName3 ...] `

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

### JavaScript

```javascript
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
            <td>DeclareImplements</td>
            <td>string</td>
            <td>Start of a parent interface declaration within a class declaration.</td>
        </tr>
        <tr>
            <td>DeclareExtendsRight</td>
            <td>string</td>
            <td>End of a parent declaration within a class declaration.</td>
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
            <td><code>"class "</code></td>
            <td><code>" : "</code></td>
            <td><code>" : "</code></td>
            <td><code>""</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"class "</code></td>
            <td><code>" extends "</code></td>
            <td><code>" implements "</code></td>
            <td><code>""</code></td>
            <td><code>"{"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"def "</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>")"</code></td>
            <td><code>":"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"class "</code></td>
            <td><code>" < "</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>"end"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"class "</code></td>
            <td><code>" extends "</code></td>
            <td><code>" implements "</code></td>
            <td><code>""</code></td>
            <td><code>"{"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>"class "</code></td>
            <td><code>" extends "</code></td>
            <td><code>" implements "</code></td>
            <td><code>""</code></td>
            <td><code>"{"</code></td>
            <td><code>"}"</code></td>
        </tr>
    </tbody>
</table>

### Errata

* Some languages such as Java and TypeScript do not support multiple class inheritance, so GLS will not.
* Interfaces do not exist in Python, so marking a class as implementing one is currently out of scope.
* Adding modifiers such as `"extends"` to generics is currently out of scope.
* Duck-typed languages such as Ruby and Python have no need for generics, so GLS will skip printing generic information in them.
* Some languages do not support interfaces, so GLS will not print any information related to implementing them in these languages.
