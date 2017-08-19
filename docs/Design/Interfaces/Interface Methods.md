# Interface Methods

## Feature Overview

Interface methods are used as outlines for classes that implement the interface. 
Interfaces only contain method declarations.


## Commands

### `interface method : name type [argName1 argType1 argName2 argType2...]`

A command to declare a method within an interface.


## Usage

```gls
interface start : IPoint
interface method : setPoint int x int
interface end
```

### CSharp

```csharp
interface IPoint
{
    int setPoint(int x);
}
```

### Java

```java
interface IPoint {
    public int setPoint(int x);
}
```

### TypeScript

```typescript
interface IPoint {
    setPoint(x: number): number;
}
```
