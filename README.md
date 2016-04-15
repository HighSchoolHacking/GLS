# GLS - General Language Syntax

A unified syntax that compiles into a number of OOP languages.


## Theory

Most object-oriented programming languages today are "pretty much" the same. Declaring variables, PEMDAS operations, calling functions, and so on rarely change; the base concept of a compiled or scripting language with managed memory is very common.

GLS provides a common syntax to describe programming functionality in these common managed languages. `.gls` files can be compiled into any of the supported languages, and will work approximately the same in all of them.


## Syntax

Each line in GLS consists of a function, a colon, and any number of arguments, all separated by spaces.

```gls
print line : "GLS!"
```

* Function: `print`
* Argument: `"GLS!"`

`print line : GLS` will compile to `System.Console.WriteLine("GLS!");` in C#, `console.log("GLS!");` in TypeScript, and so on.

### Parenthesis

You can keep spaces inside your arguments by wrapping characters in parenthesis. This tells the compiler to treat the space as part of the argument instead of a separator.

```gls
print line : ("Hello world!")
```

* Function: `print`
* Argument: `"Hello world!"`

### Recursion

To pipe the output of one command into another, wrap the inner command with `{}` brackets.

```gls
print line : { operation : 1 plus 2 }
```

### Tidbits

* Each GLS command is *idempotent* - it doesn't know or care about any preceding or following commands.


## Status

Deliverable                                | Version | Date         | Description
-------------------------------------------|---------|--------------|-----------------------------------------------------------------------------|
C++ compiler                               | 0.1     | May 2015     | Command-line GLS prototype, written in C++.
TypeScript compiler draft                  | 0.2     | July 2015    | GLS compiler as a website, written in TypeScript.
TypeScript compiler + C# output            | 0.3     | March 2016   | GLS compiler re-written in TypeScript, with correct TypeScript and C# output.
Dogfood                                    | 0.4     | April 2016   | Compiler written in GLS code, working in C# and TypeScript.
Ruby, Python, Java, Objective C and Swift  | 0.5     | May 2016     | Ruby, Python, Java, Objective C and Swift support.
PowerShell, PHP, ES6 JavaScript, misc.     | 0.6     | June 2016    | Dogfood or reject those languages and other possibilities.
Language specification finalized           | 0.7     | July 2016    | Finalized language spec & cleaned internals of code.
General release                            | 1.0     | August 2016  | Public announcement, glory to everyone.


## Intentionally Missing Items

No language is perfect. The following are some seemingly obvious omissions in GLS that are due to languages not supporting them:

| Feature              | C# | Java      | Python    | Ruby      | TypeScript  |
|----------------------|----|-----------|-----------|-----------|-------------|
| Foreach Over Values  |    |           |           |           |  *Missing*  |
| Multiline Lambdas    |    |           | *Missing* |           |             |
| Optional Parameters  |    | *Missing* |           |           |             |
| Overloaded Functions |    |           | *Missing* | *Missing* |  *Missing*  |
| String.Replace       |    |           |           |           |  *Abnormal* |
| Switch Statements    |    |           | *Missing* |           |             |

This list will grow as features are requested.


## Intentionally Unsupported Languages

Not all languages work similarly to the supported ones. These will likely never receive GLS support, for the following common reasons (among others):

| Language             | Manual Pointers | Unusual Classes  |
| ---------------------|-----------------|------------------|
| C                    | *✓*             | *✓*              |
| C++                  | *✓*             |                  |
| JavaScript (<ES6)    |                 | *✓*              |
| Rust                 | *✓*             |                  |

This list will grow as languages are requested.


## Development

This requires [NodeJS](https://nodejs.org). To initialize your build environment, run:

```shell
npm install
```

Building is done via [Grunt](http://gruntjs.com):

```shell
grunt
```
