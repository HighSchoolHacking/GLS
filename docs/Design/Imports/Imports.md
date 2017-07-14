# Imports

Including items from other files or libraries/packages/modules is done with importing.

Import commands are the only ones in GLS that change based on other commands in the file.
Intricacies in file path relativity necessesitate import commands knowing their file's relative path.

Supported languages generally have one or two of the following forms of inputs:

1. Importing specific items within a package
2. Importing an entire package

The first is preferred for being more explicit, and will be used in languages that support it.
The second is used as a fallback when the first is unavailable or inconvenient. 


## Commands

### `import`

`import` `:` `[packagePath, ...]` `use` `[item, ...]`

The `import` command imports items from a package path.
It takes in two lists of parameters, separated by a `"use"` literal.

The first list is the absolute path to a package to import in `snake-case`.
Each word in the list is a directory name, and will be combined in the language's style for sub-directories or sub-modules.

The second list is the items to import from the package.

## Usage

```
import : package section ItemOne ItemTwo
```

### CSharp

```csharp
using Package.Section;
```

### Java

```java
import package.section.ItemOne;
import package.section.ItemTwo;
```

### Python

```python
from "package/section" import ItemOne, ItemTwo
```

### Ruby

```ruby
require "package/section"
```

### TypeScript

```typescript
import { ItemOne, ItemTwo } from "package/section";
```


## Implementation

Each import line starts with `ImportLeft` and ends with `ImportRight`.

Languages that specify individual items will add after `ImportLeft` either put the package name, `ImportMiddle`, and items, or the reverse order.

Some languages allow one item per package import line, so multiple items from one package must be on their own line.
Others allow items to be separated by `", "`.


### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>ImportCase</td>
            <td><code>FileSystem</code> | <code>PackageUpperCase</code> | <code>PackageLowerCase</code></td>
            <td>Casing modifier for package names.</td>
        </tr>
        <tr>
            <td>ImportExplicit</td>
            <td>boolean</td>
            <td>Whether individual items should be named.</td>
        </tr>
        <tr>
            <td>ImportExplicitLines</td>
            <td>boolean</td>
            <td>Whether items should be imported on separate lines, rather than as a comma-separated list.</td>
        </tr>
        <tr>
            <td>ImportItemsBeforePackage</td>
            <td>boolean</td>
            <td>Whether items should come before package names.</td>
        </tr>
        <tr>
            <td>ImportLeft</td>
            <td>string</td>
            <td>Start of an import line.</td>
        </tr>
        <tr>
            <td>ImportMiddle</td>
            <td>string</td>
            <td>Middle of an import line, between items and package.</td>
        </tr>
        <tr>
            <td>ImportRight</td>
            <td>string</td>
            <td>End of an import line.</td>
        </tr>
    </tbody>
</table>

### Language values

<table>
    <thead>
        <td>Language</td>
        <td>ImportCase</td>
        <td>ImportExplicit</td>
        <td>ImportExplicitLines</td>
        <td>ImportItemsBeforePackage</td>
        <td>ImportLeft</td>
        <td>ImportMiddle</td>
        <td>ImportRight</td>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>PackageUpperCase</code></td>
            <td><code>false</code></td>
            <td></td>
            <td></td>
            <td><code>"using "</code></td>
            <td></td>
            <td><code>";"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>PackageLowerCase</code></td>
            <td><code>true</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>"import "</code></td>
            <td><code>"."</code></td>
            <td><code>"*;"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>FileSystem</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
            <td><code>"from \""</code></td>
            <td><code>"\" import *"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>FileSystem</code></td>
            <td><code>false</code></td>
            <td></td>
            <td></td>
            <td><code>"require \""</code></td>
            <td></td>
            <td><code>"\""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>FileSystem</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>true</code></td>
            <td><code>"import { "</code></td>
            <td><code>" } from \""</code></td>
            <td><code>"\";"</code></td>
        </tr>
    </tbody>
</table>
