# Omissions

GLS intentionally targets a "lowest common denominator" of features for common OOP languages.

## Intentionally Missing Features

If any target language doesn't reasonably support a feature, GLS cannot support that feature.

| Feature | C\# | Java | JavaScript | Python | Ruby | TypeScript |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| async/await |  | _Missing_ |  |  | _Missing_ |  |
| Default Member Variable Values |  |  | [_Pending_](https://github.com/tc39/proposal-class-fields) |  |  |  |
| Static Member Variables |  |  | [_Pending_](https://github.com/tc39/proposal-class-fields) |  |  |  |
| Do/While Loops |  |  |  | _Missing_ |  |  |
| Enums Without Values |  |  |  |  | _Missing_ |  |
| Multiline Lambdas |  |  |  | _Missing_ |  |  |
| Optional Parameters |  | _Missing_ |  |  |  |  |
| Overloaded Functions |  |  | _Missing_ | _Missing_ | _Missing_ | _Missing_ |
| String.Replace |  |  | _Abnormal_ |  |  | _Abnormal_ |
| Switch Statements |  |  |  | _Missing_ |  |  |

## Intentionally Unsupported Languages

Not all languages work similarly to the supported ones. These will likely never receive GLS support, for the following common reasons \(among others\):

| Language | Manual Pointers | Unusual Classes | Unusual Returns |
| :--- | :--- | :--- | :--- |
| C | ✓ | ✓ |  |
| C++ | ✓ |  |  |
| Go |  | ✓ |  |
| Matlab |  |  | ✓ |
| Rust | ✓ |  |  |

This list will grow as languages are requested.

