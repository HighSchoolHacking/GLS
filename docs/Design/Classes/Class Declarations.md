# Class Declarations

## Feature Overview

This improvement adds support for class declarations to GLS, including:

* Naming a class
* Declaring any generics *(optional)*
* Declaring a parent class to extend *(optional)*
* Declaring parent interfaces to implement *(optional)*


## Commands

### `class start`

`class start : classDescriptor [ "extends" parentClassDescriptor] [ "implements" parentInterfaceName1 parentInterfaceName2 parentInterfaceName3 ...] `

Starting a class declaration will be done with the `class start` command. 
* The first parameter (required) will be the class' descriptor.
* The second parameter (optional) will be the keyword "extends".
* The third parameter (optional) will be the parent class' descriptor.
* The fourth parameter (optional) will be the keyword "implements".
* The fifth parameter on (optional) will be the names of interfaces to implement from.

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

class start : Point implements ICoords
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

class Point : ICoords
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

class Point implements ICoords
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

class Point implements ICoords {
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
    </tbody>
</table>

### Errata

* Some languages such as Java and TypeScript do not support multiple class inheritance, so GLS will not.
* Interfaces do not exist in Python, so marking a class as implementing one is currently out of scope.
* Adding modifiers such as `"extends"` to generics is currently out of scope.
* Duck-typed languages such as Ruby and Python have no need for generics, so GLS will skip printing generic information in them.
* Python and Ruby do not support interfaces, so GLS will not print any information related to implementing them.
