# Rest Parameters

A parameter that creates an array for all unassigned arguments.


## Commands

### `rest parameters`

`rest parameters : type, name`

Creates a rest parameter.
The name is the name of the array created for the unassigned arguments.

## Usage

```gls
rest parameters : string, foo
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
            <td>RestParamLeft</td>
            <td><code>string</code></td>
            <td>Necessary language-specific type definitions before keyword.</td>
        </tr>
        <tr>
            <td>RestParamKeyword</td>
            <td><code>string</code></td>
            <td>Language-specific "Rest Parameters" call.</td>
        </tr>
        <tr>
            <td>RestParamRight</td>
            <td><code>string</code></td>
            <td>Necessary language-specific type definitions after keyword.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>RestParamKeyword</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>""</code></td>
            <td><code>"params"</code></td>
            <td><code>"Object[]"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"Object"</code></td>
            <td><code>"..."</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>"*"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>"*"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>""</code></td>
            <td><code>"..."</code></td>
            <td><code>""</code></td>
        </tr>
    </tbody>
</table>

### Errata

* Python and Ruby can accept any argument regardless of type specified.
