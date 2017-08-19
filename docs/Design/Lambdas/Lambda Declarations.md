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


## Errata

* Python and Ruby do not require lambdas to be declared; in those languages `lambda declare` will be equivalent to a no-op.
