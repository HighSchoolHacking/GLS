# For Each

A loop that iterates over all elements of an array. 
This loop does not use an explicit index.

## Commands

### `for each start`

`for each start : array type iterator`

Starts a for each block. 
The first parameter is the array to be iterated over.
The second command is the type of the array. 
The third parameter is the iterator variable.

### `for each end`

Ends a for each block.

## Usage

```
for each start : basket string fruit
for each end
```

### CSharp

```csharp
foreach (string fruit in basket) {
}
```

### Java

```java
for (string fruit : basket) 
{
}
```

### Python

```python
for fruit in basket:

```

### Ruby

```ruby
for fruit in basket
end
```

### TypeScript

```typescript
for (let fruit of basket) {
}
```
