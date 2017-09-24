# Strings

Strings in GLS are denoted with _double_ apostrophes \(`"`\). Do not use single apostrophes or back-ticks.

> Some languages, such as C\#, use single apostrophes to denote single characters and not strings.

### Concatenation

The `concatenate` command appends two or more strings together.

```gls
concatenate : "abc" def "ghi"
```

* In C\#: `"abc" + def + "ghi"`
* In Python: `"abc" + def + "ghi"`

### Formatting

The `string format` command allows inserting primitives into a format string. It takes in a single format string, then any number of input name & type pairs. Format strings are string literals with any number of bracket-surrounded numbers inside, with the format `{#}`.

```gls
variable : foo string "foo"
variable : bar int 7

string format : ("Foo: {0}") foo
string format : ("Foo: {0}; Bar: {1}") foo bar
```

In C\#:

```csharp
string foo = "foo";
int bar = 7;

string.Format("Foo: {0}", "Foo: {0}");
string.Format("Foo: {0}; Bar: {1}", foo, bar);
```

In Python:

```python
foo = "foo"
bar = 7

"Foo: {0}".format(foo)
"Foo: {0}; Bar: {1}".format(foo, bar)
```

Some languages, such as C\# and Python above, use string formatting with numeric insertion points into the template string. Some, such as JavaScript, boil down to concatenating them together. As a result, it is not allowed to use the same `{#}` number multiple times in the format string.

