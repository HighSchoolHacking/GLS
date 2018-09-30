# Syntax

Each line in GLS starts with a function name.
If there are arguments, they are preceded by a space-padded colon following the function name, all separated by spaces.

```gls
print : "GLS!"
```

* Function: `print`
* Argument: `"GLS!"`

This will compile to:

* In C#: `System.Console.WriteLine("GLS!");`
* In Python: `print("GLS!")`

Many commands, including `print`, may take in multiple arguments:

```gls
print : "First" "second"
```

* Function: `print`
* Arguments: `"First"`, `"second"`

## Parenthesis

You can keep spaces inside your arguments by wrapping characters in parenthesis.
This tells the compiler to treat the space as part of the argument instead of a separator.

```gls
print : ("Hello world!")
```

* Function: `print`
* Argument: `"Hello world!"`

## Recursion

To pipe the output of one command into another, wrap the inner command with`{}`brackets.

```gls
print : { operation : 1 plus 2 }
```

* Function: `print`
* Argument:
  * Function: `operation`
  * Arguments: `1`, `plus`, `2`
