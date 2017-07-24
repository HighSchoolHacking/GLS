# Member Variable Retrieval

## Feature Overview

Classes may define member variables that each instance of that class contains.
Class instances may retrieve those variables.

Many languages, such as C# and Java, guarantee class instances are created with space for each member.
More dynamic languages may declare members without guaranteeing their existence (TypeScript).
Others such as Python and Ruby forgo declaring them altogether under certain conditions.


## Commands

### `member variable`

`member variable` `:` *`[privacy]`* `instanceName` `variableName`

Retrieving a member variable will be done with the `member variable` command.
This takes in the variable's privacy optionally, then the instance name and variable name.

Privacy may be `"public"`, `"protected"`, or `"private"`, and defaults to `public"` if not provided.
For languages that don't support privacy, variable name may receive a prefix as per the language's convention.

### `member variable declare`

`member variable declare` `:` *`[privacy]`* `name` `type`

Declaring a member variable will be done with the `member variable declare` command.
This takes in the variable's privacy, name, and type.

Privacy may be `"public"`, `"protected"`, or `"private"`, and defaults to `public"` if not provided.
For languages that don't support privacy, variable name may receive a prefix as per the language's convention.

Some languages don't declare member variables in some or all circumstances. These will consider the `member variable declare` command a no-op.


## Usage

```gls
member variable declare : public name string
member variable declare : protected age int
member variable declare : private gender string
```

```gls
member variable : person name
member variable : public person name
member variable : protected { this } age
member variable : private { this } gender
```

### CSharp

```csharp
public string Name;
protected int Age;
private string gender;
```

```csharp
person.Name;
person.Name;
this.Age;
this.gender;
```

### Java

```java
public string name;
protected int age;
private string gender;
```

```java
person.name;
person.name;
this.age;
this.gender;
```

### Python

```python
```

```python
person.name;
person.name;
this._age;
this.__gender;
```

### Ruby

```ruby
```

```ruby
person.name;
person.name;
this.age;
this.gender;
```

### TypeScript

```typescript
public name: string;
protected age: number;
private gender: string;
```

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
            <td>MemberVariablePublic</td>
            <td><code>string</code></td>
            <td>Decorator for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePublicCase</td>
            <td><code>CaseStyle</code></td>
            <td>Casing modifier for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePublicPrefix</td>
            <td><code>string</code></td>
            <td>Prefix for public member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtected</td>
            <td><code>string</code></td>
            <td>Decorator for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtectedCase</td>
            <td><code>CaseStyle</code></td>
            <td>Casing modifier for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariableProtectedPrefix</td>
            <td><code>string</code></td>
            <td>Prefix for protected member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivate</td>
            <td><code>string</code></td>
            <td>Decorator for private member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivateCase</td>
            <td><code>CaseStyle</code></td>
            <td>Casing modifier for private member variables.</td>
        </tr>
        <tr>
            <td>MemberVariablePrivatePrefix</td>
            <td><code>string</code></td>
            <td>Prefix for private member variables.</td>
        </tr>
        <tr>
            <td>SkipMemberVariables</td>
            <td><code>boolean</code></td>
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
        <th>MemberVariablePublicPrefix</th>
        <th>MemberVariableProtected</th>
        <th>MemberVariableProtectedCase</th>
        <th>MemberVariableProtectedPrefix</th>
        <th>MemberVariablePrivate</th>
        <th>MemberVariablePrivateCase</th>
        <th>MemberVariablePrivatePrefix</th>
        <th>SkipMemberVariables</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"public "</code></td>
            <td><code>PascalCase</code></td>
            <td><code>""</code></td>
            <td><code>"protected "</code></td>
            <td><code>PascalCase</code></td>
            <td><code>""</code></td>
            <td><code>"private "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"public "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>"protected "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>"private "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>""</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>SnakeCase</code></td>
            <td><code>"_"</code></td>
            <td><code>""</code></td>
            <td><code>SnakeCase</code></td>
            <td><code>"__"</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"public "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>"protected "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>"private "</code></td>
            <td><code>CamelCase</code></td>
            <td><code>""</code></td>
            <td><code>false</code></td>
        </tr>
    </tbody>
</table>

### Errata

* Ruby does not support default member values, so GLS does not.
* Python does not support declaring member variables without a default value. Because of Ruby's restrictions, there is no situation for which Python will declare a member variable via GLS.
* Ruby uses a different set of privacy modifiers and concepts than most other languages. Emulating them is currently out of scope.
* `"public"`, `"protected"`, and `"private"` are already keywords in some languages. They should not be used as instanceName regardless of the privacy option.
