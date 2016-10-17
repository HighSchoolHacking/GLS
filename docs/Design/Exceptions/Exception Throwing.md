# Exception Throwing

A manual exception throw merely calls the declared exception class, and is treated like a normally generated exception of the same type.


## Commands

### `throw exception`

`throw exception : exceptionType message`

Throws a new exception of type exceptionType. The message parameter attacthes a message to the thrown exception.

## Usage

```
throw exception : exceptionType foo
```

### CSharp

```csharp
throw new exceptionType("foo")
```

### Java

```java
throw new exceptionType("foo")
```

### Python

```python
raise excpetionType("foo")
```

### Ruby

```ruby
raise exceptionType.new("foo")
```

### TypeScript

```typescript
throw new exceptionType("foo")
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
            <td>ThrowExceptionLeft</td>
            <td><code>string</code></td>
            <td>The beginning of a throw exception statement</td>
        </tr>
        <tr>
            <td>ThrowExceptionMiddle</td>
            <td><code>string</code></td>
            <td>The middle of a throw exception statement</td>
        </tr>
        <tr>
            <td>ThrowExceptionRight</td>
            <td><code>string</code></td>
            <td>The end of a throw exception statement</td>
        </tr>
     </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>ThrowExceptionLeft</th>
        <th>ThrowExceptionMiddle</th>
        <th>ThrowExceptionRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"throw new"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"throw new"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"raise"</code></td>
            <td><code>".new("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"raise"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"throw new"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
    </tbody>
</table>

## Errata
- Java requires that a function declare all errors it might throw. This is supported.
- Ruby's `raise` keyword can be used on its own. It defaults to a RunTime error.
- Python's `raise` keyword can be used to reraise the caught exception in an `except` block.
