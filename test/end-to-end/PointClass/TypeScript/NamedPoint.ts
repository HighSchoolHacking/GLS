import { Point } from "./Point";

export class NamedPoint extends Point {
    private name: string;

    public constructor(x: number, y: number, name: string) {
        super(x, y);
        this.name = name;
    }

    public getLabel(): string {
        return `${this.name} at [${this.x}, ${this.y}] with vector ${this.vector}`;
    }
}
