import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";

/**
 * Starts any kind of member function.
 */
export abstract class MemberFunctionDeclareCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        let declaration = "";

        if (!this.canRender()) {
            return LineResults.newSingleLine(declaration, false);
        }

        const publicity: string = parameters[1];
        const functionName: string = parameters[2];
        const returnType: string = this.context.convertCommon(CommandNames.Type, parameters[3]);
        let output: CommandResult[];

        declaration += this.getPublicity(publicity);
        declaration += this.getAfterPublicity();

        if (this.language.syntax.functions.explicitReturns && !this.language.syntax.functions.returnTypeAfterName) {
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

        if (this.language.syntax.functions.explicitReturns && this.language.syntax.functions.returnTypeAfterName) {
            declaration += this.language.syntax.functions.returnTypeMarker;
            declaration += returnType;
        }

        output = [new CommandResult(declaration, 0)];
        this.addLineEnder(output, this.getEnder(), 1);

        return new LineResults(output, false);
    }

    /**
     * @returns Whether this is able to render any output.
     */
    protected abstract canRender(): boolean;

    /**
     * @returns Text after the publicity keyword.
     */
    protected abstract getAfterPublicity(): string;

    /**
     * @returns Text to end the declaration.
     */
    protected abstract getEnder(): string;

    /**
     * Generates a string for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): string {
        if (!this.language.syntax.variables.declarationRequired) {
            return parameters[i];
        }

        const parameterName: string = parameters[i];
        const parameterType: string = this.context.convertCommon(CommandNames.Type, parameters[i + 1]);

        return this.context.convertParsed([CommandNames.VariableInline, parameterName, parameterType]).commandResults[0].text;
    }

    /**
     * Determines the prefix for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Prefix for the publicity.
     */
    private getPublicity(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.members.functions.private;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.members.functions.protected;
        }

        return this.language.syntax.classes.members.functions.public;
    }

    /**
     * Determines the case style for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Case style for the publicity.
     */
    private getPublicityCase(publicity: string): CaseStyle {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.members.functions.privateCase;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.members.functions.protectedCase;
        }

        return this.language.syntax.classes.members.functions.publicCase;
    }

    /**
     * Determines the name prefix for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Name prefix for the publicity.
     */
    private getPublicityPrefix(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.members.functions.privatePrefix;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.members.functions.protectedPrefix;
        }

        return this.language.syntax.classes.members.functions.publicPrefix;
    }
}
