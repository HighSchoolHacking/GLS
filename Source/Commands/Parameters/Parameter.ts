/**
 * Some parameter(s) to be passed to a command.
 */
export abstract class Parameter {
    /**
     * A plain-text description of this parameter.
     */
    public description: string;

    /**
     * Initializes a new instance of the Parameter class.
     * 
     * @param descriptor   A plain-text description of the parameter.
     */
    constructor(description: string) {
        this.description = description;
    }
}
