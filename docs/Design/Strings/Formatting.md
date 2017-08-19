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

## Errata

* This is different from string interpolation, where the inputs are provided inline to the string.
* JavaScript and TypeScript do not support standard format strings, and instead rely on string interpolation.
