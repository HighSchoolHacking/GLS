# Interface Declarations

## Feature Overview

Declarations for interfaces and how to extend them from other interfaces.


## Commands

### `interface start`

`interface start : interfaceName [extendedInterfaceName1 extendedInterfacename2...]`

A command to begin interface declaration.
It will take the interface's name as a parameter.
It will also take optional parameters of interface(s) to extend from.

### `interface end`

`interface end`

A command to end an interface declaration.


## Usage

```gls
interface start : IPoint
interface end

interface start : InewCar ICar IVehicle
interface end
```

### CSharp

```csharp
interface IPoint
{
}

interface InewCar : ICar, IVehicle
{
}
```

### Java

```java
interface IPoint {
}

interface InewCar extends ICar, IVehicle {
}
```

### TypeScript

```typescript
interface IPoint {
}

interface InewCar extends ICar, IVehicle {
}
```


## Implementation

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>DeclareStartLeft</td>
            <td><code>string</code></td>
            <td>Keyword that indicates interface declaration.</td>
        </tr>
        <tr>
            <td>DeclareStartRight</td>
            <td><code>string</code></td>
            <td>Starts interface declaration.</td>
        </tr>
        <tr>
            <td>DeclareExtendsLeft</td>
            <td><code>string</code></td>
            <td>Keyword that indicates to extend from parent interfaces.</td>
        </tr>
        <tr>
            <td>DeclareExtendsRight</td>
            <td><code>string</code></td>
            <td>Separator of multiple parent interfaces.</td>
        </tr>
        <tr>
            <td>DeclareEnd</td>
            <td><code>string</code></td>
            <td>End interface declaration.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>DeclareStartLeft</th>
        <th>DeclareStartRight</th>
        <th>DeclareExtendsLeft</th>
        <th>DeclareExtendsRight</th>
        <th>DeclareEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"interface "</code></td>
            <td><code>"\n{"</code></td>
            <td><code>" : "</code></td>
            <td><code>", "</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"interface "</code></td>
            <td><code>" {\n"</code></td>
            <td><code>" extends "</code></td>
            <td><code>", "</code></td>
            <td><code>"}"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"interface "</code></td>
            <td><code>" {\n"</code></td>
            <td><code>" extends "</code></td>
            <td><code>", "</code></td>
            <td><code>"}"</code></td>
        </tr>
    </tbody>
</table>

### Errata

* Java interfaces cannot extend classes so neither will GLS interfaces.
* Explicit interfaces do not exist in Ruby and Python.
