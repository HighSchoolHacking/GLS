# String Conversions

You can attempt to convert from raw strings to doubles or ints.
Different languages expose vastly different behaviors around cases where the numbers cannot be converted,
so blocks of code that rely on converted numbers are structured similarly to `if start` statements.

Use `if string to double start` and `if string to int start` to convert string(s) to double(s) or int(s), respectively.
Each takes in any number of repeating parameters: a string to convert and the numeric type to try to store it in.
Code before the next respective `if string to double end` or `if string to int end` will run only if the conversion was successful.

```budgie
if string to double start : "3.5" asDouble
    comment line : ...
if string to double end

variable : secondIntRaw string "14"
if string to int start : "7" firstInt secondIntRaw secondInt
    comment line : ...
if string to int end
```

C#:

```csharp
if (double.TryParse("3.5", out var asDouble))
{
    // ...
}

string secondIntRaw = "14";
if (int.TryParse("7", out var firstInt) && int.TryParse(secondIntRaw, out var secondInt))
{
    // ...
}
```

Python:

```python
asDouble = None

try:
    asDouble = float("3.5")
except:
    pass

if asDouble is not None:
    # ...

secondIntRaw = "14"
firstInt = None
secondInt = None

try:
    firstInt = int("7")
    secondInt = int(secondIntRaw)
except:
    pass

if firstInt is not None and secondInt is not None:
    # ...
```
