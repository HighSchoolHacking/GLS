# GLS - General Language Syntax

[![Build Status](https://travis-ci.org/HighSchoolHacking/GLS.svg?)](https://travis-ci.org/HighSchoolHacking/GLS)
[![NPM version](https://badge.fury.io/js/general-language-syntax.svg)](http://badge.fury.io/js/general-language-syntax)

A unified syntax that compiles into a number of OOP languages.
Try it at [aka.ms/gls-demo](https://aka.ms/gls-demo).


## Usage

`npm install general-language-syntax`

```javascript
const Gls = require("general-language-syntax").Gls;

const gls = new Gls();
gls.setLanguage("CSharp");

// System.Console.WriteLine("Hello world!");
console.log(gls.convert([`print : ("Hello world!")`]));
```


## Theory

Most object-oriented programming languages today are "pretty much" the same. Declaring variables, PEMDAS operations, calling functions, and so on rarely change; the base concept of a compiled or scripting language with managed memory is very common.

GLS provides a common syntax to describe programming functionality in these common managed languages. `.gls` files can be compiled into any of the supported languages, and will work approximately the same in all of them.


## Syntax

Each line in GLS consists of a function, a colon, and any number of arguments, all separated by spaces.

```gls
print : "GLS!"
```

* Function: `print`
* Argument: `"GLS!"`

`print : GLS` will compile to `System.Console.WriteLine("GLS!");` in C#, `console.log("GLS!");` in TypeScript, and so on.

### Parenthesis

You can keep spaces inside your arguments by wrapping characters in parenthesis. This tells the compiler to treat the space as part of the argument instead of a separator.

```gls
print : ("Hello world!")
```

* Function: `print`
* Argument: `"Hello world!"`

### Recursion

To pipe the output of one command into another, wrap the inner command with `{}` brackets.

```gls
print : { operation : 1 plus 2 }
```

### Tidbits

* Each GLS command is *independent* - it doesn't know or care about any preceding or following commands.


## Status

GLS is halfway between **0.3** and **0.4**.

<table>
    <thead>
        <th>Deliverable</th>
        <th>Version</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <th>C++ Compiler</th>
            <td>0.1</td>
            <td>Command-line GLS prototype, written in C++.</td>
        </tr>
        <tr>
            <th>TypeScript Compiler draft</th>
            <td>0.2</td>
            <td>GLS compiler as a website, written in TypeScript.</td>
        </tr>
        <tr>
            <th>TypeScript Compiler + C# Output</th>
            <td>0.3</td>
            <td>GLS compiler re-written in TypeScript, with correct TypeScript and C# output.</td>
        </tr>
        <tr>
            <th>Dogfood Feature Complete</th>
            <td>0.4</td>
            <td>All features expected to be required for dogfooding implemented. Java, JavaScript, Python, and Ruby support.</td>
        </tr>
        <tr>
            <th>Dogfood</th>
            <td>0.5</td>
            <td>Compiler written in GLS code, working in C#, Java, JavaScript, Ruby, Python, and TypeScript.</td>
        </tr>
        <tr>
            <th>Powershell, PHP, Objective-C, Misc.</th>
            <td>0.6</td>
            <td>Dogfood or reject those languages and other possibilities.</td>
        </tr>
        <tr>
            <th>Language Specification Finalized</th>
            <td>0.7</td>
            <td>Finalized language spec &amp; cleaned internals of code.</td>
        </tr>
        <tr>
            <th>General Release</th>
            <td>1.0</td>
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
        <th>(Java|Type)Script</th>
    </thead>
    <tbody>
        <tr>
            <th>`async`/`await`!</th>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
        </tr>
        <tr>
            <th>Default Member Variable Values</th>
            <td></td>
            <td></td>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
        </tr>
        <tr>
            <th>Do/While Loops</th>
            <td></td>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Enums Without Values</th>
            <td></td>
            <td></td>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
        </tr>
        <tr>
            <th>Multiline Lambdas</th>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Optional Parameters</th>
            <td></td>
            <td><em>Missing</em></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Overloaded Functions</th>
            <td></td>
            <td></td>
            <td><em>Missing</em></td>
            <td><em>Missing</em></td>
            <td><em>Missing</em></td>
        </tr>
        <tr>
            <th>String.Replace</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><em>Abnormal</em></td>
        </tr>
        <tr>
            <th>Switch Statements</th>
            <td></td>
            <td></td>
            <td><em>Missing</em></td>
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
            <td><a href="https://github.com/HighSchoolHacking/GLS/issues/190">✓ (#190)</a></td>
            <td></td>
        </tr>
        <tr>
            <th>Go</th>
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

GLS uses [Gulp](http://gulpjs.com/) to automate building, which requires [Node.js](http://node.js.org).

To build from scratch, install Node.js and run the following commands:

```
npm install -g gulp
npm install
gulp
```

To build, run `gulp`.
You can build+lint the souce without running tests using `gulp src`, or just build+lint+run tests using `gulp test`.
The full list of tasks is in `gulpfile.js`.

Alternately, use `tsc` to build source files under `/src` to `/lib`, and `tsc -w` to build upon file changes.

### Tests

Integration and end-to-end tests are done using BDD.
Folders under `/test/integration` and `/test/end-to-end` will contain a `.gls` file with GLS source code along with text files of the expected output in supported languages.
These are verifified during `gulp test`.

You can run specific tests using their gulp task (`gulp test:integration` or `gulp test:end-to-end`).
Specify `--command`(s) to only run tests within groups that case-insensitive [minimatch](https://www.npmjs.com/package/minimatch) them (e.g. `gulp test:end-to-end --command *array* *list*`).
