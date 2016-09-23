# List

## Feature Overview

All supported languages provide some amount of built-in list support, either explicitly with lists or with an array equivalent.


## Commands

### `list pop`

`list pop : name`

The `list pop` command removes the last element of a list.

## Usage

```gls
list pop : dogs
```

### CSharp

```csharp
dogs.RemoveAt(dogs.Count)
```

### Java

```java
dogs.remove(dogs.size()-1)
```

### Python

```python
dogs.pop()
```

### Ruby

```ruby
dogs.pop
```

### TypeScript

```typescript
dogs.pop()
```

## Implementation

### Properties

These commands will be implemented as native calls.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>""</td>
            <td><code>String</code></td>
            <td>Language specific implementation of list container</td>
        </tr>
        <tr>
            <td>Pop</td>
            <td><code>(native call properties)</code></td>
            <td>Method properties to remove the last element of a list..</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Property1</th>
        <th>Property2</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"List"</code></td>
            <td><code>C# Property2 value</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"ArrayList"</code></td>
            <td><code>Java Property2 value</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"lists"</code></td>
            <td><code>Ruby Property2 value</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"lists"</code></td>
            <td><code>Python Property2 value</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"asArray"</code></td>
            <td><code>TypeScript Property2 value</code></td>
        </tr>
    </tbody>
</table>

### Errata

*
