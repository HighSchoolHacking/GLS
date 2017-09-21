# Main

Languages typically provide a way to execute code immediately.
Scripting languages such as Python and Ruby will execute all code in order immediately, whereas class-based languages such as C# and Java require a class wrapping a static method akin to C/C++'s "main" function.

GLS resolves the differences by declaring an area as a "main context".
A main function may be declared within that context.

Floating functions may also be declared within the main context.
These become regular functions in scripting languages and static members of the class in class-based languages.

## Commands

### `main context start`

`main context start`

Denotes the start of a main context.

### `main context end`

`main context end`

Denotes the end of a main context.

### `main start`

Denotes the start of a main function.

### `main end`

Denotes the end of a main function.

## Usage

```
main context start
    main start
        print : ("Hello world!")
    main end
main context end
```

### CSharp

```csharp
using System;

class Program
{
    public static void Main()
    {
        Console.WriteLine("Hello world!");
    }
}
```

### Java

```java
class Program {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
```

### JavaScript

```javascript
console.log("Hello world!");
```

### Python

```python
if __name__ == "__main__":
    print("Hello world!")

```

### Ruby

```ruby
puts "Hello world!"
```

### TypeScript

```typescript
console.log("Hello world!");
```
