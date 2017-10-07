import { IParameter } from "./Parameter";

/**
 * A single named parameter.
 */
export class SingleParameter implements IParameter {
    /**
     * A plain-text description of this parameter.
     */
    public description: string;

    /**
     * The name of this parameter.
     */
    public name: string;

    /**
     * Whether this must be provided.
     */
    public required: boolean;

    /**
     * Initializes a new instance of the SingleParameter class.
     *
     * @param descriptor   A plain-text description of the parameter.
     * @param parameters   Parameters contained inside.
     * @param required   Whether this must be provided.
     */
    public constructor(name: string, description: string, required: boolean) {
        this.name = name;
        this.description = description;
        this.required = required;
    }

    /**
     * @returns Whether this parameter is required.
     */
    public isRequired(): boolean {
        return this.required;
    }

    /**
     * Validates whether parameter inputs match this requirement.
     *
     * @param inputs   All raw parameter inputs.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns A new input position following all valid inputs.
     */
    public validate(inputs: string[], inputPosition: number, requirements: IParameter[], requirementPosition: number): number {
        if (this.required && inputPosition >= inputs.length) {
            throw new Error(`Missing parameter: '${this.name}'`);
        }

        return inputPosition + 1;
    }
}
