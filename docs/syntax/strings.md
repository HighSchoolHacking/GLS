# Strings

Strings in Budgie are denoted with _double_ apostrophes (`"`).
Do not use single apostrophes or back-ticks.

> Some languages, such as C#, use single apostrophes to denote single characters and not strings.

## Concatenation

The `concatenate` command appends two or more strings together.

```budgie
concatenate : "abc" def "ghi"
```

* In C#: `"abc" + def + "ghi"`
* In Python: `"abc" + def + "ghi"`

## Characters

Some languages, such as JavaScript and Ruby, do not recognize a difference between a one-length string, or `char`, and an arbitrary-length `string`.
Less high-level languages, such as C# and Java, consider them to be a `char`.

```budgie
variable declare : a char 'a'
```

* In C#: `char a = 'a';`
* In Python: `a = "a"`

### Indexing

Individual characters in a string may be indexed with the `string index` command.
It takes in a string and a character index int, and returns a `char`.

```budgie
variable declare : text string "abc"
variable declare : first char { string index : text 0 }
```

In C#:

```csharp
string text = "abc";
char first = text[0];
```

In Python:

```python
text = "abc"
first = text[0]
```

## Formatting

The `string format` command allows inserting primitives into a format string.
It takes in a single format string, then any number of input name & type pairs.
Format strings are string literals with any number of bracket-surrounded numbers inside, with the format `{#}`.

```budgie
variable declare : foo string "foo"
variable declare : bar int 7

string format : ("Foo: {0}") foo string
string format : ("Foo: {0}; Bar: {1}") foo string bar int
```

In C#:

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

Some languages, such as C# and Python above, use string formatting with numeric insertion points into the template string.
Some, such as JavaScript, boil down to concatenating them together.
As a result, it is not allowed to use the same `{#}` number multiple times in the format string.

## Searching

The `string index of` command can be used to determine whether a substring exists within a string.
It returns the index of the substring if found, or the equivalent of the `string index not found` command if not found.
It may also take in an optional third parameter as an integer position within the string to start searching at, if not `0`.

```budgie
variable declare : haystack string ("Hello, Budgie!")
variable declare : needle string "Budgie"
variable declare : firstIndexOf int { string index of : haystack needle }
variable declare : secondIndexOf int { string index of : haystack needle { operation : firstIndexOf plus { string length : needle } } }

print : { string format : ("Found a first result at: {0}.") firstIndexOf int }

if start : { operation : secondIndexOf (not equal to) { string index not found } }
    print : { string format : ("Found a second result at: {0}.") secondIndexOf int }
if end
```

In C#:

```csharp
using System;

string haystack = "Hello, Budgie!";
string needle = "Budgie";
int firstIndexOf = haystack.IndexOf(needle);
int secondIndexOf = haystack.IndexOf(needle, firstIndexOf + needle.Length);

Console.WriteLine(string.Format("Found a first result at: {0}.", firstIndexOf));

if (secondIndexOf != -1)
{
    Console.WriteLine(string.Format("Found a second result at: {0}.", secondIndexOf));
}
```

In Python:

```python
haystack = "Hello, Budgie!"
needle = "Budgie"
firstIndexOf = haystack.find(needle)
secondIndexOf = haystack.find(needle, firstIndexOf + len(needle))

print("Found a first result at: {0}.".format(firstIndexOf))

if secondIndexOf != -1:
    print("Found a second result at: {0}.".format(secondIndexOf))
```
