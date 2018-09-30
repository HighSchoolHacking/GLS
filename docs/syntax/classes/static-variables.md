# Static Variables

GLS syntax for static variables behaves almost identically to the member equivalents.
Accessing them takes in the class name instead of an instance reference.

Additionally, static members may declare an initial value as a final parameter.

```gls
class start : AnglePrinter
    static variable declare : private rightAlias string "right"
    static variable declare : private rightAmount int 90

    member function declare start : public PrintAngle string angle int
        if start : { operation : angle (equal to) { static variable : private AnglePrinter rightAmount } }
            return : { static variable : private AnglePrinter rightAlias }
        if end

        return : { string format : ("{0} degrees") angle int }
    member function declare end
class end
```

In C#:

```csharp
class AnglePrinter
{
    private static string rightAlias = "right";
    private static int rightAmount = 90;

    public string PrintAngle(int angle)
    {
        if (angle == AnglePrinter.rightAmount)
        {
            return AnglePrinter.rightAlias;
        }

        return string.Format("{0} degrees", angle);
    }
}
```

In Python:

```python
class AnglePrinter:
    __right_alias = "right"
    __right_amount = 90

    def print_angle(angle):
        if angle == AnglePrinter.__right_amount:
            return AnglePrinter.__right_alias

        return "{0} degrees".format(angle)
```
