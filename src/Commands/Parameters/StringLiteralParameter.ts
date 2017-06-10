import { Parameter } from "./Parameter";

/**
 * A string literal parameter.
 */
export class StringLiteralParameter extends Parameter {
    /**
     * The name of the string literal.
     */
    public name: string;

    /**
     * Initializes a new instance of the StringLiteralParameter class.
     * 
     * @param descriptor   A plain-text description of the parameter.
     * @param parameters   Parameters contained inside.
     */
    constructor(name: string, description: string) {
        super(description);

        this.name = name;
    }
}
