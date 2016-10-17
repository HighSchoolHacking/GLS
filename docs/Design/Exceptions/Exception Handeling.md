# Exception Handling

This doc will cover both try/catch/finally logic.
Try blocks contain code that might throw exceptions.
Catch blocks detect these exceptions, and run the code contained if the exception is present.
Finally blocks always run.

## Commands

### `try start`

`try start`

Begins a try block.

### `try end`

`try end`

Ends a try block.

### `catch start`

`catch start : exceptionType *alias`

Starts a catch block, requires an exception type as an argument. Optional argument (*) is an alias for the exception.

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
    comment : Do stuff
try end
catch start : exceptionType foo
    comment : Sometimes do stuff
catch end
finally start
    comment : Always do stuff
finally end
```

### CSharp

```csharp
try
{
    // Do stuff
}
catch (exceptionType foo)
{
    // Sometimes do stuff
}
finally
{
    // Always do stuff
}
```

### Java

```java
try {
    // Do stuff
} catch (exceptionType foo) {
    // Sometimes do stuff
} finally {
    // Always do stuff
}
```

### Python

```python
try:
    ## Do stuff
except exceptionType as foo:
    ## Sometimes do stuff
finally:
    ## Always do stuff
```

### Ruby

```ruby
begin
    ## Do stuff
rescue exceptionType => foo
    ## Sometimes do stuff
ensure
    ## Always do stuff
```

### TypeScript

```typescript
try {
    // Do stuff
} catch (exceptionType foo) {
    // Sometimes do stuff
} finally {
    // Always do stuff
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

#### Table 1

<table>
    <thead>
        <th>Language</th>
        <th>TryStartLeft</th>
        <th>TryStartRight</th>
        <th>CatchStartLeft</th>
        <th>CatchStartMiddle</th>
        <th>CatchStartLink</th>
        <th>CatchStartRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"try"</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"catch"</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>")\n{"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"try"</code></td>
            <td><code>"{"</code></td>
            <td><code>"catch"</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>") {"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"begin"</code></td>
            <td><code>"\n"</code></td>
            <td><code>"rescue"</code></td>
            <td><code>""</code></td>
            <td><code>"=>"</code></td>
            <td><code>"\n"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"try"</code></td>
            <td><code>":\n"</code></td>
            <td><code>"except"</code></td>
            <td><code>""</code></td>
            <td><code>"as"</code></td>
            <td><code>":\n"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"try"</code></td>
            <td><code>"{"</code></td>
            <td><code>"catch"</code></td>
            <td><code>"("</code></td>
            <td><code>""</code></td>
            <td><code>") {"</code></td>
        </tr>
    </tbody>
</table>

#### Table 2

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
