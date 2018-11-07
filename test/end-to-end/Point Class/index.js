//
const { NamedPoint } = require("./namedpoint");
const { Point } = require("./point");

let point = new Point(1, 2);

console.log(point.x);
console.log(point.y);

let named = new NamedPoint(3, 4, "My Point");

console.log(named.getLabel());
//
