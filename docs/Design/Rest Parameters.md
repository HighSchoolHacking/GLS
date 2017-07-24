# Rest Parameters

A parameter that creates an array for all unassigned arguments.


## Commands

### `rest parameters`

`rest parameters : name type`

Creates a rest parameter.
Name and type refer to the array of unassigned arguments.

## Usage

```gls
rest parameters : foo string
```

### CSharp

```csharp
params string[] foo
```

### Java

```java
string... foo
```
### Python

```python
*foo
```

### Ruby

```ruby
*foo
```

### TypeScript

```typescript
...foo: string[]
```

### JavaScript

```javascript
...foo
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
            <td>RestKeywordLeft</td>
            <td><code>string</code></td>
            <td>Rest parameter keyword before type declaration.</td>
        </tr>
        <tr>
            <td>RestKeywordMiddle</td>
            <td><code>string</code></td>
            <td>Rest parameter keyword after type declaration but before the array name</td>
        <tr>
            <td>RestKeywordRight</td>
            <td><code>string</code></td>
            <td>Rest parameter keyword after the array name.</td>
        </tr>
        <tr>
            <td>RestDeclarationAfter</td>
            <td><code>boolean</code></td>
            <td>Whether the type declaration occurs before the array name.</td>
        </tr>
        <tr>
            <td>RestDeclarationTypes</td>
            <td><code>boolean</code></td>
            <td>Whether type declaration is necessary.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>RestKeywordLeft</th>
        <th>RestKeywordMiddle</th>
        <th>RestKeywordRight</th>
        <th>RestDeclarationAfter</th>
        <th>RestDeclarationTypes</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"params "</code></td>
            <td><code>"[] "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>""</code></td>
            <td><code>"... "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"*"</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"*"</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"..."</code></td>
            <td><code>": "</code></td>
            <td><code>"[]"</code></td>
            <td><code>true</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>Javascript</th>
            <td><code>"..."</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
    </tbody>
</table>
