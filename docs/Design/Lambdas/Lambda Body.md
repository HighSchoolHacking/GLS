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
