# GLS - General Language Syntax

[![Build Status](https://travis-ci.org/HighSchoolHacking/GLS.svg?)](https://travis-ci.org/HighSchoolHacking/GLS)
[![NPM version](https://badge.fury.io/js/general-language-syntax.svg)](http://badge.fury.io/js/general-language-syntax)

A unified syntax that compiles into a number of OOP languages.
Try it at [aka.ms/gls-demo](https://aka.ms/gls-demo).


## Usage

GLS can be used as a command-line app or via `import`/`require`.

### CLI

To convert `file.gls` to `file.py`:

```shell
npm install gls-cli --global

gls --language Python file.gls
```

See [gls-cli](https://github.com/HighSchoolHacking/gls-cli).

### Code

`npm install general-language-syntax`

```javascript
const Gls = require("general-language-syntax").Gls;

const gls = new Gls();
gls.setLanguage("CSharp");

// System.Console.WriteLine("Hello world!");
console.log(gls.convert([`print : ("Hello world!")`]));
```


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
These are verified during `gulp test`.

You can run specific tests using their gulp task (`gulp test:integration` or `gulp test:end-to-end`).
Specify `--command`(s) to only run tests within groups that case-insensitive [minimatch](https://www.npmjs.com/package/minimatch) them (e.g. `gulp test:end-to-end --command *array* *list*`).
