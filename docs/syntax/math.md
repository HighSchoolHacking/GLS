# Math

Most simple math operations are doable with the `operation` command. It takes in an odd number of parameters, alternating between values \(which can be either direct numbers or variable names\) and operators. Operators are given as plain names with spaces between words. The supported operators are:

<table>
    <thead>
        <th>GLS Syntax</th>
        <th>Common Equivalent</th>
    </thead>
    <tbody>
        <tr>
            <td>and</td>
            <td><code>&&</code></td>
        </tr>
        <tr>
            <td>decrease by</td>
            <td><code>-=</code></td>
        </tr>
        <tr>
            <td>divide</td>
            <td><code>&#47;</code></td>
        </tr>
        <tr>
            <td>divide by</td>
            <td><code>&#47;=</code></td>
        </tr>
        <tr>
            <td>equal to</td>
            <td><code>=</code></td>
        </tr>
        <tr>
            <td>equals</td>
            <td><code>==</code></td>
        </tr>
        <tr>
            <td>greater than</td>
            <td><code>&gt;</code></td>
        </tr>
        <tr>
            <td>greater than or equal to</td>
            <td><code>&gt;=</code></td>
        </tr>
        <tr>
            <td>increase by</td>
            <td><code>+=</code></td>
        </tr>
        <tr>
            <td>less than</td>
            <td><code>&lt;</code></td>
        </tr>
        <tr>
            <td>less than or equal to</td>
            <td><code>&lt;=</code></td>
        </tr>
        <tr>
            <td>minus</td>
            <td><code>-</code></td>
        </tr>
        <tr>
            <td>mod</td>
            <td><code>%</code></td>
        </tr>
        <tr>
            <td>multiply by</td>
            <td><code>*=</code></td>
        </tr>
        <tr>
            <td>not</td>
            <td><code>!</code></td>
        </tr>
        <tr>
            <td>not equal to</td>
            <td><code>!=</code></td>
        </tr>
        <tr>
            <td>or</td>
            <td><code>||</code></td>
        </tr>
        <tr>
            <td>plus</td>
            <td><code>+</code></td>
        </tr>
        <tr>
            <td>times</td>
            <td><code>*</code></td>
        </tr>
    </tbody>
</table>

> Recall that parenthesis are required for arguments with spaces: including operator aliases.

The `parenthesis` command is also commonly used with math. It takes a single argument and wraps it in `()` parentheses.

```
operation : foo times 2
operation : foo (decrease by) bar times { parenthesis : { operation : bar minus 3 } }
variable : bar number { operation : foo (divide by) 3 plus 4 times foo }
```

In C\#:

```csharp
foo *= 2;
foo -= bar * (bar - 3);
float bar = foo /= 3 + 4 * foo;
```

In Python:

```python
foo *= 2
foo -= bar * (bar - 3)
bar = foo /= 3 + 4 * foo
```

### Number Types

Some languages recognize a difference between integers, doubles, floats, and other number types. Some do not. For feature parity between other languages, GLS recognizes only `int` and `float` as valid number types. `double`, `long`, `ushort`, and so on are not supported.

### Native Commands

All supported languages provide some amount of built-in math operations beyond the simple arithmetic operators. These are typically encapsulated in some kind of global `Math` object and/or system namespace that contains simple functions and constants.

GLS abstracts away the differences in these "native" commands. For example:

```
math max : foo bar
```

* In C\#: `Math.Max(foo, bar)`
* In Python: `max(foo, bar)`

All possible native math commands are given below.

<table>
    <thead>
        <th>GLS Syntax</th>
        <th>Common Equivalent</th>
    </thead>
    <tbody>
        <tr>
            <td>math absolute</td>
            <td><code>math.abs()</code></td>
        </tr>
        <tr>
            <td>math ceiling</td>
            <td><code>math.ceil()</code></td>
        </tr>
        <tr>
            <td>math floor</td>
            <td><code>math.floor()</code></td>
        </tr>
        <tr>
            <td>math max</td>
            <td><code>math.max()</code></td>
        </tr>
        <tr>
            <td>math min</td>
            <td><code>math.min()</code></td>
        </tr>
        <tr>
            <td>math power</td>
            <td><code>math.pow()</code></td>
        </tr>
    </tbody>
</table>


