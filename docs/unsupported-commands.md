# Unsupported Commands

When compilers such as [CS-Budgie](https://budgielang/CS-Budgie) or [ts-budgie](https://budgielang/ts-budgie)
find code that cannot be converted to Budgie, they emit a complaint via the `unsupported` command.
Budgie will complain during compilation if it sees one of these commands.

For example, in attempting to convert this C# `switch` statement to Budgie with CS-Budgie:

```csharp
class Suffixer
{
    public string GetSuffix(int count)
    {
        switch (value)
        {
            case 1:
                return "st";

            case 2:
                return "nd";

            case 3:
                return "rd";

            default:
                return "th";
        }
    }
}
```

Budgie [cannot support `switch` statements](./omissions.md), so it complains:

```budgie
class start : Suffixer
    member function declare start : public GetSuffix string count int
        unsupported : (Budgie does not support switch statements.)
    member function declare end
class end
```
