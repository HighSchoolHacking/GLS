# Do While

A loop that runs at least once before checking for an end condition.


## Commands

### `do start`

`do start`

Opens a do while block.

### `do while`

`do while : conditional`

Closes a do while block.
The parameter is a condition to be checked on whether to continue running the loop.

## Usage

```gls
do start
do while : true
```

### CSharp

```csharp
do
{
} while(true);
```

### Java

```java
do
{
} while(true);
```


### Ruby

```ruby
begin
end while true
```

### TypeScript

```typescript
do
{
} while true;
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
            <td>DoStartLeft</td>
            <td><code>string</code></td>
            <td>Language-specific 'do' call.</td>
        </tr>
        <tr>
            <td>DoStartRight</td>
            <td><code>string</code></td>
            <td>Ends the first line and opens the do block.</td>
        </tr>
        <tr>
            <td>DoWhileLeft</td>
            <td><code>string</code></td>
            <td>Closes the do block, and ends the do call.</td>
        </tr>
        <tr>
            <td>DoWhileMiddle</td>
            <td><code>string</code></td>
            <td>Begins while function</td>
        </tr>
        <tr>
            <td>DoWhileRight</td>
            <td><code>string</code></td>
            <td>Ends while function</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>DoStartLeft</th>
        <th>DoStartRight</th>
        <th>DoWhileLeft</th>
        <th>DoWhileMiddle</th>
        <th>DoWhileRight</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"do"</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"} while"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"do"</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"} while"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"begin"</code></td>
            <td><code>""</code></td>
            <td><code>"end while"</code></td>
            <td><code>" "</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"do"</code></td>
            <td><code>"\n{"</code></td>
            <td><code>"} while"</code></td>
            <td><code>"("</code></td>
            <td><code>")"</code></td>
        </tr>
    </tbody>
</table>

### Errata

* Python does not support any variant of do/while loops.
