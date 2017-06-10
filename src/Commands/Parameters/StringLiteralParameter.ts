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
     * @param name          The name of the string literal.
     * @param description   A high-level definition of the parameter.
     */
    constructor(name: string, description: string) {
        super(description);

        this.name = name;
    }
}
