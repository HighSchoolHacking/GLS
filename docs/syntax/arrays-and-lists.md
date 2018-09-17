# Arrays and Lists

Although some output languages don't consider there to be a difference between arrays and lists, GLS defines them as:

* **Array**: A fixed length data structure of a single templated type
* **List**: A variable length data structure of a single templated type

GLS considers the two to be two different data structures and has mostly separate commands for each.

The only shared command between the two is `index`, which takes in a name of a container and an integer index.

```gls
index : container 1
```

* In C\#: `container[1]`
* In Python: `container[1]`

### Arrays

Because arrays are fixed-length, there are very few operations available on them.

Create new arrays with `array initialize`, which takes in the type of array and any number of initial items in the array. For variables, declare the type of the array with `array type`, which takes in the type of the array.

Get the length of an array with `array length`, which takes in a name of an array.

```gls
variable : fruits { array type : string } { array initialize : string "apple" "banana" "cherry" }

print : { string format : ("There are {0} fruits.") { array length : fruits } int }
print : { string format : ("The first fruit is {0}.") { index : fruits 0 } string }
```

In C\#:

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

### Lists

GLS lists are much more flexible than arrays. They can be dynamically resized, added onto one another, and sort _\(for primitive types\)_.

Similar to arrays, create a new list with `list initialize`, declare a list type with `list type`, and get a list's length with `list length`. Add a single item to a list with `list pop`, which takes in a name of a list and a new item, or add a full list to another list with `list add list`, which takes in the name of an existing list and a second list to add to the existing list.

```gls
variable : fruits { list type : string } { list initialize : string "apple" "banana" "cherry" }

list push : fruits "dragonberry"
list add list : fruits { list initialize : string "elderberry" "fig" }

print : { string format : ("There are {0} fruits.") { list length : fruits } int }
print : { string format : ("The first fruit is {0}.") { index : fruits 0 } string }
print : { string format : ("The last fruit is {0}.") { index : fruits { operation : { list length : fruits } minus 1 } } string }
```

In C\#:

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



