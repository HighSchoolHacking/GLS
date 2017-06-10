# Native List Commands

## Feature Overview

All supported languages provide some amount of built-in support to interact with the contents of a list.


## Commands

### `list add list`

`list add list : firstList secondList `

The `list add list` command adds everything in the second list to the first list.

### `list pop`

`list pop : name`

The `list pop` command removes the last element of a list.

## Usage

```gls
list add list : aaa bbb
list pop : foo
```

### CSharp

```csharp
aaa.AddRange(bbb);
foo.RemoveAt(foo.Count - 1);
```

### Java

```java
aaa.addAll(bbb);
foo.remove(foo.size() - 1);
```

### Python

```python
aaa.extend(bbb)
foo.pop()
```

### Ruby

```ruby
aaa.concat(bbb)
foo.pop
```

### TypeScript

```typescript
aaa.concat(bbb);
foo.pop();
```

## Implementation

### Properties

These commands will be implemented as native calls.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Pop</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to remove the last element of a list.</td>
        </tr>
        <tr>
            <td>Add List</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to add a list to a second list.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Add List</th>
        <th>Pop</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"AddRange"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"RemoveAt"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["{0}.Count - 1"]</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Java</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"addAll"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"remove"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["{0}.size() - 1"]</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Python</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"extend"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"concat"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"concat"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
    </tbody>
</table>

