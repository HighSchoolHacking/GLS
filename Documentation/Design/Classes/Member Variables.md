# Member Variables

## Feature Overview

Classes may define member variables that each instance of that class contains.

Many languages (e.g. C# and Java) guarantee class instances are created with space for each member.
More dynamic languages may declare members without guaranteeing their existence (TypeScript).
Others forgo declaring them altogether (Python, Ruby) unless a default initial value is specified.



## Commands

### `member variable declare`

`member variable declare` `:` `privacy` `name` `type`*`[, defaultValue]`*

Declaring a member variable will generally be done with the `member variable declare` command.
This takes in the variable's privacy, name, type, and optionally a default initial value.

Privacy may be `"public"`, `"protected"`, or `"private"`.
For languages such as Python that don't support privacy, the privacy keyword may prepend to the name as per the language's convention.

### `member variable declare start`

`member variable declare start` `:` `privacy` `name` `type` `defaultValueStart`

Declaring a member variable across lines, such as for large in-place dictionary or array initializations, is done with the `member variable declare start` command.
This takes in the variable's privacy, name, type, and a start of its default value.

Privacy is the same as in `member variable declare`.

### `member variable declare end`

`member variable declare end` `:` `defaultValueEnd`

Completing a member variable declaration across lines is done with the `member variable declare end` command.


## Usage

```
member variable declare : public name string
member variable declare : protected age int 0 
member variable declare : private gender string

member variable declare start : public sizes { dictionary type : string int } { dictionary new start : string { dictionary type : string int } }
    dictionary pair : "shirt" 0 ,
    dictionary pair : "shoes" 0
member variable declare end 
```

### CSharp

```csharp
public string Name;
protected int Age = 0;
private string gender;

public Dictionary<string, int> Sizes = new Dictionary<string, int>
{
    { "shirt", 0 },
    { "shoes", 0 }
};
```

### Java

```java
public string name;
protected int age = 0;
private string gender;

public HashMap<string, int> sizes = new HashMap<string, int>() {{
    put("shirt", 0);
    put("shoes", 0);
}};
```

### Python

```python
age = 0

sizes = {
    "shirt": 0,
    "shoes": 0
}
```
*(something like that)*

### Ruby

```ruby
who the hell knows?
```

### TypeScript

```typescript
public name: string;
protected age: number = 0;
private gender: string;

public sizes: { [i: string]: number } = {
    "shirt": 0,
    "shoes": 0
};
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
            <td>`PascalCase` | `CamelCase` | `Underline`</td>
            <td>Casing modifier for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtected</td>
            <td>`string`</td>
            <td>Prefix for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtectedCase</td>
            <td>`PascalCase` | `CamelCase` | `Underline`</td>
            <td>Casing modifier for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivate</td>
            <td>`string`</td>
            <td>Prefix for private member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivateCase</td>
            <td>`PascalCase` | `CamelCase` | `Underline`</td>
            <td>Casing modifier for private member variables.</td>
        </tr>
        <tr>
            <td>SkipBlankMemberVariables</td>
            <td>`boolean`</td>
            <td>Whether member variables without values should be skipped.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Public</th>
        <th>Protected</th>
        <th>Private</th>
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
        </tr>
        <tr>
            <th>Java</th>
            <td>`"public "`</td>
            <td>`CamelCase`</td>
            <td>`"protected "`</td>
            <td>`CamelCase`</td>
            <td>`"private "`</td>
            <td>`CamelCase`</td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>???</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
        </tr>
        <tr>
            <th>Python</th>
            <td>`""`</td>
            <td>`?Underline?`</td>
            <td>`"_"`</td>
            <td>`?Underline?`</td>
            <td>`"__"`</td>
            <td>`?Underline?`</td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>`"public "`</td>
            <td>`CamelCase`</td>
            <td>`"protected "`</td>
            <td>`CamelCase`</td>
            <td>`"private "`</td>
            <td>`CamelCase`</td>
        </tr>
    </tbody>
</table>

### Errata

* Python is a little unusual. More research required.
* Ruby is weird and scary. More research required.