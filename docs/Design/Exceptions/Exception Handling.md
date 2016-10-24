# Exception Handling

This document will cover both try/catch/finally logic.
Catch blocks detect exceptions thrown in the try block, and run the code contained in the catch block.
Finally blocks always run.

## Commands

### `try start`

`try start`

Begins a try block.

### `try end`

`try end`

Ends a try block.

### `catch start`

`catch start : exceptionType [alias]`

Starts a catch block. 
This command requires an exception type as an argument. 
Optional argument is an alias for the exception.

### `catch end`

`catch end`

Ends a catch block.

### `finally start`

`finally start`

Starts a finally block.

### `finally end`

`finally end`

Ends a finally block.

## Usage

```
try start
    comment : ...
try end
catch start : exceptionType foo
    comment : ...
catch end
finally start
    comment : ...
finally end
```

### CSharp

```csharp
try
{
    // ...
}
catch (exceptionType foo)
{
    // ...
}
finally
{
    // ...
}
```

### Java

```java
try {
    // ...
} catch (exceptionType foo) {
    // ...
} finally {
    // ...
}
```

### Python

```python
try:
    ## ...
except exceptionType as foo:
    ## ...
finally:
    ## ...
```

### Ruby

```ruby
begin
    ## ...
rescue exceptionType => foo
    ## ...
ensure
    ## ...
```

### TypeScript

```typescript
try {
    // ...
} catch (exceptionType foo) {
    // ...
} finally {
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
            <td>TryStartLeft</td>
            <td><code>string</code></td>
            <td>The beginning of try start expression</td>
        </tr>
        <tr>
            <td>TryStartRight</td>
            <td><code>string</code></td>
            <td>The end of try start expression</td>
        </tr>
        <tr>
            <td>CatchStartLeft</td>
            <td><code>string</code></td>
            <td>The beginning of catch start expression</td>
        </tr>
        <tr>
            <td>CatchStartMiddle</td>
            <td><code>string</code></td>
            <td>The middle of catch start expression</td>
        </tr>
        <tr>
            <td>CatchStartLink</td>
            <td><code>string</code></td>
            <td>Links the alias and the exceptionType arguments</td>
        </tr>
        <tr>
            <td>CatchStartRight</td>
            <td><code>string</code></td>
            <td>The end of catch start expression</td>
        </tr>
        <tr>
            <td>FinallyStartLeft</td>
            <td><code>string</code></td>
            <td>The beginning of finally start expression</td>
        </tr>
        <tr>
            <td>FinallyStartRight</td>
            <td><code>string</code></td>
            <td>The end of finally start expression</td>
        </tr>
        <tr>
            <td>BlockEnd</td>
            <td><code>string</code></td>
            <td>The end of try, catch, and finally blocks</td>
        </tr>
    </tbody>
</table>

### Langauge Values

#### Try Command

<table>
    <thead>
        <th>Language</th>
        <th>TryStartLeft</th>
        <th>TryStartRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"try"</code></td>
            <td><code>"\n{"</code></td>
            
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"try"</code></td>
            <td><code>"{"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"begin"</code></td>
            <td><code>"\n"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"try"</code></td>
            <td><code>":\n"</code></td>
            
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"try"</code></td>
            <td><code>"{"</code></td>
        </tr>
    </tbody>
</table>

#### Catch Command

<table>
    <thead>
        <th>Language</th>
        <th>CatchStartLeft</th>
        <th>CatchStartMiddle</th>
        <th>CatchStartLink</th>
        <th>CatchStartRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"catch"</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>")\n{"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"catch"</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>") {"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"rescue"</code></td>
            <td><code>""</code></td>
            <td><code>"=>"</code></td>
            <td><code>"\n"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"except"</code></td>
            <td><code>""</code></td>
            <td><code>"as"</code></td>
            <td><code>":\n"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"catch"</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>") {"</code></td>
        </tr>
    </tbody>
</table>

### Finally Command and BlockEnd

<table>
    <thead>
        <th>Language</th>
        <th>FinallyStartLeft</th>
        <th>FinallyStartRight</th>
        <th>BlockEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"finally"</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"\n}"</code></td>
            
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"finally"</code></td>
            <td><code>"{"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"ensure"</code></td>
            <td><code>"\n"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"finally"</code></td>
            <td><code>":\n"</code></td>
            <td><code>""</code></td>
            
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"finally"</code></td>
            <td><code>"{"</code></td>
            <td><code>"}"</code></td>
        </tr>
    </tbody>
</table>
