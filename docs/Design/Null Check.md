# Null Check
Creates checks for if the passed variable has value null and/or undefined (see errata). Can be used to check positvly for null or negetivly for null

## Commands

### `is null`

`is null : variable`

Creates a test that will return true if the variable is NULL

### `not null`

`not null : variable`

Creates a test that will return false if the variable is NULL

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

### Typescript

```javascript
foo == null
```
```javascript
foo != null
```

## Implementation

A null check can either test for a variable being null, or test for a variable not being null.

A null check consists of a variable to be checked, some equivalence operator

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
            <td>Logical equivelence operator</td>
        </tr>
        <tr>
            <td>Explicit null</td>
            <td><code>`null`</code></td>
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
            <td><code>`==`</code></td>
            <td><code>`null`</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>`==`</code></td>
            <td><code>null</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>`?`</code></td>
            <td><code>`.nil`</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>`is`</code></td>
            <td><code>`None`</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>`==`</code></td>
            <td><code>`null`</code></td>
        </tr>
    </tbody>
</table>

### Errata
- Python uses a NONE instead of a NULL. `is` keyword cannot be overloaded, so it is prefered over `==`
- Typescript has both a NULL and an undefined type, lucky for us, both can be captured with `var == NULL`
- Ruby has a significantly different syntx for null checking that the other langauges