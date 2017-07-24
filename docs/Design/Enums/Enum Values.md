# Enum Values

Enums values may be retrieved from their container enums by name.


## Commands

### `enum`

`enum` `:` `enumName` `memberName`

The `enum` command retrieves an enum member value by name.


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
Direction::Horizontal
```

### TypeScript

```typescript
Direction.Horizontal
```

### JavaScript

```javascript
Direction.Horizontal
```


## Implementation

Retrieving an enum value consists of `ValueLeft`, the name of the container enum, `ValueMiddle`, the name of the member, and `ValueRight`. 

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>ValueLeft</td>
            <td>string</td>
            <td>Start of a line retrieving an enum value.</td>
        </tr>
        <tr>
            <td>ValueMiddle</td>
            <td>string</td>
            <td>Middle of a line retrieving an enum value.</td>
        </tr>
        <tr>
            <td>ValueRight</td>
            <td>string</td>
            <td>End of a line retrieving an enum value.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>ValueLeft</th>
        <th>ValueMiddle</th>
        <th>ValueRight</th>
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
            <td>`"::"`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td>`""`</td>
            <td>`"."`</td>
            <td>`""`</td>
        </tr>
    </tbody>
</table>

### Errata

* Some languages support parsing enums to and from strings. This is currently out of scope.
* Some languages support setting enums to strings as well as numbers. This is currently out of scope.
