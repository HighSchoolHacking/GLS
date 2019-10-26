# Sorting

Budgie supports four forms of sorting lists, all in-place.

## As Numbers

For lists of type `int` or `double`, or a generic guaranteed to only ever either of those numeric types, you can sort the list with `list sort numbers`.
It takes in the name of the list and sorts it with numeric comparisons.

JavaScript runtimes default to sorting values as strings, so this will pass in a lambda to compare them as numbers as needed.

```budgie
variable : numbers { list type : int } { list new : int 20 5 15 10 }

comment line : 5, 10, 15, 20
list sort numbers : numbers
```

In C#:

```csharp
List<int> numbers = new List<int> { 5, 15, 10 };

// 5, 10, 15, 20
numbers.Sort();
```

In Python:

```python
numbers = [20, 5, 15, 10]

# 5, 10, 15, 20
numbers.sort()
```

## As Strings

For lists of type `string`, you can sort the list with `list sort strings`.
It takes in the name of the list and sorts it with string comparisons.

```budgie
variable : fruits { list type : string } { list new : string "date", "apple" "cherry", "banana" }

comment line : "apple", "banana", "cherry", "date"
```

In C#:

```csharp
List<string> fruits = new List<string> { "date", "apple", "cherry", "banana" };

// "apple", "banana", "cherry", "date"
fruits.Sort();
```

In Python:

```python
fruits = "date", "apple", "cherry", "banana"

# "apple", "banana", "cherry", "date"
fruits.sort()
```

## By Member Numbers

Lists of complex objects, namely class or interface instances, can be sorted by a single keyed member of those objects.
`list sort member numbers` takes in the name of a list, the privacy type of members, a name for instances inside a comparison lambda, and the PascalCase key to look up under the instances.

Members will be compared using the built-in `<` operator.

```budgie
class start : Size
    member variable declare : public Count int

    constructor start : public Size count int
        operation : { member variable : public { this } Count } equals count
    constructor end
class end

comment line : ...

variable : sizes { list type : Size } { list new : Size { new : Size 3 } { new : Size 1 } { new : Size 2 } }

comment line : 1, 2, 3
list sort member numbers : sizes public size Count
```

In C#:

```csharp
class Size
{
    public int Count;

    public Size(int count)
    {
        this.Count = count;
    }
}

// ...

List<Sizes> sizes = new List<Size> { new Size(3), new Size(1), new Size(2) };

// 1, 2, 3
sizes.Sort((sizeA, sizeB) => sizeA.Name < sizeB.Name ? 1 : -1);
```

In Python:

```python
class Size:
    def __init__(self, count):
        self.count = count

# ...

sizes = [Size(3), Size(1), Size(2)]

# 1, 2, 3
sizes.sort(key = lambda size: size.count)
```

## By Member Strings

`list sort member strings` takes in the name of a list, the privacy type of members, a name for instances inside a comparison lambda, and the PascalCase key to look up under the instances.
It's equivalent to `list sort member numbers` but compares members using built-in string comparisons.

```budgie
class start : Fruit
    member variable declare : public Name string

    constructor start : public Fruit name string
        operation : { member variable : public { this } Name } equals name
    constructor end
class end

comment line : ...

variable : fruits { list type : Fruit } { list new : Fruit { new : Person "banana" } { new : Person "cherry" } { new : Person "apple" } }

comment line : "apple", "banana", "cherry"
list sort member strings : fruits public fruit Name
```

In C#:

```csharp
class Fruit
{
    public string Name;

    public Fruit(string name)
    {
        this.Name = name;
    }
}

// ...

List<Fruit> fruits = new List<Fruit> { new Fruit("banana"), new Fruit("cherry"), new Fruit("apple") };

// "apple", "banana", "cherry"
fruits.Sort((fruitA, fruitB) => fruitB.Name.CompareTo(fruitA.Name));
```

In Python:

```python
class Fruit:
    def __init__(self, name):
        self.name = name

# ...

fruits = [Fruit("banana"), Fruit("cherry"), Fruit("apple")]

# "apple", "banana", "cherry"
fruits.sort(key = lambda fruit: fruit.name)
```
