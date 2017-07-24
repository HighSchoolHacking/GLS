# While Loops

The commands to start and end a while loop.

## Commands

### `while start`

`while start: foo`

Starts a while loop block.
The passed parameter is used as the loop's condition.

### `while end`

`while end`

Ends a while loop block.

## Usage

```
while start : foo
while end
```

### CSharp

```csharp
while (foo)
{
}
```

### Java

```java
while (foo) {
}
```

### Python

```python
while foo:
```

### Ruby

```ruby
while foo
end
```

### TypeScript

```typescript
while (foo) {
}
```

### JavaScript

```javascript
while (foo) {
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
            <td>WhileStartLeft</td>
            <td><code>string</code></td>
            <td>Left of a while start statement.</td>
        </tr>
        <tr>
            <td>WhileStartMiddle</td>
            <td><code>string</code></td>
            <td>Middle of a while start statement.</td>
        </tr>
        <tr>
            <td>WhileStartRight</td>
            <td><code>string</code></td>
            <td>Right of a while start statement.</td>
        </tr>
        <tr>
            <td>WhileEnd</td>
            <td><code>string</code></td>
            <td>End of a while loop block.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>WhileStartLeft</th>
        <th>WhileStartMiddle</th>
        <th>WhileStartRight</th>
        <th>WhileEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"while"</code></td>
            <td><code>"("</code></td>
            <td><code>")\n{"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"while"</code></td>
            <td><code>"("</code></td>
            <td><code>") {"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"while"</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>"end"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"while"</code></td>
            <td><code>""</code></td>
            <td><code>":"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"while"</code></td>
            <td><code>"("</code></td>
            <td><code>") {"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>"while"</code></td>
            <td><code>"("</code></td>
            <td><code>") {"</code></td>
            <td><code>"}"</code></td>
        </tr>
    </tbody>
</table>
