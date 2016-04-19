# GLS Improvement: Lambda Support
Engineer: faulda

## Feature Overview
This improvement adds support for lambda function bodies to GLS. Sometimes called closures or anonymous functions, lambdas are unnamed, single or multi-line functions that are declared in an expression. They can be assigned to variables and passed as parameters, which makes them versatile and useful.

Some languages support multi-line lambdas, or lambdas that consist of multiple code statements. Because Python does not support multi-line lambdas, GLS is not able to support them. 

## Language Examples
### Java:  
```Java
(p) -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
```

### Python:
```Python
lambda x: math.sqrt(x) 
```

### C#:
```C#
(x, y) => x == y;
```

### Ruby:
```Ruby
lambda { |x| puts x }
->(x) { puts x }
```
Both of the above constructs are valid for Ruby. GLS generates the top one for no reason at all.

### TypeScript
```TypeScript
(amount, interestRate, duration) => amount * interestRate * duration / 12
```


## Design
### GLS Syntax:
```
lambdaLeft <parameter name list> lambdaMiddle <expression> lambdaRight semicolon
```

The gls commands for a lambda body will be as above. The body starts with lambdaLeft. A list of parameter names follows, comma separated. Types are not included in the parameter name list. After the parameter name list comes the lambdaMiddle, followed by the actual code for the lambda. It must be a single line of code and may or may not return a value. After the expression, a lambdaRight and semicolon end the lambda body. 

lambda(Left|Right) were chosen over lambda(Start|End) because of the convention noted in "Naming Conventions.md":
* Start and End refer to entire lines.
* Left and Right refer to the beginning and end of an individual line.

### Language Specific Properties:
|              | lambdaLeft     | lambdaMiddle   | lambdaRight |
|--------------|----------------|----------------|-------------|
| *Python*     |  `lambda`      |  `:`           |             |  
| *C#*         |  `(`           |  `) =>`        |             |
| *Java*       |  `(`           |  `) ->`        |             |
| *Ruby*       |  `lambda { |`  |  `|`           |  `}`        |
| *TypeScript* |  `(`           |  `)  =>`       |             |

Each langauge will need to store property values for lambda(Left|Right|Middle) its language file. The values for each currently supported language are listed above. An empty box indicates empty string, "", is the value.
