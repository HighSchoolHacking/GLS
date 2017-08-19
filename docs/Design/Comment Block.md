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
