# Null Checking

Creates checks for if the passed variable has value null. 

A null variable is one that has no other value stored in it.

Can be used to check whether the value is or is not null. 

## Commands

### `is null`

`is null : variable`

Creates a test that will return true if the variable is `null`.

### `not null`

`not null : variable`

Creates a test that will return false if the variable is `null`.

## Usage

```
is null : foo
```

```
not null : bar
```

### CSharp

```csharp
foo == null
```

```csharp
bar != null
```

### Java

```java
foo == null
```

```java
bar != null
```

### Python

```python
foo is None
```

```python
bar is not None
```

### Ruby

```ruby
foo.nil?
```

```ruby
!bar.nil?
```

### TypeScript

```typescript
typeof foo === undefined
```

```typescript
typeof foo !== undefined
```

## Implementation

A null check consists of a variable to be checked, and some logical equivalence operator.

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Operator</td>
            <td><code>boolean</code></td>
            <td>Logical equivalence operator</td>
        </tr>
        <tr>
            <td>Explicit null</td>
            <td><code>null</code></td>
            <td>Used as a placeholder for data</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Operator</th>
        <th>Explicit null</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>==</code></td>
            <td><code>null</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>==</code></td>
            <td><code>null</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>?</code></td>
            <td><code>.nil</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>is</code></td>
            <td><code>None</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>===</code></td>
            <td><code>undefined</code></td>
        </tr>
    </tbody>
</table>

### Errata
- Python uses a `None` instead of a `null`. Additionally, the `is` keyword cannot be overloaded, so it is prefered over the `==` operator.
- TypeScript has both a `null` and an `undefined` type. We want to check for `undefined`, as it is more in line with other languages `null`.
