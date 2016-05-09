# Lambda Declare

## Overview
GLS will support declaring lambda functions. In order to declare a function that takes a lambda function as a parameter, the lambda must first be declared.

## Commands

### `lambda declare`
`lambda declare : lambdaTypeName lambdaFunctionName returnType *`[parameterName parameterType ...]`*

## Usage:

```gls
lambda declare : over21 check boolean age int
```

### CSharp:
```CSharp
delegate bool Over21(int age);
```

### Java:  
```Java
interface Over21 {
    boolean check(int age);
}
```

### Python:
Python does not require declaring lambdas.

### Ruby:
Ruby does not require declaring lambdas.

### TypeScript
```TypeScript
interface IOver21 {
    (int age) : bool;
}
```

## Implementation

### Properties

Properties will be stored in langauge.properties.lambdas. The following properties will be added.

<table>
    <thead>
        <th>Property Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>requiresDeclaration</td>
            <td>boolean</td>
            <td>True if the language requires lambda declarations.</td>
        </tr>
        <tr>
            <td>declareStart</td>
            <td>string</td>
            <td>The start of a lambda declaration.</td>
        </tr>
        <tr>
            <td>declareMiddle</td>
            <td>string</td>
            <td>The middle of a lambda declaration.</td>
        </tr>
        <tr>
            <td>declareEnd</td>
            <td>string</td>
            <td>The end of a lambda declaration.</td>
        </tr>
        <tr>
            <td>lambdaDeclareAsInterface</td>
            <td>boolean</td>
            <td>True if the language requires declaring lambdas with an enclosing interface, false otherwise.</td>
        </tr>
        <tr>
            <td>requiresFunctionName</td>
            <td>boolean</td>
            <td>True if the language requires a lambda function name within the declaration, false otherwise.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th></th>
        <th>requiresDeclaration</th>
        <th>declareStart</th>
        <th>declareMiddle</th>
        <th>declareEnd</th>
        <th>lambdaDeclareAsInterface</th>
        <th>requiresFunctionName</th>
    </thead>
    <tbody>
        <tr>
            <th>Python</th>
            <td>`false`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`false`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`true`</td>
            <td>`"interface "`</td>
            <td>`" {\n"`</td>
            <td>`"\n}"`</td>
            <td>`true`</td>
            <td>`true`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`false`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`false`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>CSharp</th>
            <td>`true`</td>
            <td>`delegate `</td>
            <td>`""`</td>
            <td>`""`</td>
            <td>`true`</td>
            <td>`true`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>``</td>
            <td>``</td>
            <td>``</td>
            <td>``</td>
            <td>``</td>
        </tr>
    <tbody>
</table>

### Tests

Dimensions:
* Return type
    * void
    * int
    * string
* Number of parameters
    * none
    * one
    * two

### Errata

* Python and Ruby do not require lambdas to be declared; in those languages `lambda declare` will be equivalent to a no-op
