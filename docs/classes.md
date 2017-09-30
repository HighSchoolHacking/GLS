# Classes

The concept of creating instances of classes with access to member variables and methods is common across languages.

Create a class with `class start`. It takes in, at the very least, the name of the class \(in PascalCase as with functions\). You can then also provide `extends` and a name of a class to indicate a single class to inherit from.

End it with `class end`.

```gls
class start : Word
    comment line : ...
class end

class start : Noun extends Word
    comment line : ...
class end
```

In C\#:

```csharp
class Word
{
    // ...
}

class Noun : Word
{
    // ...
}
```

In Python:

```python
class Word:
    # ...

class Noun(Word):
    # ...
```

### Constructors

Constructors, or initialization methods, are called when a new instance of a class is created. It's declared with `constructor start`, which takes the publicity of the constructor, the name of the class, and any number of \(name, type\) arguments, and `constructor end`.

Inherited classes may use `super constructor` to call to their parent class' constructor.

```gls
class start : Noun extends Word
    constructor start : public Noun name string
        super constructor
        print : { concatenate : "Creating" name }
    constructor end
class end
```

In C\#:

```csharp
class Noun : Word
{
    Noun(string name)
    {
        base();
        Console.WriteLine("Creating" + name);
    }
}
```

In Python:

```python
class Noun(Word):
    def __init__(self, name):
        super().__init__()
        print("Creating" + name)
```

### This

You can pass a reference to the current class using the `this` command.

```gls
this
```

* In C\#: `this`
* In Python: `self`

### New

Create new instances of classes with the `new` command. It takes in the name of the class and any number of arguments to pass to the parameter.

```gls
variable : fruit Noun { new : Noun "apple" }
```

* In C\#: `Noun fruit = new Noun("apple");`
* In Python: `fruit = Noun("apple")`



