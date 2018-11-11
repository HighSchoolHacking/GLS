# Member Functions

Classes may declare member functions that each instance of the class may call.

Declaring a member function is done with `member function declare start`.
It takes in the function's privacy (as`public`,`protected`, or`private`), name in PascalCase, return type, and any number of (name, type) pairs of parameters.

```gls
class start : Announcer
    member variable declare : private greeting string

    member function declare start : public Greet void name string
        print : { concatenate : { member variable : private { this } greeting } ", " name "!" }
    member function declare end

    constructor start : public Announcer greeting string
        operation : { member variable : private { this } greeting } equals greeting
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

    def __init__(self, Announcer, string):
        self.__greeting = greeting
```
