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


## Errata

* Private constructors are currently out of scope.
