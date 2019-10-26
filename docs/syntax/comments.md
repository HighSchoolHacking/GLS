# Comments

Most languages have two concepts of comments: single-line and multi-line.
Budgie supports both.

## Single Line Comments

Use the `comment line` command.
It takes in any number of parameters and directly outputs them.

```budgie
comment line : Hello world!
```

* In C#: `// Hello world!`
* In Python: `# Hello world!`

## Multi Line Comments

Also known as "block" comments, these are preceded by `comment block start` and ended with `comment block end`.
Each line of actual block content comes from `comment block`, which, like `comment line`, directly prints all its parameters.

```budgie
comment block start
comment block : Hello world!
comment block end
```

In C#:

```csharp
/*
 * Hello world!
 */
```

In Python:

```python
"""
Hello world!
"""
```
