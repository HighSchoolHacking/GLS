import { CommandNode } from "../Tokenization/Nodes/CommandNode";
import { IParameter } from "./Commands/Metadata/Parameters/Parameter";

/**
 * Validates whether input parameters match command requirements.
 */
export class ParametersValidator {
    /**
     * Validates parameter inputs match their command requirements.
     *
     * @param node   Command node with args from a source file.
     * @param requirements   Required parameters for a command.
     */
    public validate(node: CommandNode, requirements: IParameter[]): void {
        // The first input should be a command name
        let inputPosition = 0;

        for (let i = 0; i < requirements.length; i += 1) {
            const requirement = requirements[i];

            inputPosition = requirement.validate(node, inputPosition, requirements, i);
        }
    }
}
