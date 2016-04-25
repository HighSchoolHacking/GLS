# Enum Declarations

## Feature Overview

An enumeration, or enum for short, is a static listing of named values.
Enums are a quick and efficient method of storing a limited range of possibilities as integers.


## Commands

### `enum end`

`enum end`

The `enum end` command ends declaring an enum type.

### `enum start`

`enum start` `:` `name`

The `enum start` command starts declaring an enum type.

### `enum value`

`enum value` `:` `name`*`[, value]`*

The `enum value` command declares a value of an enum inside its declaration.
If provided, the value must be an integer.


## Usage

```
enum start : Direction
enum value : Unknown 0
enum value : Horizontal
enum value : Vertical
enum end
```

### CSharp

```
enum Direction {
    Unknown = 0;
    Horizontal;
    Vertical;
}
```

### Java

```
enum Direction {
    Unknown = 0;
    Horizontal;
    Vertical;
}
```

### Python

```
enum Direction {
    Unknown = 0;
    Horizontal;
    Vertical;
}
```

### Ruby

```
enum Direction {
    Unknown = 0;
    Horizontal;
    Vertical;
}
```

### TypeScript

```
enum Direction {
    Unknown = 0;
    Horizontal;
    Vertical;
}
```

## Implementation

An enum declaration consists of a starting line, any number of values, and an endling line.

The starting line consists of `EnumDeclareStartLeft`, the provided name, then `EnumDeclareStartRight`.

Each value consists of `EnumDeclareValueLeft`, the provided name, then `EnumDeclareValueRight`.
If a value is provided, `EnumDeclareValueMiddle` and the value are added between the provided name and `EnumDeclareValueRight`.

The ending line consists solely of `EnumDeclareEnd`.

### Language Values

<table>
    <thead>
        <th></th>
        <th>EnumDeclareStartLeft</th>
        <th>EnumDeclareStartRight</th>
        <th>EnumDeclareValueLeft</th>
        <th>EnumDeclareValueMiddle</th>
        <th>EnumDeclareValueRight</th>
        <th>EnumDeclareEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`"enum "`</td>
            <td>`"\n{"`</td>
            <td>`""`</td>
            <td>`" = "`</td>
            <td>`";"`</td>
            <td>`"}"`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`"enum "`</td>
            <td>`" {"`</td>
            <td>`""`</td>
            <td>`" = "`</td>
            <td>`";"`</td>
            <td>`"}"`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`"enum "`</td>
            <td>`" {"`</td>
            <td>`""`</td>
            <td>`" = "`</td>
            <td>`";"`</td>
            <td>`"}"`</td>
        </tr>
    <tbody>
</table>
