import { IGlsNode } from "../../../Tokenization/Nodes/IGlsNode";

/**
 * Some parameter(s) to be passed to a command.
 */
export interface IParameter {
    /**
     * @returns Whether this parameter is required.
     */
    isRequired(): boolean;

    /**
     * Validates whether a command's args match this requirement.
     *
     * @param args   All args of a command.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns A new input position following all valid inputs.
     */
    validate(args: IGlsNode[], inputPosition: number, requirements: IParameter[], requirementPosition: number): number;
}
