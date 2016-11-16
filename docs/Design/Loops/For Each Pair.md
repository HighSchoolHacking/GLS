# For Each Pair

A loop that itterates over a dictionary by pair.

## Commands

### `for each pair start`

`for each pair start : container pair key string value int`

Starts a for each pair loop.
The first parameter is the container to be itterated over.
The second parameter is the itterator variable, of type pair.
The thrid parameter is the variable representing the key portion of the pair, of type specified by the fourth parameter.
The fifth parameter is the variable representing the value portion of the pair, of type specified by the sixth parameter.

## Usage
```
for each pair start : container pair key string value int
    comment line : ...
for each end
```

### CSharp
```csharp
foreach (KeyValuePair<string, int> pair in container)
{
    string key = pair.Key;
    int value = pair.Value;
    // ...
}
```

### Java
```java
for (Map.Entry<string, int> pair : container.entrySet()) {
    string key = pair.getKey();
    int value = pair.getValue();
    // ...
}
```

### Python
```python
for key, value in container.iteritems():
    # ...
```

### Ruby
```ruby
container.each { |key, value|
    # ...
}
```

### TypeScript
```typescript
for (let key: string in container) {
    let value: number = container[key];
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
            <td>ForEachPairStartLeft</td>
            <td><code>string</code></td>
            <td>Starts the first line of for each pair block</td>
        </tr>
        <tr>
            <td>ForEachPairStartItteration</td>
            <td><code>string</code></td>
            <td>Starts the iteration statement.</td>
        </tr>
        <tr>
            <td>ForEachKeyStartMiddle</td>
            <td><code>string</code></td>
            <td>The middle of for each pair start.</td>
        </tr>     
        <tr>
            <td>ForEachPairPairClass</td>
            <td><code>string</code></td>
            <td>How given language represents pairs.</td>
        </tr>
        <tr>
            <td>ForEachPairStartRight</td>
            <td><code>string</code></td>
            <td>Ends the first line of for each block.</td>
        </tr> 
        <tr>
            <td>ForEachPairPairAsPair</td>
            <td><code>boolean</code></td>
            <td>Whether a language represents is pairs as explicit pairs.</td>
        </tr>
        <tr>
            <td>ForEachPairAsKey</td>
            <td><code>boolean</code></td>
            <td>Wheter a language represents pairs as keys.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>ForEachPairStartLeft</th>
        <th>ForEachPairStartItteration</th>
        <th>ForEachPairStartMiddle</th>
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
        <th>ForEachPairPairClass</th>
        <th>ForEachKeyStartRight</th>
        <th>ForEachPairAsPair</th>
        <th>ForEachPairAsKey</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>".Keys"</code></td>
            <td><code>") {"</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>".keySet()"</code></td>
            <td><code>") {"</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>".each_key { |"</code></td>
            <td><code>"|"</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>":"</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>""</code></td>
            <td><code>") {"</code></td>
            <td><code>false</code></td>
            <td><code>true</code></td>
        </tr>
    </tbody>
</table>
