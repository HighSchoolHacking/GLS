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
            <td>FileEndLines</td>
            <td><code>string</code></td>
            <td>Lines at the end of every file.</td>
        </tr>
        <tr>
            <td>FileIndentation</td>
            <td><code>number</code></td>
            <td>How indented each file's contents should be.</td>
        </tr>
        <tr>
            <td>FileStartCase</td>
            <td><code>string</code></td>
            <td>Casing for file name and paths in file start lines.</td>
        </tr>
        <tr>
            <td>FileStartLines</td>
            <td><code>string</code></td>
            <td>Lines at the start of every file. <code>"{0}"</code> is replaced with the file name; <code>"{1}"</code> with the file path.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>FileEndLines</th>
        <th>FileIndentation</th>
        <th>FileStartCase</th>
        <th>FileStartLines</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"}"</code></td>
            <td><code>1</code></td>
            <td><code>PackageUpperCase</code></td>
            <td><code>namespace {1}\n{</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>""</code></td>
            <td><code>0</code></td>
            <td><code>PackageLowerCase</code></td>
            <td><code>package {1};\n</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>0</code></td>
            <td><code>FileSystemLowerCase</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>0</code></td>
            <td><code>FileSystemLowerCase</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>""</code></td>
            <td><code>0</code></td>
            <td><code>FileSystemLowerCase</code></td>
            <td><code>""</code></td>
        </tr>
    </tbody>
</table>
