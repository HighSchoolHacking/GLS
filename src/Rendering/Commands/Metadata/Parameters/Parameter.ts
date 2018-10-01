import { CommandNode } from "../../../../Tokenization/Nodes/CommandNode";

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
     * @param node   Command node with args from a source file.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns A new input position following all valid inputs.
     */
    validate(command: CommandNode, inputPosition: number, requirements: IParameter[], requirementPosition: number): number;
}
