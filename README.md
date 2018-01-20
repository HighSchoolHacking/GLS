# GLS - General Language Syntax

[![Build Status](https://travis-ci.org/general-language-syntax/GLS.svg?)](https://travis-ci.org/general-language-syntax/GLS)
[![NPM version](https://badge.fury.io/js/general-language-syntax.svg)](http://badge.fury.io/js/general-language-syntax)
[![Greenkeeper badge](https://badges.greenkeeper.io/general-language-syntax/GLS.svg)](https://greenkeeper.io/)

A unified syntax that compiles into a number of OOP languages.
* Read the docs at **[glslang.org](https://glslang.org)**.
* Try it at **[aka.ms/gls-demo](https://aka.ms/gls-demo)**.

***GLS is still under development. Don't expect everything to work!***


## Usage

GLS can be used as a command-line app or via `import`/`require`.

### CLI

To convert `file.gls` to `file.py`:

```shell
npm install general-language-syntax gls-cli --global

gls --language Python file.gls
```

See [gls-cli](https://github.com/HighSchoolHacking/gls-cli).

### Code

`npm install general-language-syntax`

```javascript
import { Gls } from "general-language-syntax";

const gls = new Gls();
gls.setLanguage("CSharp");

// System.Console.WriteLine("Hello world!");
console.log(gls.convert([`print : ("Hello world!")`]));
```


## Status

GLS is just shy of **0.4**.

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
            <td>GLS compiler re-written in TypeScript. Near-working C#, Java, JavaScript, Python, Ruby, and TypeScript output.</td>
        </tr>
        <tr>
            <th>Roundtripping Feature Complete</th>
            <td>0.4</td>
            <td>All features required for roundtripping implemented. Working C# and TypeScript output. Near-working Java, JavaScript, Python, and Ruby output.</td>
        </tr>
        <tr>
            <th>Full Language Outputs</th>
            <td>0.5</td>
            <td>Working C#, Java, JavaScript, Ruby, Python, and TypeScript output.</td>
        </tr>
        <tr>
            <th>Powershell, PHP, Misc.</th>
            <td>0.6</td>
            <td>Onboard or reject those languages and other possibilities.</td>
        </tr>
        <tr>
            <th>Language Specification Finalized</th>
            <td>0.7</td>
            <td>Finalized language spec &amp; cleaned internals of code.</td>
        </tr>
        <tr>
            <th>General Release</th>
            <td>1.0</td>
            <td>Public announcement, glory to everyone. Switched to a better name.</td>
        </tr>
    </tbody>
</table>


## Development

If you'd like to contribute to GLS, see [Development.md](https://github.com/general-language-syntax/GLS/blob/master/docs/development.md).

_Requires Node >=5_

