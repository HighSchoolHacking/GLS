//
const { Point } = require("./point");

exports.NamedPoint = class NamedPoint extends Point {

    constructor(x, y, name) {
        super(x, y);
        this.name = name;
    }

    getLabel() {
        return `${this.name} at [${this.x}, ${this.y}] with vector ${this.vector}`;
    }
}
//
