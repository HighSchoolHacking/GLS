# Exception Throwing

A manual exception throw calls the declared exception class, and is treated like a normally generated exception of the same type.

## Commands

### `throw exception`

`throw exception : ExceptionType message`

Throws a new exception of type ExceptionType.
The message parameter attaches a message to the thrown exception.

## Usage

```
throw exception : ExceptionType foo
```

### CSharp

```csharp
throw new ExceptionType("foo")
```

### Java

```java
throw new ExceptionType("foo")
```

### Python

```python
raise ExceptionType("foo")
```

### Ruby

```ruby
raise ExceptionType.new("foo")
```

### TypeScript

```typescript
throw new ExceptionType("foo")
```


## Errata

* Java requires that a function declare all errors it might throw. GLS also requires this.
