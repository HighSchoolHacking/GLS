import { IGlsNode } from "../Nodes/IGlsNode";

// tslint:disable

export class ParseStackContext {
    private children: IGlsNode[];

    private startingCharacter: string;

    public constructor(startingCharacter: string) {
        this.startingCharacter = startingCharacter;
        this.children = [];
    }

    public addChild(node: IGlsNode) {
        this.children.push(node);
    }

    public getStartingCharacter(): string {
        return this.startingCharacter;
    }
}
