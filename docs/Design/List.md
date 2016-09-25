# List

## Feature Overview

All supported languages provide some amount of built-in list support.


## Commands

### `list pop`

`list pop : name`

The `list pop` command removes the last element of a list.

## Usage

```gls
list pop : foo
```

### CSharp

```csharp
foo.RemoveAt(foo.Count - 1)
```

### Java

```java
foo.remove(foo.size() - 1)
```

### Python

```python
foo.pop()
```

### Ruby

```ruby
foo.pop
```

### TypeScript

```typescript
foo.pop()
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
            <td>Pop</td>
            <td><code>(native call properties)</code></td>
            <td>Method properties to remove the last element of a list.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Pop</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>`Function`</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>`Function</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>`Function`</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>`Function`</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>`Function`</code></td>
        </tr>
    </tbody>
</table>

### Errata

*
