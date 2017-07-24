# Main

Commands used to create the main function of a program.

## Commands

### `main start`

`main start`

Denotes the start of a main block.

### `main end`

`main end`

Denotes the end of a main block.

## Usage

```
main start
    comment line : ...
main end
```

### CSharp

```csharp
class Program
{
    public static void Main()
    {
        // ...
    }
}
```

### Java

```java
class Program {
    public static void main(String[] args) {
        // ...
    }
}
```

### Python

```python
if __name__ == "__main__":
    # ...

```

### Ruby

```ruby
# ...
```

### TypeScript

```typescript
(() => {
    // ...
})();
```

### JavaScript

```typescript
(() => {
    // ...
})();
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
            <td>MainStart</td>
            <td><code>string</code></td>
            <td>Line(s) that start the main block.</td>
        </tr>
        <tr>
            <td>MainEnd</td>
            <td><code>string</code></td>
            <td>Line that ends the main block.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>MainStart</th>
        <th>MainEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"class Program\n{\npublic static void Main()\n{"</code></td>
            <td><code>"}\n}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"class Program {\npublic static void Main() {"</code></td>
            <td><code>"}\n}"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"if __name__ == "__main__":"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"(() => {"</code></td>
            <td><code>"})();"</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>"(() => {"</code></td>
            <td><code>"})();"</code></td>
        </tr>
    </tbody>
</table>
