# Comment Block

These commands are used to create block-style comments.

## Commands

### `Comment Block Start`

`comment block start`

Begins a comment block.

### `Comment Block`

`comment block : foo`

Creates a line of a comment block. 
The first parameter is the content of that line of the comment block.

### `Comment Block End`

`comment block end`

Ends a comment block.

## Usage

```
comment block start
comment block
comment block : aaa bbb ccc
comment block end
```

### CSharp

```csharp
/*

aaa bbb ccc
*/
```

### Java

```java
/*

aaa bbb ccc
*/
```

### Python

```python
"""

aaa bbb ccc
"""
```

### Ruby

```ruby
=begin

aaa bbb ccc
=end
```

### TypeScript

```typescript
/*

aaa bbb ccc
*/
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
            <td>CommentBlockStart</td>
            <td><code>string</code></td>
            <td>Symbol denoting the start of a comment block.</td>
        </tr>
        <tr>
            <td>CommentBlockEnd</td>
            <td><code>string</code></td>
            <td>Symbol denoting the end of a comment block.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>CommentBlockStart</th>
        <th>CommentBlockEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"/*"</code></td>
            <td><code>"*/"</code></td>
        </tr>
        <tr>
            <th>Java</th>
           <td><code>"/*"</code></td>
            <td><code>"*/"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"=begin"</code></td>
            <td><code>"=end"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"""""</code></td>
            <td><code>"""""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"/*"</code></td>
            <td><code>"*/"</code></td>
        </tr>
    </tbody>
</table>
