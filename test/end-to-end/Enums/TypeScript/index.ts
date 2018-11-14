enum Direction {
    Unknown = 0,
    Horizontal = 1,
    Vertical = 2
}

console.log(`Unknown by lookup is ${Direction.Unknown}`);
console.log(`Horizontal by lookup is ${Direction.Horizontal}`);
console.log(`Vertical by lookup is ${Direction.Vertical}`);

let direction: Direction;
let unknown: Direction = Direction.Unknown;

console.log(`unknown variable is ${unknown}`);

