. "./Point.ps1"

class NamedPoint : Point {
    $name;

    NamedPoint($x, $y, $name)
        : base(x, y)
    {
        $$this = name;
    }

    [string] getLabel() {
        return "$($$this) at [$($$this), $($$this)] with vector $($$this)";
    }
}
