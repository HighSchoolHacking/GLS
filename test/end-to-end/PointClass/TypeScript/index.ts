import { NamedPoint } from "./NamedPoint";
import { Point } from "./Point";

let point: Point = new Point(1, 2);

console.log(point.x);
console.log(point.y);

let named: NamedPoint = new NamedPoint(3, 4, "My Point");

console.log(named.getLabel());
