### Java
Predicate<Person> tester – is the type I think (only works for accepting 1 Person type and returning a Boolean). Consumer<Type> works for no return value. 


### C#
Templated over all input types, return type is last
```C#
Func<int, bool> myFunc = x => x == 5;
```
