# File

The commands that are used to create importable program files.

## Commands

### `file start`

`file start : name`

Command that starts the file block. 
The first parameter is the name of the file.

### `file end`

`file end`

Command that ends the file block.

## Usage

```
file start : Program
comment line : ...
file end : Program
```

### CSharp

```csharp
using System;
using System.Collections.Generic;

namespace Program
{
    // ...
}
```

### Java

```java
package Program;

import java.util.*;

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
namespace Program {
    // ...
}
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
            <td>FileStartLeft</td>
            <td><code>string</code></td>
            <td>Starts the file start statement.</td>
        </tr>
        <tr>
            <td>FileStartRight</td>
            <td><code>string</code></td>
            <td>Ends the file start statement.</td>
        </tr>
        <tr>
            <td>FileEnd</td>
            <td><code>string</code></td>
            <td>The file end statement.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>FileStartLeft</th>
        <th>FileStartRight</th>
        <th>FileEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"using System;\nusing System.Collections.Generic;\n\nnamespace"</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"package"</code></td>
            <td><code>"\nimport java.util.*;\n"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"namespace "</code></td>
            <td><code>" {</code></td>
            <td><code>"}"</code></td>
        </tr>
    </tbody>
</table>
