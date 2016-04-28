# Enum Values

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

Retrieving an enum value consists of `MemberLeft`, the name of the container enum, `MemberMiddle`, the name of the value, and `MemberRight`. 

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>MemberLeft</td>
            <td>string</td>
            <td>Start of a line declaring an enum member.</td>
        </tr>
        <tr>
            <td>MemberMiddle</td>
            <td>string</td>
            <td>Middle of a line declaring an enum member.</td>
        </tr>
        <tr>
            <td>MemberRight</td>
            <td>string</td>
            <td>End of a line declaring an enum member.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>MemberLeft</th>
        <th>MemberMiddle</th>
        <th>MemberRight</th>
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
