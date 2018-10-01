# Languages

There are six "tiers" of langauges recognized by GLS:

1. [Unknown](#unknown)
2. [Unsupported](#unsupported)
3. [Best Guess](#best%20guess)
4. [Output Only](#output%20only)
5. [Partial Input](#partial%20input)
6. [Full](#full)

## Unknown

These languages each need to be investigated and assigned a higher tier.

<table>
    <thead>
        <th>Language</th>
        <th>Issue</th>
    </thead>
    <tr>
        <th>D</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/361">#361</a></td>
    </tr>
    <tr>
        <th>emojicode</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/429">#429</a></td>
    </tr>
    <tr>
        <th>Groovy</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/454">#454</a></td>
    </tr>
    <tr>
        <th>Haxe</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/247">#247</a></td>
    </tr>
    <tr>
        <th>Kotlin</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/453">#453</a></td>
    </tr>
    <tr>
        <th>LLVM</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/381">#381</a></td>
    </tr>
    <tr>
        <th>LOLCODE</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/267">#267</a></td>
    </tr>
    <tr>
        <th>Objective C</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/191">#191</a></td>
    </tr>
    <tr>
        <th>PHP</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/102">#102</a></td>
    </tr>
    <tr>
        <th>Powershell</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/103">#103</a></td>
    </tr>
    <tr>
        <th>sh</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/436">#436</a></td>
    </tr>
    <tr>
        <th>Swift</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/105">#105</a></td>
    </tr>
    <tr>
        <th>Visual Basic</th>
        <td><a href="https://github.com/general-language-syntax/GLS/issues/439">#439</a></td>
    </tr>
</table>

## Unsupported

<table>
    <thead>
        <th>Language</th>
        <th>Unusual Classes</th>
        <th>Unusual Returns</th>
    </thead>
    <tr>
        <th>C</th>
        <td>✓</td>
        <td></td>
    </tr>
    <tr>
        <th>Go</th>
        <td>✓</td>
        <td></td>
    </tr>
    <tr>
        <th>Matlab</th>
        <td></td>
        <td>✓</td>
    </tr>
</table>

Some languages will enver be able to be accurately compiled to by GLS because of severe structural abnormalities in the language's design.
These languages are so different from the norm that any attempt to output them from GLS would be horrendously overcomplicated and inaccurate.

These languages will never be output by GLS for the following common reasons _(among others)_:

## Best Guess

Some languages will never be able to be accurately compiled to by GLS, but the compiler can roughly come close.

These languages will never be guaranteed accurate GLS output for the following common reasons _(among others)_:

<table>
    <thead>
        <th>Language</th>
        <th>Manual Pointers</th>
    </thead>
    <tr>
        <th>C++</th>
        <td>✓</td>
    </tr>
</table>

### Why Try?

There are still some cases where it may be useful to have near-working output in an unsupported language.
For example, when using GLS for snippets of code as sample answer guidelines to coding interview questions, it's not necessary for the result to be provably correct.

> Again: GLS gives no guarantee of code working in these languages.
> They will almost certainly fail at more than a few lines.

## Output Only

<table>
    <thead>
        <th>Language</th>
    </thead>
    <tbody>
        <tr>
            <th>JavaScript</th>
        </tr>
        <tr>
            <th>Ruby</th>
        </tr>
        <tr>
            <th>Python</th>
        </tr>
    </tbody>
</table>

These languages can be fully output by GLS but don't provide rich enough type information in their syntax to be statically converted to GLS.

## Partial Input

<table>
    <thead>
        <th>Language</th>
        <th>Compiler</th>
        <th>
            <code>int</code> vs <code>float</code>
        </th>
    </thead>
    <tbody>
        <tr>
            <th>TypeScript</th>
            <td><a href="https://github.com/general-language-syntax/TS-GLS">TS-GLS</a></td>
            <td><em>Missing</em></td>
        </tr>
    </tbody>
</table>

These languages may be generally compiled from their native source code to GLS with a "best guess" approximation of the equivalent GLS code.
They must have some kind of gradual or even static typing, but are not required to fully support differences between all GLS types.

## Full

<table>
    <thead>
        <th>Language</th>
        <th>Compiler</th>
    </thead>
    <tr>
        <th>C#</th>
        <td><a href="https://github.com/general-language-syntax/CS-GLS">CS-GLS</a></td>
    </tr>
    <tr>
        <th>Java</th>
        <td><em>(not started)</em></td>
    </tr>
</table>

These languages are capable of being compiled from their native source code to GLS and then back out to any supported language.

In order for a language to be fully supported, it must:

* Completely support static typings via a programmable AST.
* Recognize differences between all GLS types, including `int` vs. `float`.
