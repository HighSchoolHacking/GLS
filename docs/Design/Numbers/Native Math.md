# Native Math

## Feature Overview

All supported languages provide some amount of built-in math operations beyond the simple arithmetic operators.
These are typically encapsulated in some kind of global `Math` object and/or system namespace that contains simple functions and constants.


## Commands

### `math absolute`

`math absolute` `:` `name`

Generates code to compute the absolute value of the given number.

## Usage

```
variable : foo double 3.5
variable : bar int -7

math absolute : bar
```
### `math floor`

`math floor` `:` `name`

Generates code to compute the previous largest integer of the given number.

## Usage

```
variable : foo double 3.5
variable : bar int -7

math floor : foo
```
## Implementation

### Properties

These commands will be implemented as native calls.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>MathName</td>
            <td>string</td>
            <td>Global object and/or namespace used for math commands.</td>
        </tr>
        <tr>
            <td>Absolute</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to compute the absolute value of a number.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>MathName</th>
        <th>Absolute</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"Math"</code></td>
            <td><code>"Math.Abs"</code> / <code>Static</code> / <code>Function</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"Math"</code></td>
            <td><code>"Math.abs"</code> / <code>Static</code> / <code>Function</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"Math"</code></td>
            <td><code>"fabs"</code> / <code>Static</code> / <code>Function</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"Math"</code></td>
            <td><code>"abs"</code> / <code>Member</code> / <code>Property</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"Math"</code></td>
            <td><code>"Math.abs"</code> / <code>Static</code> / <code>Function</code></td>
        </tr>
    <tbody>
</table>
