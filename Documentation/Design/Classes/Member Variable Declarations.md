# Member Variables

## Feature Overview

Classes may define member variables that each instance of that class contains.

Many languages, such as C# and Java, guarantee class instances are created with space for each member.
More dynamic languages may declare members without guaranteeing their existence (TypeScript).
Others such as Python and Ruby forgo declaring them altogether under certain conditions.



## Commands

### `member variable declare`

`member variable declare` `:` `privacy` `name` `type`

Declaring a member variable will generally be done with the `member variable declare` command.
This takes in the variable's privacy, name, and type.

Privacy may be `"public"`, `"protected"`, or `"private"`.
For languages that don't support privacy, the privacy keyword may prepend to the name as per the language's convention.

Some languages don't declare member variables in some or all circumstances. These will consider the `member variable declare` command a no-op.

## Usage

```
member variable declare : public name string
member variable declare : protected age int
member variable declare : private gender string
```

### CSharp

```csharp
public string Name;
protected int Age;
private string gender;
```

### Java

```java
public string name;
protected int age;
private string gender;
```

### Python

```python
```

### Ruby

```ruby
who the hell knows?
```

### TypeScript

```typescript
public name: string;
protected age: number;
private gender: string;
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
            <td>MemberVariablePublic</td>
            <td>`string`</td>
            <td>Prefix for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePublicCase</td>
            <td>`PascalCase` | `CamelCase` | `SnakeCase`</td>
            <td>Casing modifier for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtected</td>
            <td>`string`</td>
            <td>Prefix for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtectedCase</td>
            <td>`PascalCase` | `CamelCase` | `SnakeCase`</td>
            <td>Casing modifier for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivate</td>
            <td>`string`</td>
            <td>Prefix for private member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivateCase</td>
            <td>`PascalCase` | `CamelCase` | `SnakeCase`</td>
            <td>Casing modifier for private member variables.</td>
        </tr>
        <tr>
            <td>SkipMemberVariables</td>
            <td>`boolean`</td>
            <td>Whether member variables should skip declaration.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>MemberVariablePublic</th>
        <th>MemberVariablePublicCase</th>
        <th>MemberVariableProtected</th>
        <th>MemberVariableProtectedCase</th>
        <th>MemberVariablePrivate</th>
        <th>MemberVariablePrivateCase</th>
        <th>SkipMemberVariables</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>`"public "`</td>
            <td>`PascalCase`</td>
            <td>`"protected "`</td>
            <td>`PascalCase`</td>
            <td>`"private "`</td>
            <td>`CamelCase`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Java</th>
            <td>`"public "`</td>
            <td>`CamelCase`</td>
            <td>`"protected "`</td>
            <td>`CamelCase`</td>
            <td>`"private "`</td>
            <td>`CamelCase`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>???</td>
            <td>`CamelCase`</td>
            <td>???</td>
            <td>`SnakeCase`</td>
            <td>???</td>
            <td>`SnakeCase`</td>
            <td>`false`</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`""`</td>
            <td>`CamelCase`</td>
            <td>`"_"`</td>
            <td>`SnakeCase`</td>
            <td>`"__"`</td>
            <td>`SnakeCase`</td>
            <td>`true`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`"public "`</td>
            <td>`CamelCase`</td>
            <td>`"protected "`</td>
            <td>`CamelCase`</td>
            <td>`"private "`</td>
            <td>`CamelCase`</td>
            <td>`false`</td>
        </tr>
    </tbody>
</table>

### Errata

* Ruby does not support default member values, so GLS does not.
* Python does not support declaring member variables without a default value. Because of Ruby's restrictions, there is no situation for which Python will declare a member variable via GLS.
* Ruby uses a different set of privacy modifiers and concepts than most other languages. Emulating them is currently out of scope.
