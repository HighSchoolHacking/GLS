# Lambda Declarations

In some languages, in order to declare a function that takes a lambda function as a parameter, the lambda must first be declared. This typically involves declaring the return type as well as the parameter names and types, which allow for compile-time type checking when the lambda is used.

## Commands

### `lambda declare`
`lambda declare : typeName functionName returnType` *`[parameterName parameterType ...]`*

## Usage:

```gls
lambda declare : overMinimum check boolean amount int
```

### CSharp:
```CSharp
delegate bool overMinimum(int amount);
```

### Java:  
```Java
interface overMinimum {
    boolean check(int amount);
}
```

### Python:
Python does not require declaring lambdas.

### Ruby:
Ruby does not require declaring lambdas.

### TypeScript
```TypeScript
interface IOverMinimum {
    (amount: number): boolean;
}
```

### JavaScript
```JavaScript
interface IOverMinimum {
    (amount: number): boolean;
}
```

## Implementation

### Properties

Properties will be stored in the LambdaProperties object. The following properties will be added.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>requiresDeclaration</td>
            <td>boolean</td>
            <td>Whether the language requires lambda declarations.</td>
        </tr>
        <tr>
            <td>lambdaDeclareAsInterface</td>
            <td>boolean</td>
            <td>Whether the language requires declaring lambdas with an enclosing interface.</td>
        </tr>
        <tr>
            <td>requiresFunctionName</td>
            <td>boolean</td>
            <td>Whether the language requires a lambda function name within the declaration.</td>
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
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th></th>
        <th>requiresDeclaration</th>
        <th>lambdaDeclareAsInterface</th>
        <th>requiresFunctionName</th>
        <th>declareStart</th>
        <th>declareMiddle</th>
        <th>declareEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`true`</td>
            <td>`true`</td>
            <td>`true`</td>
            <td>`"delegate "`</td>
            <td>`""`</td>
            <td>`""`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`true`</td>
            <td>`true`</td>
            <td>`true`</td>
            <td>`"interface "`</td>
            <td>`" {\n"`</td>
            <td>`"\n}"`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`false`</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>`false`</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`true`</td>
            <td>`true`</td>
            <td>`false`</td>
            <td>`"interface "`</td>
            <td>`" {\n"`</td>
            <td>`"\n}"`</td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td>`true`</td>
            <td>`true`</td>
            <td>`false`</td>
            <td>`"interface "`</td>
            <td>`" {\n"`</td>
            <td>`"\n}"`</td>
        </tr>
    <tbody>
</table>

### Errata

* Python and Ruby do not require lambdas to be declared; in those languages `lambda declare` will be equivalent to a no-op.
