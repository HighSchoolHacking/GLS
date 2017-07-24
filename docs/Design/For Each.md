# For Each

A loop that iterates over all elements of an array. 
This loop does not use an explicit index.

## Commands

### `for each start`

`for each start : array type iterator`

Starts a for each block. 
The first parameter is the array to be iterated over.
The second command is the type of the array. 
The third parameter is the iterator variable.

### `for each end`

Ends a for each block.

## Usage

```
for each start : basket string fruit
for each end
```

### CSharp

```csharp
foreach (string fruit in basket) {
}
```

### Java

```java
for (string fruit : basket) 
{
}
```

### Python

```python
for fruit in basket:

```

### Ruby

```ruby
for fruit in basket
end
```

### TypeScript

```typescript
for (let fruit of basket) {
}
```

### JavaScript

```javascript
for (let fruit of basket) {
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
            <td>ForEachStartLeft</td>
            <td><code>string</code></td>
            <td>Starts the first line of for each block</td>
        </tr>
        <tr>
            <td>ForEachStartItteration</td>
            <td><code>string</code></td>
            <td>Starts the iteration statement</td>
        </tr>
        <tr>
            <td>ForEachStartSeparator</td>
            <td><code>string</code></td>
            <td>Links the iterator variable and array</td>
        </tr>     
        <tr>
            <td>ForEachStartRight</td>
            <td><code>string</code></td>
            <td>Ends the first line of for each block</td>
        </tr>     
        <tr>
            <td>ForEachEnd</td>
            <td><code>string</code></td>
            <td>The end of for each block.</td>
        </tr>
    </tbody>
</table>

### Langauge Values

<table>
    <thead>
        <th>Language</th>
        <th>ForEachStartLeft</th>
        <th>ForEachStartItteration</th>
        <th>ForEachStartSeparator</th>
        <th>ForEachStartRight</th>
        <th>ForEachEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"foreach"</code></td>
            <td><code>"("</code></td>
            <td><code>"in"</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"for"</code></td>
            <td><code>"("</code></td>
            <td><code>":"</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"for"</code></td>
            <td><code>""</code></td>
            <td><code>"in"</code></td>
            <td><code>""</code></td>
            <td><code>"end"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"for"</code></td>
            <td><code>""</code></td>
            <td><code>"in"</code></td>
            <td><code>":"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"for"</code></td>
            <td><code>"(let"</code></td>
            <td><code>"of"</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>"for"</code></td>
            <td><code>"(let"</code></td>
            <td><code>"of"</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
    </tbody>
</table>