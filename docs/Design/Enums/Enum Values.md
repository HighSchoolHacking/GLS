# Enum Values

Enums values may be retrieved from their container enums by name.


## Commands

### `enum`

`enum` `:` `enumName` `memberName`

The `enum` command retrieves an enum member value by name.


## Usage

```
enum : Direction Horizontal
```

### CSharp

```csharp
Direction.Horizontal
```

### Java

```java
Direction.Horizontal
```

### Python

```python
Direction.Horizontal
```

### Ruby

```ruby
Direction::Horizontal
```

### TypeScript

```typescript
Direction.Horizontal
```


## Implementation

Retrieving an enum value consists of `ValueLeft`, the name of the container enum, `ValueMiddle`, the name of the member, and `ValueRight`. 


## Errata

* Some languages support parsing enums to and from strings. This is currently out of scope.
* Some languages support setting enums to strings as well as numbers. This is currently out of scope.
