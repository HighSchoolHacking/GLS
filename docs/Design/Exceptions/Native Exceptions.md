# Native Exceptions

These are the supported native exceptions. 
This list is not fully incluseive of all exception types across all langauges.
The exception types represented here are those that were most generalizable across multiple languages.

## Exceptions

<table>
    <thead>
        <th>Name</th>
        <th>Description</th>
    </thead>
        <tr>
            <td>Run Time Error</td>
            <td>Generic error thrown when an error is encounterd but not identifiable.</td>
        </tr>
        <tr>
            <td>Arithmetic Overflow  Error</td>
            <td>Error thrown when arithmetic overflow or underflow occurs.</td>
        </tr>
        <tr>
            <td>Divide By Zero Error</td>
            <td>Special cace of arithmentic error for division by zero.</td>
        </tr>
        <tr>
            <td>Index Error</td>
            <td>The specified array index can not be reached.</td>
        </tr>
        <tr>
            <td>Referance Error</td>
            <td>Thrown when attempting to de-referance an invalid referance.</td>
        </tr>
        <tr>
            <td>Syntax Error</td>
            <td>Raised when invalid syntax is encountered.</td>
        </tr>
</table>

## Langauge Syntax

<table>
    <thead>
        <th>Language</th>
        <th>Run Time Error</th>
        <th>Arithmetic Overflow  Error</th>
        <th>Divide By Zero Error</th>
        <th>Index Error</th>
        <th>Referance Error</th>
        <th>Type Error</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"SystemException"</code></td>
            <td><code>"ArithmeticException"</code></td>
            <td><code>"DivideByZeroException"</code></td>
            <td><code>"IndexOutofRangeException"</code></td>
            <td><code>"NullReferenceException"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>""</code></td>
            <td><code>"ArithmeticException"</code></td>
            <td><code>"ArithmeticException"</code></td>
            <td><code>"ArrayIndexOutOfBoundsException"</code></td>
            <td><code>"NullPointerException"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"RuntimeError"</code></td>
            <td><code>""</code></td>
            <td><code>"ZeroDivisionError"</code></td>
            <td><code>"RangeError"</code></td>
            <td><code>"NameError"</code></td>
            <td><code>"SyntaxError"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"RuntimeError"</code></td>
            <td><code>"OverflowError"</code></td>
            <td><code>"ZeroDivisionError"</code></td>
            <td><code>"IndexError"</code></td>
            <td><code>"UnboundLocalError"</code></td>
            <td><code>"SyntaxError"</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>""</code></td>
            <td><code>"RangeError"</code></td>
            <td><code>"ReferenceError"</code></td>
            <td><code>"SyntaxError"</code></td>
        </tr>
    </tbody>
</table>
