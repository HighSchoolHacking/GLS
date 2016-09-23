# Null Checking

A "null" variable is a variable without a stored value. 
Commonly, uninitialized variables have a null value.
These commands check whether a passed variable has a null value. 

## Commands

### `is null`

`is null : variable`

Creates a test that will return whether variable is null.

### `is not null`

`is not null : variable`

Creates a test that will return false if the variable is null.

## Usage

```
is null : foo
```

```
is not null : bar
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
typeof foo === "undefined"
```

```typescript
typeof bar !== "undefined"
```

## Implementation

A null check consists of a variable to be checked,
an explicit null value to check against and some operator to test equality/inequality.

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Equality Operator</td>
            <td><code>boolean</code></td>
            <td>Logical operator for equality</td>
        </tr>
         <tr>
            <td>Inequality Operator</td>
            <td><code>boolean</code></td>
            <td>Logical operator for inequality</td>
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
        <th>Equality Operator</th>
        <th>Inequality Operator</th>
        <th>Explicit null</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>==</code></td>
            <td><code>!=</code></td>
            <td><code>null</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>==</code></td>
            <td><code>!=</code></td>
            <td><code>null</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"?"</code></td>
            <td><code>"!"</code></td>
            <td><code>.nil</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>is</code></td>
            <td><code>is not</code></td>
            <td><code>None</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>===</code></td>
            <td><code>!==</code></td>
            <td><code>"undefined"</code></td>
        </tr>
    </tbody>
</table>

### Errata
- TypeScript has both a `null` and an `undefined` type. We check against `"undefined"` due to `undefined` being semi-mutable in TypeScript.
- Additionally, TypeScript requires a `typeof` to proceed the variable being tested.
