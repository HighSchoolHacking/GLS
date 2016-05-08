# GLS - General Language Syntax

[![Build Status](https://travis-ci.org/HighSchoolHacking/GLS.svg?)](https://travis-ci.org/HighSchoolHacking/GLS)
[![Codecov](https://codecov.io/github/HighSchoolHacking/GLS/coverage.svg?branch=master)](https://codecov.io/github/HighSchoolHacking/GLS)

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

* Each GLS command is *independent* - it doesn't know or care about any preceding or following commands.


## Status

<table>
    <thead>
        <th>Deliverable</th>
        <th>Version</th>
        <th>Date</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <th>C++ Compiler</th>
            <td>0.1</td>
            <td>May 2015</td>
            <td>Command-line GLS prototype, written in C++.</td>
        </tr>
        <tr>
            <th>TypeScript Compiler draft</th>
            <td>0.2</td>
            <td>July 2015</td>
            <td>GLS compiler as a website, written in TypeScript.</td>
        </tr>
        <tr>
            <th>TypeScript Compiler + C# Output</th>
            <td>0.3</td>
            <td>March 2016</td>
            <td>GLS compiler re-written in TypeScript, with correct TypeScript and C# output.</td>
        </tr>
        <tr>
            <th>Dogfood Feature Complete</th>
            <td>0.4</td>
            <td>April 2016</td>
            <td>All features expected to be required for dogfooding implemented. Ruby, Python, and Java support.</td>
        </tr>
        <tr>
            <th>Dogfood</th>
            <td>0.5</td>
            <td>May 2016</td>
            <td>Compiler written in GLS code, working in C#, Java, Ruby, Python, and TypeScript.</td>
        </tr>
        <tr>
            <th>Powershell, PHP, ES6 JavaScript, Objective-C, Swift, Misc.</th>
            <td>0.6</td>
            <td>June 2016</td>
            <td>Dogfood or reject those languages and other possibilities.</td>
        </tr>
        <tr>
            <th>Language Specification Finalized</th>
            <td>0.7</td>
            <td>July 2016</td>
            <td>Finalized language spec & cleaned internals of code.</td>
        </tr>
        <tr>
            <th>General Release</th>
            <td>1.0</td>
            <td>August 2016</td>
            <td>Public announcement, glory to everyone.</td>
        </tr>
    </tbody>
</table>

## Intentionally Missing Items

No language is perfect. The following are some seemingly obvious omissions in GLS that are due to languages not supporting them:

<table>
    <thead>
        <th>Feature</th>
        <th>C#</th>
        <th>Java</th>
        <th>Python</th>
        <th>Ruby</th>
        <th>TypeScript</th>
    </thead>
    <tbody>
        <tr>
            <th>Default Member Variable Values</th>
            <td></td>
            <td></td>
            <td></td>
            <td>*Missing*</td>
            <td></td>
        </tr>
        <tr>
            <th>Enums Without Values</th>
            <td></td>
            <td></td>
            <td></td>
            <td>*Missing*</td>
            <td></td>
        </tr>
        <tr>
            <th>Foreach Over Values</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>*Missing*</td>
        </tr>
        <tr>
            <th>Multiline Lambdas</th>
            <td></td>
            <td>*Missing*</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Optional Parameters</th>
            <td></td>
            <td>*Missing*</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Overloaded Functions</th>
            <td></td>
            <td></td>
            <td>*Missing*</td>
            <td>*Missing*</td>
            <td>*Missing*</td>
        </tr>
        <tr>
            <th>String.Replace</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>*Abnormal*</td>
        </tr>
        <tr>
            <th>Switch Statements</th>
            <td></td>
            <td></td>
            <td>*Missing*</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

This list will grow as features are requested.


## Intentionally Unsupported Languages

Not all languages work similarly to the supported ones. These will likely never receive GLS support, for the following common reasons (among others):

<table>
    <thead>
        <th>Language</th>
        <th>Manual Pointers</th>
        <th>Unusual Classes</th>
    </thead>
    <tbody>
        <tr>
            <th>C</th>
            <td>✓</td>
            <td>✓</td>
        </tr>
        <tr>
            <th>C++</th>
            <td>✓</td>
            <td></td>
        </tr>
        <tr>
            <th>JavaScript (&lt;ES6)</th>
            <td></td>
            <td>✓</td>
        </tr>
        <tr>
            <th>Rust</th>
            <td>✓</td>
            <td></td>
        </tr>
    </tbody>
</table>

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
