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

Creates a test that will return whether the variable is not null.

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

### JavaScript

```javascript
typeof foo === "undefined"
```

```javascript
typeof bar !== "undefined"
```

## Implementation

A null check consists of a start variable to be checked, an explicit null value to check against and some operator to test equality or inequality.

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>IsNullLeft</td>
            <td><code>string</code></td>
            <td>Beginning of Is Null expression</td>
        </tr>
        <tr>
            <td>IsNotNullLeft</td>
            <td><code>string</code></td>
            <td>Beginning of Is Not Null expression</td>
        </tr>
        <tr>
            <td>IsNullMiddle</td>
            <td><code>string</code></td>
            <td>Middle of Is Null expression</td>
        </tr>
        <tr>
            <td>IsNotNullMiddle</td>
            <td><code>string</code></td>
            <td>Middle of Is Not Null expression</td>
        </tr>        
        <tr>
            <td>NullRight</td>
            <td><code>string</code></td>
            <td>End of Is Null and Is Not Null expression</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>IsNullLeft</th>
        <th>IsNotNullLeft</th>
        <th>IsNullMiddle</th>
        <th>IsNotNullMiddle</th>
        <th>NullRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>"=="</code></td>
            <td><code>"!="</code></td>
            <td><code>"null"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>"=="</code></td>
            <td><code>"!="</code></td>
            <td><code>"null"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>"!"</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>".nil?"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>"is"</code></td>
            <td><code>"is not"</code></td>
            <td><code>"None"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"typeof"</code></td>
            <td><code>"typeof"</code></td>
            <td><code>"==="</code></td>
            <td><code>"!=="</code></td>
            <td><code>""undefined""</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>"typeof"</code></td>
            <td><code>"typeof"</code></td>
            <td><code>"==="</code></td>
            <td><code>"!=="</code></td>
            <td><code>""undefined""</code></td>
        </tr>
    </tbody>
</table>

### Errata
- TypeScript has both a `null` and an `undefined` type. We check against `"undefined"`, as this is the prefered method.
- Additionally, TypeScript requires a `typeof` to proceed the variable being tested.
