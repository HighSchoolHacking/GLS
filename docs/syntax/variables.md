# Variables

Budgie allows for creating variables with the `variable` command.
It requires the variable name, the type of the variable, and an optional default value.

> Untyped languages such as JavaScript will skip printing the variable type.
>
> Pythonic languages such as Python and Ruby will skip declaring variables without a default value.

```budgie
comment line : Simple declarations
variable declare : foo string
variable declare : bar number 7

comment line : Assignments
variable declare : qux string foo
variable declare : baz number bar

comment line : Interesting values
variable declare : quux number infinity
variable declare : corge boolean true
```

In C#:

```csharp
// Simple declarations
string foo;
double bar = 7;

// Assignments
string qux = foo;
double baz = bar;

// Interesting values
double quux = double.PositiveInfinity;
bool corge = true;
```

In Python:

```python
# Simple declarations
bar = 7

# Assignments
qux = foo
baz = bar

# Interesting values
quux = inf
corge = True
```

## Types

As you saw from the interesting values above, some types such as infinity or true/false have aliases per language.

Built-in types will always be lower-case in Budgie.
Uppercase types will always refer to user-defined classes.
