# Member Variable Retrieval

## Feature Overview

Classes may define member variables that each instance of that class contains.
Class instances may retrieve those variables.

Many languages, such as C# and Java, guarantee class instances are created with space for each member.
More dynamic languages may declare members without guaranteeing their existence (TypeScript).
Others such as Python and Ruby forgo declaring them altogether under certain conditions.


## Commands

### `member variable declare`

`member variable declare` `:` *`[privacy]`* `name` `type`

Declaring a member variable will be done with the `member variable declare` command.
This takes in the variable's privacy, name, and type.

Privacy may be `"public"`, `"protected"`, or `"private"`.
The variable name may be modified as per the language's convention.

Some languages don't declare member variables in some or all circumstances. These will consider the `member variable declare` command a no-op.
It should be written in GLS in `camelCase`.

### `member variable`

`member variable` `:` `[privacy]` `instanceName` `variableName`

Retrieving a member variable will be done with the `member variable` command.
This takes in the variable's privacy, instance name, and variable name.

Privacy may be `"public"`, `"protected"`, or `"private"`.
The variable name may be modified as per the language's convention.
It should be written in GLS in `camelCase`.


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
person.name
person.name
this._age
this.__gender
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


## Errata

* Ruby does not support default member values, so GLS does not.
* Python does not support declaring member variables without a default value. Because of Ruby's restrictions, there is no situation for which Python will declare a member variable via GLS.
* Ruby uses a different set of privacy modifiers and concepts than most other languages. Emulating them is currently out of scope.
* `"public"`, `"protected"`, and `"private"` are already keywords in some languages. They can not be used as instanceName regardless of the privacy option.
