# File

The commands that are used to create importable program files.
Each GLS file has a single name with any number of folder names as its directory path.

## Commands

### `file start`

`file start : `*`[...directories, ]`*`name`

Starts a source file.
Any number of directories may be passed to indicate a folder path of the file relative to the project root.
The last parameter, which is required, is the name of the file in PascalCase.

### `file end`

`file end`

Ends a file.


## Usage

```
file start : Program File
comment line : ...
file end
```

### CSharp

```csharp
namespace Program
{
    // ...
}
```

### Java

```java
package program;

// ...
```

### Python

```python
# ...
```

### Ruby

```ruby
# ...
```

### TypeScript

```typescript
// ...
```
