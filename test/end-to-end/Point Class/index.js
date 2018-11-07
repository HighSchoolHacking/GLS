//
const { NamedPoint } = require("./Namedpoint");
const { Point } = require("./Point");

let point = new Point(1, 2);

console.log(point.x);
console.log(point.y);

let named = new NamedPoint(3, 4, "My Point");

console.log(named.getLabel());
//
