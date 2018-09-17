# Main

All languages provide some way to execute code immediately.

Scripting languages such as Python and Ruby will execute all code in order immediately, whereas class-based languages such as C\# and Java require a class wrapping a static method akin to C/C++'s "main" function.

GLS resolves the differences by declaring an area as a "main context".
A main function may be declared within that context.

```gls
main context start
    main start
        print : ("Hello world!")
    main end
main context end
```

In C\#:

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
Use the `main group` command to refer to the group name.

```gls
main context start
    standalone function declare start : private { main group } SayHello void name string
        print : { concatenate : ("Hello, ") name "!" }
    standalone function declare end

    main start
        standalone function : private { main group } SayHello "GLS"
    main end
main context end
```

In C\#:

```csharp
using System;

class Program
{
    void SayHello(string name)
    {
        Console.WriteLine("Hello, " + name + "!");
    }

    public static void Main()
    {
        SayHello("GLS");
    }
}
```

In Python:

```python
def say_hello(name):
    print("Hello, " + name + "!")

if __name__ == "__main__":
    say_hello("GLS")
```

> Function names must be given in PascalCase so that GLS can transform them into the appropriate case for the output language. JavaScript, for example, prefers camelCase, while Python prefers snake\_case.



