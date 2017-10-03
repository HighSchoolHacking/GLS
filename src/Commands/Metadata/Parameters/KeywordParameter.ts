import { IParameter } from "./Parameter";

/**
 * A parameter that's only satisfied by particular string literal(s).
 */
export class KeywordParameter implements IParameter {
    /**
     * A plain-text description of this parameter.
     */
    public description: string;

    /**
     * Allowed matching string literals.
     */
    public literals: Set<string>;

    /**
     * Initializes a new instance of the KeywordParameter class.
     *
     * @param literal   Allowed matching string literals.
     * @param description   A high-level definition of the parameter.
     */
    public constructor(literals: string[], description: string) {
        this.description = description;
        this.literals = new Set(literals);
    }

    /**
     * @returns Whether this parameter is required (false).
     */
    public isRequired(): boolean {
        return false;
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
        // Keywords are assumed to always be optional (and only used to separate repeating parameters)
        return inputPosition + 1;
    }
}
