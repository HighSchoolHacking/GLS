# Syntax

Each line in Budgie starts with a function name.
If there are arguments, they are preceded by a space-padded colon following the function name, all separated by spaces.

```budgie
print : "Budgie!"
```

* Function: `print`
* Argument: `"Budgie!"`

This will compile to:

* In C#: `System.Console.WriteLine("Budgie!");`
* In Python: `print("Budgie!")`

Many commands, including `print`, may take in multiple arguments:

```budgie
print : "Chirp" "chirp!"
```

* Function: `print`
* Arguments: `"Chirp"`, `"chirp!"`

## Parenthesis

You can keep spaces inside your arguments by wrapping characters in parenthesis.
This tells the compiler to treat the space as part of the argument instead of a separator.

```budgie
print : ("Hello world!")
```

* Function: `print`
* Argument: `"Hello world!"`

## Recursion

To pipe the output of one command into another, wrap the inner command with`{}`brackets.

```budgie
print : { operation : 1 plus 2 }
```

* Function: `print`
* Argument:
  * Function: `operation`
  * Arguments: `1`, `plus`, `2`
