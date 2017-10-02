import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a member function.
 */
export class MemberFunctionDeclareStartCommand extends Command {
	/**
	 * Metadata on the command.
	 */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MemberFunctionDeclareStart)
        .withDescription("Starts a member function.")
        .withParameters([
            new SingleParameter("privacy", "The privacy of the function.", true),
            new SingleParameter("name", "The name of the function.", true),
            new SingleParameter("returnType", "The return type of the function.", true),
            new RepeatingParameters(
                "Function parameters.",
                [
                    new SingleParameter("parameterName", "A named parameter for the function.", true),
                    new SingleParameter("parameterType", "The type of the parameter.", true)
                ]),
            new SingleParameter("throws", "Keyword to list possible exceptions.", false),
            new RepeatingParameters(
                "Possible exceptions.",
                [
                    new SingleParameter("possibleException", "A possible exceptions thrown by this function.", true)
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberFunctionDeclareStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        const publicity: string = parameters[1];
        const functionName: string = parameters[2];
        const returnType: string = this.context.convertCommon("type", parameters[3]);
        let declaration = "";
        let output: CommandResult[];

        declaration += this.getPublicity(publicity);

        if (this.language.properties.functions.explicitReturns && !this.language.properties.functions.returnTypeAfterName) {
            declaration += returnType + " ";
        }

        declaration += this.getPublicityPrefix(publicity);
        declaration += this.context.convertStringToCase(functionName, this.getPublicityCase(publicity));
        declaration += "(";

        if (parameters.length > 4) {
            declaration += this.generateParameterVariable(parameters, 4);

            for (let i = 6; i < parameters.length; i += 2) {
                declaration += ", ";
                declaration += this.generateParameterVariable(parameters, i);
            }
        }

        declaration += ")";

        if (this.language.properties.functions.explicitReturns && this.language.properties.functions.returnTypeAfterName) {
            declaration += this.language.properties.functions.returnTypeMarker;
            declaration += returnType;
        }

        output = [new CommandResult(declaration, 0)];
        this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);

        return new LineResults(output, false);
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

        const parameterName: string = parameters[i];
        const parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

        return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
    }

    /**
     * Determines the prefix for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Prefix for the publicity.
     */
    private getPublicity(publicity: string): string {
        if (publicity === "private") {
            return this.language.properties.classes.members.functions.private;
        }

        if (publicity === "protected") {
            return this.language.properties.classes.members.functions.protected;
        }

        return this.language.properties.classes.members.functions.public;
    }

    /**
     * Determines the case style for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Case style for the publicity.
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
     * Determines the name prefix for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Name prefix for the publicity.
     */
    private getPublicityPrefix(publicity: string): string {
        if (publicity === "private") {
            return this.language.properties.classes.members.functions.privatePrefix;
        }

        if (publicity === "protected") {
            return this.language.properties.classes.members.functions.protectedPrefix;
        }

        return this.language.properties.classes.members.functions.publicPrefix;
    }
}
