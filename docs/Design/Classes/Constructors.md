# Constructors

## Feature Overview

A constructor is an initialization method called when a new instance of a class is created.

## Commands

### `constructor start`

`constructor start` `:` `className` *`[ parameterName, parameterType, ...]`*

Starting a class constructor will be done with the `constructor start` command. The name of the class, excluding generics, is required.

As with function declarations, any numer of parameter name & type pairs may be added after.

### `constructor end`

`constructor end`

Ending a class declaration will be done with the `class end` command.

### `super constructor`

`super constructor` *`[ : parameter, ...]`*

Calling the constructor of the parent class is done with `super constructor`.

As with function calls, any number of parameters may be added.


## Usage

```
constructor start : Foo
constructor end

constructor start : name string count int
    super constructor : name
constructor end
```

### CSharp

```csharp
Foo() {
}

Bar(string name, int count) {
    base(name);
}
```

### Java

```java
Foo() {
}

Bar(string name, int count) {
    super(name);
}
```

### Python

```python
def __init__(self):

def __init__(self, name, count):
    super().__init__(name);
```

### Ruby

```ruby
def initialize():

def initialize(name, count):
    super(name)

```

### TypeScript

```typescript
constructor() {
}

constructor(name: string, count: number) {
    super(name);
}
```

### JavaScript

```javascript
constructor() {
}

constructor(name: string, count: number) {
    super(name);
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
            <td>ConstructorKeyword</td>
            <td>string</td>
            <td>A keyword used for constructors, if not the class name.</td>
        </tr>
        <tr>
            <td>ConstructorTakesThis</td>
            <td>boolean</td>
            <td>Whether constructors take in the class instance as a first parameter.</td>
        </tr>
        <tr>
            <td>ConstructorUsesKeyword</td>
            <td>boolean</td>
            <td>Whether constructors are named with a keyword, rather than the class name.</td>
        </tr>
        <tr>
            <td>SuperConstructor</td>
            <td>string</td>
            <td>A keyword used for calling the parent class constructor.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>ConstructorKeyword</th>
        <th>ConstructorTakesThis</th>
        <th>ConstructorUsesKeyword</th>
        <th>SuperConstructor</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <th></th>
            <td>`false`</td>
            <td>`false`</td>
            <td>`"base"`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td></td>
            <td>`false`</td>
            <td>`false`</td>
            <td>`"super"`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`"def __init__"`</td>
            <td>`true`</td>
            <td>`true`</td>
            <td>`"super().__init__"`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`"def initialize"`</td>
            <td>`false`</td>
            <td>`true`</td>
            <td>`"super"`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`"constructor"`</td>
            <td>`false`</td>
            <td>`true`</td>
            <td>`"super"`</td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td>`"constructor"`</td>
            <td>`false`</td>
            <td>`true`</td>
            <td>`"super"`</td>
        </tr>
    </tbody>
</table>

### Errata

* Private constructors are currently out of scope.
