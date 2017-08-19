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
