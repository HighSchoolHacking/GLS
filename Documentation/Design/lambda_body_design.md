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


## Design

### GLS Syntax:
`lambda : returnType`*`[parameterName, parameterType, ...]`* `command`

The GLS syntax for a lambda body will be as above. The command starts with `lambda :`, which is followed with zero or more parameter names, each one followed by its type. The final part is a GLS command. Any variables used in the GLS command must be passed in the parameter list that precedes the command.

#### Examples:
```
lambda : x number y number { operation : x (equal to) y }
```

### Language Specific Properties:

Properties will be stored in a LambdaProperties file in langauge.properties.lambdas. The following properties will be added.

| Property Name                 | Type    | Description                                                                           |
|-------------------------------|---------|---------------------------------------------------------------------------------------|
| functionLeft                  | string  | Language's syntax for the start of a lambda parameter list.                            |
| functionMiddle                | string  | Language's syntax for the end of the lambda parameter list and the start of the body. |
| functionRight                 | string  | Language's syntax for the end of the lambda body.                                     |
| parameterTypeRequired         | boolean | True if the language requires parameter types in the argument list, false otherwise.  |
| returnTypeRequired            | boolean | True if the language requires a return type in the argument list, false otherwise.  |

Command Format:
```
lambdaLeft parameterType parameterName, ... lambdaMiddle commandString lambdaRight
```

The output starts with `lambdaLeft`. A list of parameters follows, comma separated. If the language property `lambdaParameterTypeRequired` is set to `false`, then all `parameterType`s are ommitted. `lambdaMiddle` follows the parameter list, followed by the actual code for the lambda. It is passed to this implmentation as a string which contains the output of another `command`. After the command string, a `lambdaRight` ends the output of the lambda command. 


|              | functionLeft       | functionMiddle     | functionRight    | parameterTypeRequired | returnTypeRequired |
|--------------|--------------------|--------------------|------------------|-----------------------|--------------------|
| *Python*     |  `"lambda "`       |  `": "`             |  `""`           | `false`               | `false`            |
| *Java*       |  `"("`             |  `") -> "`          |  `""`           | `false`               | `false`            |
| *Ruby*       |  `"lambda { \|"`   |  `"\| "`            |  `" }"`         | `false`               | `false`            |
| *C#*         |  `"("`             |  `") => "`          |  `""`           | `false`               | `false`            |
| *TypeScript* |  `"("`             |  `") => "`          |  `""`           | `false`               | `false`            |
 
[//]: # "Note: if viewing in text editor, the backslashes before | in Ruby are required so that markdown does not think they're part of the table. There is no \\ in the real GLS syntax"