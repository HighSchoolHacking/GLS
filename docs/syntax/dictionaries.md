# Dictionaries

The concept of a data structure with mapped keys to values changes drastically across output languages.
All support some form of creating a dictionary and getting or setting values in it.

Create a new dictionary with `dictionary new`, which takes in the key and value types of the dictionary.
Accessing members is done with `dictionary get` and setting is done with with `dictionary set`.

```budgie
variable declare : counts { dictionary type : string int } { dictionary new : string int }
dictionary set : counts "apple" 3

variable declare : apple string { dictionary get : counts "apple" }
```

In C#:

```csharp
Dictionary<string, int> counts = new Dictionary<string, int>();
counts["apple"] = 3;

string apple = counts["apple"];
```

In Python:

```python
counts = {}
counts["apple"] = 3

apple = counts["apple"]
```

Alternately, create a multi-line initialization with `dictionary new start`, which is otherwise identical, and `dictionary new end`.
Describe each pair of initial values inside with `dictionary pair`, which takes in the key type, value type, and a `,` if it isn't the last pair of initialization.

```budgie
variable start : counts { dictionary type : string int } { dictionary new start : string int }
    dictionary pair : "apple" 3 ,
    dictionary pair : "banana" 2
dictionary new end
```

In C#:

```csharp
Dictionary<string, int> counts = new Dictionary<string, int>
{
    { "apple", 3 },
    { "banana", 2 }
};
```

In Python:

```python
counts = {
    "apple": 3,
    "banana": 2
}
```
