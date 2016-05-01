# Member Variable Retrieval

## Feature Overview

Class instances may retrieve member variables defined in their class.


## Commands

### `member variable`

`member variable` `:` *`[privacy]`* `instanceName` `variableName`

Retrieving a member variable will be done with the `member variable` command.
This takes in the variable's privacy optionally, then the instance name and variable name.
Privacy defaults to `"public"` if not provided.

As with declaring member variables, the variable name will be modified as per the language's casing style for the privacy level.


## Usage

```
member variable : name person
member variable : public name person
member variable : protected age { this }
member variable : private gender { this }
```

### CSharp

```csharp
person.Name;
person.Name;
this.Age;
this.gender;
```

### Java

```java
person.name;
person.name;
this.age;
this.gender;
```

### Python

```python
person.name;
person.name;
this._age;
this.__gender;
```

### Ruby

```ruby
person.name;
person.name;
this.age;
this.gender;
```

### TypeScript

```typescript
person.name;
person.name;
this.age;
this.gender;
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
            <td>MemberVariablePublicCase</td>
            <td><code>PascalCase</code> | <code>CamelCase</code> | <code>SnakeCase</code></td>
            <td>Casing modifier for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePublicPrefix</td>
            <td>`string`</td>
            <td>Prefix for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtectedCase</td>
            <td><code>PascalCase</code> | <code>CamelCase</code> | <code>SnakeCase</code></td>
            <td>Casing modifier for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtectedPrefix</td>
            <td>`string`</td>
            <td>Prefix for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivateCase</td>
            <td><code>PascalCase</code> | <code>CamelCase</code> | <code>SnakeCase</code></td>
            <td>Casing modifier for private member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivatePrefix</td>
            <td>`string`</td>
            <td>Prefix for private member variables.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>MemberVariablePublicCase</th>
        <th>MemberVariablePublicPrefix</th>
        <th>MemberVariableProtectedCase</th>
        <th>MemberVariableProtectedPrefix</th>
        <th>MemberVariablePrivateCase</th>
        <th>MemberVariablePrivatePrefix</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>PascalCase</code></td>
            <td><code>""</code></td>
            <td><code>PascalCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>SnakeCase</code></td>
            <td><code>"_"</code></td>
            <td><code>SnakeCase</code></td>
            <td><code>"__"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
        </tr>
    </tbody>
</table>

### Errata

* Ruby uses a different set of privacy modifiers and concepts than most other languages. Emulating them is currently out of scope.
* `"public"`, `"protected"`, and `"private"` are already keywords in some languages. They should not be used as instanceName regardless of the privacy option.
