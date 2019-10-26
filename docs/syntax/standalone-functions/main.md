# Main

All languages provide some way to execute code immediately.

Scripting languages such as Python and Ruby will execute all code in order immediately,
whereas class-based languages such as C# and Java require a class wrapping a static method akin to C/C++'s "main" function.

Budgie resolves the differences by declaring an area as a "main context" with `main context start` and `main context end`.
A main function may be declared within that context with `main start` and `main end`.

```budgie
main context start
    main start
        print : ("Hello world!")
    main end
main context end
```

In C#:

```csharp
using System;

class Program
{
    public static void Main()
    {
        Console.WriteLine("Hello world!");
    }
}
```

In Python:

```python
if __name__ == "__main__":
    print("Hello world!")
```

## Functions

Main contexts, other than the way they're declared, are functionally identically to standalone function groups.
That means you can still declare standalone functions within them.

```budgie
main context start
    standalone function declare start : private SayHello void name string
        print : { concatenate : ("Hello, ") name "!" }
    standalone function declare end

    main start
        standalone function : private { main group } SayHello "Budgie"
    main end
main context end
```

In C#:

```csharp
using System;

class Program
{
    private void SayHello(string name)
    {
        Console.WriteLine("Hello, " + name + "!");
    }

    public static void Main()
    {
        SayHello("Budgie");
    }
}
```

In Python:

```python
def say_hello(name):
    print("Hello, " + name + "!")

if __name__ == "__main__":
    say_hello("Budgie")
```

> Function names must be given in PascalCase so that Budgie can transform them into the appropriate case for the output language.
> JavaScript, for example, prefers camelCase, while Python prefers snake\_case.
