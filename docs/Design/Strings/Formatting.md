# String Formatting

## Feature Overview

This feature is for concatenating multiple values into a single string using a format string followed by an ordered list of format inputs.


## Commands

### `string format`

`string format` `:` `format`*`[ inputName, inputType, ...]`*

Formatting a string will be done with the `string format` command.
It takes in a single format string, then any number of input name & type pairs.

Format strings are string literals with any number of bracket-surrounded numbers inside, with the format `{#}`:


## Usage

```
variable : foo string "foo"
variable : bar int 7

string format : "..."
string format : ("Foo: {0}") foo
string format : ("Foo: {0}; Bar: {1}") foo bar
```

### CSharp

```csharp
string foo = "foo";
int bar = 7;

string.Format("...")
string.Format("Foo: {0}", foo)
string.Format("Foo: {0}; Bar: {1}", foo, bar)
```

### Java

```java
string foo = "foo";
int bar = 7;

String.format("...")
String.format("Foo: %1$s", foo, bar)
String.format("Foo: %1$s; Bar: %2$d", foo, bar)
```

### Python

```python
foo = "foo"
bar = 7

"..."
"Foo: {0}".format(foo)
"Foo: {0}; Bar: {1}".format(foo, bar)
```

### Ruby

```ruby
foo = "foo"
bar = 7

"..."
"Foo: %s" % [foo]
"Foo: %s; Bar: %d" % [foo, bar]
```

### TypeScript

```typescript
let foo: string = "foo";
let bar: number = 7;

`...`
`Foo: ${foo}`
`Foo: ${foo}; Bar: ${bar}`
```

### Javascript

```javascript
let foo = "foo";
let bar = 7;

`...`
`Foo: ${foo}`
`Foo: ${foo}; Bar: ${bar}`
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
            <td>FormatLeft</td>
            <td>string</td>
            <td>Start of a format string.</td>
        </tr>
        <tr>
            <td>FormatMiddle</td>
            <td>string</td>
            <td>Middle of a format string (between the template and inputs).</td>
        </tr>
        <tr>
            <td>FormatAbbreviated</td>
            <td>string</td>
            <td>Abbreviated middle of a format string if no inputs are provided.</td>
        </tr>
        <tr>
            <td>FormatRight</td>
            <td>string</td>
            <td>End of a format string.</td>
        </tr>
        <tr>
            <td>FormatInputLeft</td>
            <td>string</td>
            <td>Start of a format string input.</td>
        </tr>
        <tr>
            <td>FormatInputRight</td>
            <td>string</td>
            <td>End of a format string input.</td>
        </tr>
        <tr>
            <td>IncludeTypes</td>
            <td>boolean</td>
            <td>Whether to include C-style type descriptors in format strings inputs.</td>
        </tr>
        <tr>
            <td>TypeCodes</td>
            <td>dictionary<string, string></td>
            <td>Type names matched to their C-style type descriptors, if `IncludeTypes` is true.</td>
        </tr>
        <tr>
            <td>UseInterpolation</td>
            <td>boolean</td>
            <td>Whether to use string interpolation instead of formatting.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>FormatLeft</th>
        <th>FormatMiddle</th>
        <th>FormatAbbreviated</th>
        <th>FormatRight</th>
        <th>FormatInputLeft</th>
        <th>FormatInputRight</th>
        <th>IncludeTypes</th>
        <th>UseInterpolation</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`"string.Format(\""`</td>
            <td>`"\", "`</td>
            <td>`"\""`</td>
            <td>`")"`</td>
            <td>`"{"`</td>
            <td>`"}"`</td>
            <td>`false`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`"String.format(\""`</td>
            <td>`"\", "`</td>
            <td>`"\""`</td>
            <td>`")"`</td>
            <td>`"%"`</td>
            <td>`""`</td>
            <td>`true`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`"\""`</td>
            <td>`"\".format("`</td>
            <td>`"\".format("`</td>
            <td>`")"`</td>
            <td>`"{"`</td>
            <td>`"}"`</td>
            <td>`true`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`"\""`</td>
            <td>`"\" % ["`</td>
            <td>`"\" % ["`</td>
            <td>`"]"`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`false`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"`"</code></td>
            <td></td>
            <td></td>
            <td><code>"`"</code></td>
            <td>`"${"`</td>
            <td>`"}"`</td>
            <td>`false`</td>
            <td>`true`</td>
        </tr>
        <tr>
            <th>Javascript</th>
            <td><code>"`"</code></td>
            <td></td>
            <td></td>
            <td><code>"`"</code></td>
            <td>`"${"`</td>
            <td>`"}"`</td>
            <td>`false`</td>
            <td>`true`</td>
        </tr>
    </tbody>
</table>

*`TypeCodes` values ommitted for brevity.*

### Errata

* This is different from string interpolation, where the inputs are provided inline to the string.
* JavaScript and TypeScript do not support standard format strings, and instead rely on string interpolation.