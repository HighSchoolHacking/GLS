# Interface Methods

## Feature Overview

Method declarations within interfaces, as well as variable declarations within interfaces.


## Commands

### `interface method : name type [argName1 argType1 argName2 argType2...]`

A command to declare a method within an interface.


## Usage

```gls
interface start : Point
interface method : method1 int x int
interface end
```

### CSharp

```csharp
interface Point {
    int method1(int x);
}
```

### Java

```java
interface Point {
    public int method1(int x);
}
```

### TypeScript

```typescript
interface Point {
    method1(x: number): number;
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
            <td>DeclareMethodLeft</td>
            <td><code>string</code></td>
            <td>Beginning of method declaration.</td>
        </tr>
        <tr>
            <td>DeclareMethodMiddle</td>
            <td><code>string</code></td>
            <td>Middle of method declaration.</td>
        </tr>
        <tr>
            <td>DeclareMethodRight</td>
            <td><code>string</code></td>
            <td>End of method declaration.</td>
        </tr>
        <tr>
            <td>MethodTypeAfter</td>
            <td><code>boolean</code></td>
            <td>Whether the method type is declared after the method is defined.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>DeclareMethodLeft</th>
        <th>DeclareMethodMiddle</th>
        <th>DeclareMethodRight</th>
        <th>MethodTypeAfter</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>""</code></td>
            <td><code>" ("</code></td>
            <td><code>")"</code></td>
            <td><code>"false"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"public "</code></td>
            <td><code>" ("</code></td>
            <td><code>")"</code></td>
            <td><code>"false"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>""</code></td>
            <td><code>" ("</code></td>
            <td><code>")"</code></td>
            <td><code>"true"</code></td>
        </tr>
    </tbody>
</table>

