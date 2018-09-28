# Exceptions

All languages have some way of representing a breaking error state, or exception, that indicates control flow must be halted.
Exceptions may be created and thrown, also known as raised, and later caught, also known as rescued, by some calling code.
GLS refers to these operations as catching and throwing exceptions.

## Throwing

The built-in exception class for an output language is represented in GLS by the `exception` command, which receives a single string as input.
It can be thrown with the `throw` command.

```gls
throw : { exception } ("Oh no!")
```

In C#:

```csharp
throw new Exception("Oh no!");
```

In Python:

```python
raise Exception("Oh no!")
```

## Catching

All supported languages have some variant of the following three code blocks:

* Try: runs some code that might throw an error
* Catch: handles any error thrown by the try section
* Finally: runs regardless of whether an error was thrown

Each of these are considered their own distinct blocks with a `start` and `end` in GLS.
The `catch` section also takes in the name of a general exception.

```gls
try start
    throw : { exception } ("Oh no!")
try end
catch start : error
    print : ("Found an error.")
catch end
finally start
    comment line : ...
finally end
```

In C#:

```csharp
try
{
    throw new Exception("Oh no!");
}
catch (Exception error)
{
    Console.WriteLine("Found an error.");
}
finally
{
    // ...
}
```

In Python:

```python
try:
    raise Exception("Oh no!")
except Exception as error:
    print("Found an error.")
finally:
    # ...
```
