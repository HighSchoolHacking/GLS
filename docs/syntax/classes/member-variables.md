# Member Variables

Classes may define member variables that each instance of that class contains.
Class instances may retrieve those variables.

Declaring a member variable is done with `member variable declare`.
It takes in the variable's privacy \(as `public`, `protected`, or `private`\), name in camelCase, and type.

Member variables can then be accessed with `member variable`, which takes in the privacy of the member variable, the instance to retrieve the member from, and the name of the member variable.

> Privacy is needed for accessing variables because some languages, such as Python, have different naming conventions per member variable privacy.

```gls
class start : Person
    member variable declare : private name string
    member variable declare : private age double

    constructor start : public Person name string age double
        operation : { member variable : private { this } name } equals name
        operation : { member variable : private { this } age } equals age
    constructor end
class end
```

In C#:

```csharp
class Person
{
    private string name;
    private double age;

    Person(string name, double age)
    {
        this.name = name;
        this.age = age;
    }
}
```

In Python:

```python
class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age
```
