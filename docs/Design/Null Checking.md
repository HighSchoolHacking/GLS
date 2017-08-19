# Null Checking

A "null" variable is a variable without a stored value. 
Commonly, uninitialized variables have a null value.
These commands check whether a passed variable has a null value. 

## Commands

### `is null`

`is null : variable`

Creates a test that will return whether variable is null.

### `is not null`

`is not null : variable`

Creates a test that will return whether the variable is not null.

## Usage

```
is null : foo
```

```
is not null : bar
```

### CSharp

```csharp
foo == null
```

```csharp
bar != null
```

### Java

```java
foo == null
```

```java
bar != null
```

### Python

```python
foo is None
```

```python
bar is not None
```

### Ruby

```ruby
foo.nil?
```

```ruby
!bar.nil?
```

### TypeScript

```typescript
typeof foo === "undefined"
```

```typescript
typeof bar !== "undefined"
```

## Errata

* JavaScript and TypeScript have both a `null` and an `undefined` type. We check against `"undefined"`, as this is the prefered method.
