# Member Variable Retrieval

## Feature Overview

Classes may define member functions that may be called on instances of that class.


## Commands

### `member function declare start`

`member function declare start` `:` *`[privacy]`* `functionName` `returnType` *`[parameterName, parameterType, ...]` `throws` `[possibleExceptionType, ...]`*

Privacy may be `"public"`, `"protected"`, or `"private"`.
The function name may be modified as per the language's convention.
It should be written in GLS in `PascalCase`.

Member functions are ended with `member function declare end`.

### `member function` : *`[privacy]`* `instanceName` `functionName` *`[parameterName, parameterType, ...]`*

Calling a member function is done with `member function`.
Privacy may be `"public"`, `"protected"`, or `"private"`.
The function name may be modified as per the language's convention.
It should be written in GLS in `PascalCase`.


## Usage

```gls
member function declare start : public SetName void newName string
member function declare end

member variable declare : protected JoinNames string firstName string lastName string
member function declare end

member variable declare : private DangerousOperation void throws Exception
member function declare end
```

```gls
member function : public person SetName "Mark"
member function : protected { this } JoinNames "first" "last"
member function : private { this } DangerousOperation
```

### CSharp

```csharp
public void SetName(string newName)
{
}

protected string JoinNames(string firstName, string lastName)
{
}

private void DangerousOperation()
{
}
```

```csharp
person.SetName("Mark");
this.JoinNames("first", "last");
this.DangerousOperation();
```

### Java

```java
public void setName(string newName) {
}

protected string joinNames(string firstName, string lastName) {
}

private void DangerousOperation() throws Exception {
}
```

```java
person.setName("Mark");
this.joinNames("first", "last");
this.dangerousOperation();
```

### JavaScript

```javascript
setName(newName) {
}

joinNames(firstName, lastName) {
}

dangerousOperation() {
}
```

```javascript
person.setName("Mark");
this.joinNames("first", "last");
this.dangerousOperation();
```

### Python

```python
def setName(newName):

def joinNames(firstName, lastName):

def dangerousOperation():
```

```python
person.setName("Mark")
self._joinNames("first", "last")
self.__dangerousOperation()
```

### Ruby

```ruby
def setName(newName)
end

def joinNames(firstName, lastName)
end

def dangerousOperation()
end
```

```ruby
person.setName("Mark");
this.joinNames("first", "last");
this.dangerousOperation();
```

### TypeScript

```typescript
public setName(newName: string): void {
}

protected joinNames(firstName: string, lastName: string): string {
}

private dangerousOperation(): void {
}
```

```typescript
person.setName("Mark");
this.joinNames("first", "last");
this.dangerousOperation();
```


## Errata

* Ruby uses a different set of privacy modifiers and concepts than most other languages. Emulating them is planned but currently out of scope.
