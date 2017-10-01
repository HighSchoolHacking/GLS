import { IParameter } from "../Commands/Metadata/Parameters/Parameter";

/**
 * Validates whether input parameters match command requirements.
 */
export class ParametersValidator {
    /**
     * Validates parameter inputs match their command requirements.
     *
     * @param inputs   Input parameters from a source file.
     * @param requirements   Required parameters for a command.
     */
    public validate(inputs: string[], requirements: IParameter[]): void {
        // The first input should be a command name
        let inputPosition = 1;

        for (let i = 0; i < requirements.length; i += 1) {
            const requirement = requirements[i];

            inputPosition = requirement.validate(inputs, inputPosition, requirements, i);
        }
    }
}
