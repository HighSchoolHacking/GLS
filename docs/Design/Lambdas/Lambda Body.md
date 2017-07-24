# GLS Language: Lambda Bodies

## Overview
This design is for lambda function bodies in GLS. Sometimes called closures or anonymous functions, lambdas are unnamed, single or multi-line functions that are declared in an expression. They can be assigned to variables and passed as parameters.

Some languages support multi-line lambdas - lambdas that consist of multiple code statements. Because Python does not support multi-line lambdas, GLS is not able to support them either.

## Language Examples

### Java:  
```Java
(p, q) -> p == q
```

### Python:
```Python
lambda x, y: x == y 
```

### C#:
```C#
(x, y) => x == y;
```

### Ruby:
```Ruby
lambda { |x, y|  x == y }
```

### TypeScript
```TypeScript
(x, y) => x === y
```

### Javascript
```JavaScript
(x, y) => x === y
```


## Design

### Command Format

```
lambdaLeft parameterType parameterName, ... lambdaMiddle commandString lambdaRight
```

The output starts with `lambdaLeft`.
A list of parameters follows, comma separated.
If the language property `lambdaParameterTypeRequired` is set to `false`, then all `parameterType`s are ommitted.
`lambdaMiddle` follows the parameter list, followed by the actual code for the lambda.
It is passed to this implmentation as a string which contains the output of another `command`.
After the command string, a `lambdaRight` ends the output of the lambda command. 

#### Examples
```
lambda : x number y number { operation : x (equal to) y }
```

### Properties

Properties will be stored in a LambdaProperties file in langauge.properties.lambdas. The following properties will be added.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>functionLeft</td>
            <td>string</td>
            <td>The start of a lambda parameter list.</td>
        </tr>
        <tr>
            <td>functionMiddle</td>
            <td>string</td>
            <td>End of the lambda parameter list and the start of the body.</td>
        </tr>
        <tr>
            <td>functionRight</td>
            <td>string</td>
            <td>End of the lambda body.</td>
        </tr>
        <tr>
            <td>parameterTypeRequired</td>
            <td>boolean</td>
            <td>True if the language requires parameter types in the argument list, false otherwise.</td>
        </tr>
        <tr>
            <td>returnTypeRequired</td>
            <td>boolean</td>
            <td>True if the language requires a return type in the argument list, false otherwise.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th></th>
        <th>functionLeft</th>
        <th>functionMiddle</th>
        <th>functionRight</th>
        <th>parameterTypeRequired</th>
        <th>returnTypeRequired</th>
    </thead>
    <tbody>
        <tr>
            <th>Python</th>
            <td><code>"lambda "</code></td>
            <td><code>": "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"("</code></td>
            <td><code>") -> "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"lambda { |"</code></td>
            <td><code>"\| "</code></td>
            <td><code>" }"</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>CSharp</th>
            <td><code>"("</code></td>
            <td><code>") => "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"("</code></td>
            <td><code>") => "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>"("</code></td>
            <td><code>") => "</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
        </tr>
    <tbody>
</table>
