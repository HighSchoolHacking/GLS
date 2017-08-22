import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";
import { CaseStyle } from "../Languages/Casing/CaseStyle";

/**
 * A command for the beginning of a member function.
 */
export class MemberFunctionCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("privacy", "The privacy of the function.", true),
        new SingleParameter("name", "The name of the function.", true),
        new RepeatingParameters(
            "Function parameters.",
            [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return MemberFunctionCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        let publicity: string = parameters[1];
        let instanceName: string = parameters[2];
        let functionName: string = parameters[3];

        let output: string = instanceName + ".";
        output += this.context.convertStringToCase(functionName, this.getPublicityCase(publicity));
        output += "(";

        if (parameters.length > 4) {
            output += parameters[4];

            for (let i: number = 5; i < parameters.length; i += 1) {
                output += ", ";
                output += parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output, true);
    }

    /**
     * 
     */
    private getPublicityCase(publicity: string): CaseStyle {
        if (publicity === "private") {
            return this.language.properties.classes.members.functions.privateCase;
        }

        if (publicity === "protected") {
            return this.language.properties.classes.members.functions.protectedCase;
        }

        return this.language.properties.classes.members.functions.publicCase;
    }

    /**
     * Generates a string for a parameter.
     * 
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): string {
        if (!this.language.properties.variables.declarationRequired) {
            return parameters[i];
        }

        let parameterName: string = parameters[i];
        let parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

        return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
    }
}
