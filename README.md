# Budgie

[![NPM version](https://badge.fury.io/js/budgielang.svg)](http://badge.fury.io/js/budgielang)
[![Greenkeeper badge](https://badges.greenkeeper.io/budgielang/budgie.svg)](https://greenkeeper.io/)
[![Circle CI](https://circleci.com/gh/budgielang/budgie.svg?style=svg)](https://circleci.com/gh/budgielang/budgie)

A unified syntax that compiles into a number of OOP languages.
_Formerly known as General Language Syntax (GLS)._

* 🎭 Try it at **[budgielang.org](https://budgielang.org)** 🎭
* 📚 Read the docs on **[docs.budgielang.org](https://docs.budgielang.org)** 📚

> **Budgie is still under development. Don't expect everything to work!**

## Usage

Budgie can be used as a command-line app or via `import`/`require`.

### CLI

To convert `file.bg` to `file.py`:

```shell
npm install budgie budgie-cli --global

budgie --language Python file.bg
```

See [budgie-cli](https://github.com/budgielang/budgie-cli).

### Code

`npm install budgielang`

```javascript
import { Budgie } from "budgielang";

const budgie = new Budgie("C#");

// System.Console.WriteLine("Hello world!");
budgie.convert([`print : ("Hello world!")`]);
```

## Status

Budgie is just shy of **0.4**.

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
            <td>Command-line Budgie prototype, written in C++.</td>
        </tr>
        <tr>
            <th>TypeScript Compiler draft</th>
            <td>0.2</td>
            <td>Budgie compiler as a website, written in TypeScript.</td>
        </tr>
        <tr>
            <th>TypeScript Compiler + C# Output</th>
            <td>0.3</td>
            <td>Budgie compiler re-written in TypeScript. Near-working C#, Java, JavaScript, Python, Ruby, and TypeScript output.</td>
        </tr>
        <tr>
            <th>Roundtripping Feature Complete</th>
            <td>0.4</td>
            <td>All features required for roundtripping implemented. Working C# and TypeScript output. Near-working Java, JavaScript, Python, and Ruby output. Switched to a better name.</td>
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
            <td>Public announcement, glory to everyone.</td>
        </tr>
    </tbody>
</table>

## Development

If you'd like to contribute to Budgie, see [Development.md](https://github.com/budgielang/budgie/blob/master/docs/development.md).

> Requires Node >=12
