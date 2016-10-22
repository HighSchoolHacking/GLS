# Native Exceptions

These are the supported native exceptions. 
The exception types represented here are those that had a counterpart in each languages.

## Exceptions

<table>
    <thead>
        <th>Name</th>
        <th>Description</th>
    </thead>
        <tr>
            <td>Index Error</td>
            <td>The specified array index can not be reached.</td>
        </tr>
        <tr>
            <td>Reference Error</td>
            <td>Thrown when attempting to de-reference an invalid reference.</td>
        </tr>
</table>

## Langauge Syntax

<table>
    <thead>
        <th>Language</th>
        <th>Index Error</th>
        <th>Referance Error</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"IndexOutofRangeException"</code></td>
            <td><code>"NullReferenceException"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"ArrayIndexOutOfBoundsException"</code></td>
            <td><code>"NullPointerException"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"RangeError"</code></td>
            <td><code>"NameError"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"IndexError"</code></td>
            <td><code>"UnboundLocalError"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"RangeError"</code></td>
            <td><code>"ReferenceError"</code></td>
        </tr>
    </tbody>
</table>

## Errata
- This list is not fully incluseive of all exception types across all languages.
- Most exceptions are language specific and have no meaningful counterpart in other languages.
