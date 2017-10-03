import { KeywordParameter } from "./KeywordParameter";
import { IParameter } from "./Parameter";

/**
 * Some number of repeating parameters.
 */
export class RepeatingParameters implements IParameter {
    /**
     * A plain-text description of this parameter.
     */
    public description: string;

    /**
     * Parameters contained inside.
     */
    public parameters: IParameter[];

    /**
     * Initializes a new instance of the RepeatingParameter class.
     *
     * @param descriptor   A plain-text description of the parameter.
     * @param parameters   Parameters contained inside.
     */
    public constructor(description: string, parameters: IParameter[]) {
        this.description = description;
        this.parameters = parameters;
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
        const endIndex = this.getEndingIndex(inputs, inputPosition, requirements, requirementPosition);
        const repeatedCount = endIndex - inputPosition;

        if (repeatedCount % this.parameters.length !== 0) {
            throw new Error(`Expected a multiple of ${this.parameters.length} repeating parameters but got ${repeatedCount}.`);
        }

        return endIndex;
    }

    /**
     * Finds an index of a matched keyword parameter following a repeating parameter.
     *
     * @param inputs   All raw parameter inputs.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns Index of a matched keyword parameter, or -1 if no match is found.
     */
    private doesNextCommandMatchKeywordParameter(inputs: string[], inputPosition: number, requirements: IParameter[], requirementPosition: number): number {
        const nextRequirement = requirements[requirementPosition + 1];

        if (nextRequirement instanceof KeywordParameter) {
            for (let i = inputPosition; i < inputs.length; i += 1) {
                if (nextRequirement.literals.has(inputs[i])) {
                    return i;
                }
            }
        }

        return -1;
    }

    /**
     * Computes when repeating parameter inputs end.
     *
     * @param inputs   All raw parameter inputs.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns A new input position following all valid inputs.
     */
    private getEndingIndex(inputs: string[], inputPosition: number, requirements: IParameter[], requirementPosition: number): number {
        // If the last requirement is a repeating parameter, all subsequent inputs are acceptable
        if (requirementPosition === requirements.length - 1) {
            return inputs.length;
        }

        // Termination case: if the next command is a KeywordParameter
        const keywordMatchIndex = this.doesNextCommandMatchKeywordParameter(inputs, inputPosition, requirements, requirementPosition);
        if (keywordMatchIndex !== -1) {
            return keywordMatchIndex;
        }

        // Termination case: there are too many remaining required parameters
        return inputs.length - this.getRemainingRequiredParameters(requirements, requirementPosition);
    }

    /**
     * Computes how many required parameters are left.
     *
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns How many required parameters are left.
     */
    private getRemainingRequiredParameters(requirements: IParameter[], requirementPosition: number): number {
        let remainingRequiredParameters = 0;

        for (let i = requirementPosition; i < requirements.length; i += 1) {
            const requirement = requirements[i];

            if (requirement.isRequired()) {
                remainingRequiredParameters += 1;
            }
        }

        return remainingRequiredParameters;
    }
}
