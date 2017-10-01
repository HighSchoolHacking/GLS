/**
 * Some parameter(s) to be passed to a command.
 */
export interface IParameter {
    /**
     * @returns Whether this parameter is required.
     */
    isRequired(): boolean;

    /**
     * Validates whether parameter inputs match this requirement.
     *
     * @param inputs   All raw parameter inputs.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns A new input position following all valid inputs.
     */
    validate(inputs: string[], inputPosition: number, requirements: IParameter[], requirementPosition: number): number;
}
