# Enum Declarations

An enumeration, or enum for short, is a static listing of named values.
Enums are a quick and efficient method of storing a limited range of possibilities as integers.


## Commands

### `enum end`

`enum end`

Ends declaring an enum type.

### `enum start`

`enum start` `:` `name`

Starts declaring an enum type.

### `enum member`

`enum member` `:` `name value`*`[, ","]`*

Declares a value of an enum inside its declaration. The value must be a numeric.

A comma may end the line to indicate this is not the last enum member in its declaration. 


## Usage

```
enum start : Direction
enum member : Unknown 0 ,
enum member : Horizontal 1 ,
enum member : Vertical 2
enum end
```

### CSharp

```
enum Direction {
    Unknown = 0,
    Horizontal = 1,
    Vertical = 2
}
```

### Java

```
enum Direction {
    Unknown (0),
    Horizontal (1),
    Vertical (2)
}
```

### Python

```
from enum import Enum

class Direction(Enum) {
    Unknown = 0
    Horizontal = 1
    Vertical = 2
}
```

### Ruby

```
class Direction {
    Unknown = 0
    Horizontal = 1
    Vertical = 2
}
```

### TypeScript

```
enum Direction {
    Unknown = 0,
    Horizontal = 1,
    Vertical = 2
}
```

## Implementation

An enum declaration consists of a starting line, any number of values, and an endling line.

The starting line consists of `DeclareStartLeft`, the provided name, then `DeclareStartRight`.

Each value line starts with `DeclareLeft` and the provided name.
If a value is provided, `DeclareValueLeft`, the value, and `DeclareValueRight` are added.
Value lines with a comma appended end in `DeclareCommaRight`; value lines without end in `DeclareLastRight`.

The ending line consists solely of `DeclareEnd`.

### Language Values

<table>
    <thead>
        <th></th>
        <th>DeclareStartLeft</th>
        <th>DeclareStartRight</th>
        <th>DeclareLeft</th>
        <th>DeclareValueLeft</th>
        <th>DeclareValueRight</th>
        <th>DeclareCommaRight</th>
        <th>DeclareLastRight</th>
        <th>DeclareEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`"enum "`</td>
            <td>`"\n{"`</td>
            <td>`""`</td>
            <td>`" = "`</td>
            <td>`""`</td>
            <td>`","`</td>
            <td>`";"`</td>
            <td>`"}"`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`"enum "`</td>
            <td>`" {"`</td>
            <td>`""`</td>
            <td>`" ("`</td>
            <td>`")"`</td>
            <td>`","`</td>
            <td>`";"`</td>
            <td>`"}"`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`"class "`</td>
            <td>`"(Enum):"`</td>
            <td>`""`</td>
            <td>`" = "`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`"class "`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`"="`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`"enum "`</td>
            <td>`" {"`</td>
            <td>`""`</td>
            <td>`" = "`</td>
            <td>`""`</td>
            <td>`","`</td>
            <td>`""`</td>
            <td>`"}"`</td>
        </tr>
    <tbody>
</table>

### Errata

* Ruby does not appear to directly support enums. Thus, values must be provided for all enum members.
