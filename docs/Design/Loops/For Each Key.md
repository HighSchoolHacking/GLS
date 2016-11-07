# For Each Key

A loop that itterates over a dictionary by key.

## Commands

### `for each key start`

`for each key start : container key string`

Starts a for each key block.
The first parameter is the container to be itterated over.
The second parameter is the itterator variable.
The third parameter is the type of the itterator variable.

## Usage
```
for each key start : container key string
    comment line : ...
for each end
```

### CSharp
```csharp
foreach (string key in container.Keys)
{
    // ...
}
```

### Java
```java
for (string key : container.keySet()) {
    // ...
}
```

### Python
```python
for key in container:
    # ...
```

### Ruby
```ruby
container.each_key { |key|
    # ...
}
```

### TypeScript
```typescript
for (let key: string in container) {
    // ...
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
            <td>ForEachKeyStartLeft</td>
            <td><code>string</code></td>
            <td>Starts the first line of for each key block</td>
        </tr>
        <tr>
            <td>ForEachKeyStartItteration</td>
            <td><code>string</code></td>
            <td>Starts the iteration statement.</td>
        </tr>
        <tr>
            <td>ForEachKeyStartMiddle</td>
            <td><code>string</code></td>
            <td>The middle of for each key start.</td>
        </tr>     
        <tr>
            <td>ForEachKeyStartGetKeys</td>
            <td><code>string</code></td>
            <td>Syntax to retrive key.</td>
        </tr>
        <tr>
            <td>ForEachKeyStartRight</td>
            <td><code>string</code></td>
            <td>Ends the first line of for each block.</td>
        </tr>   
        <tr>
            <td>ForEachEnd</td>
            <td><code>string</code></td>
            <td>The end of a for each block.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>ForEachKeyStartLeft</th>
        <th>ForEachKeyStartItteration</th>
        <th>ForEachKeyStartMiddle</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"foreach"</code></td>
            <td><code>"("</code></td>
            <td><code>"in"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"for"</code></td>
            <td><code>"("</code></td>
            <td><code>":"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"for"</code></td>
            <td><code>""</code></td>
            <td><code>"in"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"for"</code></td>
            <td><code>"(let"</code></td>
            <td><code>"of"</code></td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <th>Language</th>
        <th>ForEachKeyStartGetKeys</th>
        <th>ForEachKeyStartRight</th>
        <th>ForEachEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>".Keys"</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>".keySet()"</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>".each_key { |"</code></td>
            <td><code>"|"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>":"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>""</code></td>
            <td><code>") {"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
    </tbody>
</table>
