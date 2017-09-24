# Math

Most simple math operations are doable with the `operation` command. It takes in an odd number of parameters, alternating between values \(which can be either direct numbers or variable names\) and operators. Operators are given as plain names with spaces between words. The supported operators are:

| GLS Syntax | Common Equivalent |
| :--- | :--- |
| and | && |
| decrease by | -= |
| divide | / |
| divide by | /= |
| equal to | = |
| equals | == |
| greater than | &gt; |
| greater than or equal to | &gt;= |
| increase by | += |
| less than | &lt; |
| less than or equal to | &lt;= |
| minus | - |
| mod | % |
| multiply by | \*= |
| not | ! |
| not equal to | != |
| or | \|\| |
| plus | + |
| times | \* |

> Recall that parenthesis are required for arguments with spaces: including operator aliases.

The `parenthesis` command is also commonly used with math. It takes a single argument and wraps it in `()` parenthesis.

```
operation : foo times 2
operation : foo (decrease by) bar times { parenthesis : { operation : bar minus 3 } }
variable : bar number { operation : foo (divide by) 3 plus 4 times foo }
```

In C\#:

```csharp
foo *= 2;
foo -= bar * (bar - 3);
float bar = foo /= 3 + 4 * foo;
```

In Python:

```python
foo *= 2
foo -= bar * (bar - 3)
bar = foo /= 3 + 4 * foo
```

### Number Types

Some languages recognize a difference between integers, doubles, floats, and other number types. Some do not. For feature parity between other languages, GLS recognizes only `int` and `float` as valid number types. `double`, `long`, `ushort`, and so on are not supported.

### Native Commands

All supported languages provide some amount of built-in math operations beyond the simple arithmetic operators. These are typically encapsulated in some kind of global `Math` object and/or system namespace that contains simple functions and constants.

GLS abstracts away the differences in these "native" commands. For example:

```
math max : foo bar
```

* In C\#: `Math.Max(foo, bar)`
* In Python: `max(foo, bar)`



