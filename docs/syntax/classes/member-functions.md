# Member Functions

Classes may declare member functions that each instance of the class may call.

Declaring a member function is done with `member function declare start`.
It takes in the function's privacy (as  `public`,`protected`, or`private`), name in PascalCase, return type, and any number of (name, type) pairs of parameters.

```budgie
class start : Announcer
    member variable declare : private Greeting string

    member function declare start : public Greet void name string
        print : { concatenate : { member variable : private { this } Greeting } (", ") name "!" }
    member function declare end

    constructor start : public Announcer greeting string
        operation : { member variable : private { this } Greeting } equals greeting
    constructor end
class end
```

In C#:

```csharp
using System;

class Announcer
{
    private string greeting;

    public void Greet(string name)
    {
        Console.WriteLine(this.greeting + ", " + name + "!");
    }

    Announcer(string greeting)
    {
        this.greeting = greeting;
    }
}
```

In Python:

```python
class Announcer:
    def greet(self, name):
        print(self.__greeting + ", + " + name + "!")

    def __init__(self, string):
        self.__greeting = greeting
```

## Calling

Call member functions with the `member function` command.
It takes in the same function privacy, , caller's name, and any number of parameters.

```budgie
member function : public announcer Greet ("Sample")
```

* In C#: `announcer.Greet("Sample");`
* In Python: `announcer.greet("sample")`
