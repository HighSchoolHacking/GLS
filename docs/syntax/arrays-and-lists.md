# Arrays and Lists

Although some output languages don't consider there to be a difference between arrays and lists, Budgie defines them as:

* **Array**: A fixed length data structure of a single templated type
* **List**: A variable length data structure of a single templated type

Budgie considers the two to be two different data structures and has mostly separate commands for each.

## Arrays

Because arrays are fixed-length, there are very few operations available on them.

Create new arrays with `array new`, which takes in the type of array and any number of initial items in the array.
For variables, declare the type of the array with `array type`, which takes in the type of the array.

Retrieve a single member of an array with `array get`, which takes in a name of a container and an integer index.

```budgie
array get : container 1
```

* In C#: `container[1]`
* In Python: `container[1]`

Set a single member of an array with `array set`, which takes in a name of an array, an integer index, and a new value.

```budgie
array set : container 1 "apple"
```

* In C#: `container[1] = "apple";`
* In Python: `container[1] = "apple"`

Get the length of an array with `array length`, which takes in a name of an array.

```budgie
variable : fruits { array type : string } { array new : string "apple" "banana" "cherry" }

print : { string format : ("There are {0} fruits.") { array length : fruits } int }
print : { string format : ("The first fruit is {0}.") { array get : fruits 0 } string }
```

In C#:

```csharp
string[] fruits = new string[] { "apple", "banana", "cherry" };

Console.WriteLine(string.Format("There are {0} fruits.", fruits.Length));
Console.WriteLine(string.Format("The first fruit is {0}.", fruits[0]));
```

In Python:

```python
fruits = ["apple", "banana", "cherry"]

print("There are {0} fruits.".format(len(fruits)))
print("The first fruit is {0}.".format(fruits[0]))
```

### Generic Arrays

Creating arrays of generic types with the `array new generic` and `array new generic sized` commands.
They're used the same as their non-generic counterparts.

```budgie
variable : items { array type : T } { array new generic : T one two three }
variable : storage { array type : T } { array new sized generic : T 10 }
```

In C#:

```csharp
T[] items = new T[] { one, two, three };
T[] storage = new T[10];
```

In Python:

```python
items = [one, two three]
storage = [None] * 10
```

## Lists

Budgie lists are much more flexible than arrays.
They can be dynamically resized, added onto one another, and sorted.

Retrieve a single member of a list with `list get`, which takes in a name of a container and an integer index.

```budgie
list get : container 1
```

* In C#: `container[1]`
* In Python: `container[1]`

Set a single member of a list with `list set`, which takes in a name of a list, an integer index, and a new value.

```budgie
list set : container 1 "apple"
```

* In C#: `container[1] = "apple";`
* In Python: `container[1] = "apple"`

### Creating Lists

Similar to arrays, create a new list with `list new`, declare a list type with `list type`, and get a list's length with `list length`.
Add a single item to a list with `list pop`, which takes in a name of a list and a new item, or add a full list to another list with `list add list`, which takes in the name of an existing list and a second list to add to the existing list.

```budgie
variable : fruits { list type : string } { list new : string "apple" "banana" "cherry" }

list push : fruits "dragonberry"
list add list : fruits { list new : string "elderberry" "fig" }

print : { string format : ("There are {0} fruits.") { list length : fruits } int }
print : { string format : ("The first fruit is {0}.") { list get : fruits 0 } string }
print : { string format : ("The last fruit is {0}.") { list get : fruits { operation : { list length : fruits } minus 1 } } string }
```

In C#:

```csharp
using System;

List<string> fruits = new List<string> { "apple", "banana", "cherry" };

fruits.Add("dragonberry");
fruits.AddRange(new List<string> { "elderberry", "fig" });

Console.WriteLine(string.Format("There are {0} fruits.", fruits.Count));
Console.WriteLine(string.Format("The first fruit is {0}.", fruits[0]));
Console.WriteLine(string.Format("The last fruit is {0}.", fruits[fruits.Count - 1]));
```

In Python:

```python
fruits = ["apple", "banana", "cherry"]

fruits.append("dragonberry")
fruits.extend(["elderberry", "fig"])

print("There are {0} fruits.".format(fruits.len()))
print("The first fruit is {0}.".format(fruits[0]))
print("The last fruit is {0}.".format(fruits[len(fruits) - 1]))
```
