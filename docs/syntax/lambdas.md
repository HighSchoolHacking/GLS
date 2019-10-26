# Lambdas

Lambdas, or anonymous functions, are small functions created inside of another function.
They have access to variables inside and parameters passed to that function.
Budgie allows one-line lambdas to be passed in place of variables to other functions.

## Lambda Types

To accept a lambda as a parameter, use the `lambda type inline` command to declare its type.
It takes in the lambda's return type and zero to two (parameterName, parameterType) pairs.

You can then use the `lambda` command to call that lambda, which takes in the name of the lambda and any parameters to pass to it.

```budgie
standalone function declare start : private RunOnInts void format { lambda type inline : string i int }
    for numbers start : i int 0 10
        print : { lambda : format i }
    for numbers end
standalone function declare end
```

C#:

```csharp
private void RunOnInts(Func<int, void> format)
{
    for (int i = 0; i < 10; i += 1)
    {
        Console.WriteLine(format(i));
    }
}
```

Python:

```python
def run_on_ints(format):
    for i in range(0, 10):
        print(format(i))
```

## Lambda Declarations

New lambdas can be declared as parameters to called functions or other lambdas.
Declare them with `lambda declare`, which takes in the return type of the lambda, zero to two (parameterName, parameterType) pairs,
and the (single line) body of the lambda.

```budgie
standalone function : private { main group } RunOnInts { lambda declare : string i int { string format : ("Int: {0}") i int } }
```

C#:

```csharp
Program.RunOnInts((int i) => string.Format("Int: {0}", i));
```

Python:

```python
run_on_ints((i) => print("Int: {0}".format(i)))
```
