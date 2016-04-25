# Enum Values

## Feature Overview

Enums values may be retrieved from their container enums by name.


## Commands

### `enum`

`enum` `:` `enumName` `valueName`

The `enum` command retrieves an enum value by name.


## Usage

```
enum : Direction Horizontal
```

### CSharp

```csharp
Direction.Horizontal
```

### Java

```java
Direction.Horizontal
```

### Python

```python
Direction.Horizontal
```

### Ruby

```ruby
Direction.Horizontal
```

### TypeScript

```typescript
Direction.Horizontal
```


## Implementation

Retrieving an enum value consists of `EnumValueLeft`, the name of the container enum, `EnumValueMiddle`, the name of the value, and `EnumValueRight`. 

### Language Values

<table>
    <thead>
        <th></th>
        <th>EnumValueLeft</th>
        <th>EnumValueMiddle</th>
        <th>EnumValueRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
    </tbody>
</table>

### Errata

* Some languages support parsing enums to and from strings. This is currently out of scope.
* Some languages support setting enums to strings as well as numbers. This is currently out of scope.
