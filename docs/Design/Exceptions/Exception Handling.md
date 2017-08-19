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
