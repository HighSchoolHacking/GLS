# Print Statement

Creates a print statement.

## Commands

### `print`

`print : foo`

Outputs a print statement that prints the parameter.

## Usage

```
print : foo
```

### CSharp

```csharp
Console.WriteLine(foo);
```

### Java

```java
System.out.println(foo);
```

### Python

```python
print(foo)
```

### Ruby

```ruby
puts foo
```

### TypeScript

```typescript
console.log(foo)
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
            <td>Print Left</td>
            <td><code>string</code></td>
            <td>Left half of a print statement</td>
        </tr>
        <tr>
            <td>Print Right</td>
            <td><code>string</code></td>
            <td>Right half of a print statement</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Print Left</th>
        <th>Print Right</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"Console.WriteLine("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"System.out.println("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"puts "</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"print("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"console.log("</code></td>
            <td><code>")"</code></td>
        </tr>
    </tbody>
</table>
