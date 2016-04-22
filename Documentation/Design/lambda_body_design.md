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
->(x, y) { x == y }
```
Both of the above constructs are valid for Ruby. GLS generates the top one for no reason at all.

### TypeScript
```TypeScript
(x, y) => x === y
```


## Design

### GLS Syntax:
`lambda : `*`[parameterName, parameterType, ...]`* `command`

The GLS syntax for a lambda body will be as above. The command starts with `lambda :`, which is followed with zero or more parameter names, each one followed by its type. The final part is a GLS command. Any variables used in the GLS command must be passed in the parameter list that precedes the command.

#### Examples:
```
lambda : x number y number { operation : x (equal to) y }
```

### Language Specific Properties:

| Property Name               | Type    | Description                                                                           |
|-----------------------------|---------|---------------------------------------------------------------------------------------|
| lambdaLeft                  | string  | Language's syntax for the start of a lambda parmater list.                            |
| lambdaMiddle                | string  | Language's syntax for the end of the lambda parameter list and the start of the body. |
| lambdaRight                 | string  | Language's syntax for the end of the lambda body.                                     |
| lambdaParameterTypeRequired | boolean | True if the language requires parameter types in the argument list, false otherwise.  |

Output:
```
lambdaLeft parameterType, parameterName, ... lambdaMiddle commandString lambdaRight semicolon
```

The output starts with `lambdaLeft`. A list of parameters follows, comma separated. If the language property `lambdaParameterTypeRequired` is set to `false`, then all `parameterType`s are ommitted. `lambdaMiddle` follows the parameter list, followed by the actual code for the lambda. It is passed to this implmentation as a string which contains the output of another `command`. After the command string, a `lambdaRight` and `semicolon` end the output of the lambda command. 


|              | lambdaLeft     | lambdaMiddle   | lambdaRight | lambdaParameterTypeRequired   |
|--------------|----------------|----------------|-------------|-------------------------------|
| *Python*     |  `lambda`      |  `:`           |  ""         | `false`                       |
| *C#*         |  `(`           |  `) =>`        |  ""         | `false`                       |
| *Java*       |  `(`           |  `) ->`        |  ""         | `false`                       |
| *Ruby*       |  `lambda { \|` |  `\|`          |  `}`        | `false`                       |
| *TypeScript* |  `(`           |  `)  =>`       |  ""         | `false`                       |
