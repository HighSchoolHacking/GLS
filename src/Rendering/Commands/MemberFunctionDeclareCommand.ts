import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { addLineEnder } from "./Utilities";

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
            return LineResults.newSingleLine(declaration);
        }

        const imports: Import[] = [];
        const publicity: string = parameters[1];
        const functionName: string = parameters[2];
        const throwsIndex = parameters.indexOf(KeywordNames.Throws);
        const functionParameters = this.collectFunctionParameters(parameters, throwsIndex);
        const returnTypeLine = this.context.convertParsed([CommandNames.Type, parameters[3]]);
        const returnType: string = returnTypeLine.commandResults[0].text;
        let output: CommandResult[];

        imports.push(...returnTypeLine.addedImports);

        declaration += this.getPublicity(publicity);
        declaration += this.getAfterPublicity();

        if (this.language.syntax.functions.explicitReturns && !this.language.syntax.functions.returnTypeAfterName) {
            declaration += returnType + " ";
        }

        declaration += this.getPublicityPrefix(publicity);
        declaration += this.context.convertStringToCase(functionName, this.getPublicityCase(publicity));
        declaration += "(";

        if (this.language.syntax.classes.members.functions.includeThisReference) {
            declaration += this.language.syntax.classes.this;

            if (functionParameters.length !== 0) {
                declaration += ", ";
            }
        }

        for (let i = 0; i < functionParameters.length; i += 2) {
            const nextTypeLine = this.generateParameterVariable(functionParameters, i);
            imports.push(...nextTypeLine.addedImports);

            if (i !== 0) {
                declaration += ", ";
            }

            declaration += nextTypeLine.commandResults[0].text;
        }

        declaration += ")";

        if (this.language.syntax.functions.explicitReturns && this.language.syntax.functions.returnTypeAfterName) {
            declaration += this.language.syntax.functions.returnTypeMarker;
            declaration += returnType;
        }

        if (this.language.syntax.functions.explicitThrows && throwsIndex !== -1) {
            declaration += this.language.syntax.functions.throwsMarker;

            for (let i = throwsIndex + 1; i < parameters.length; i += 1) {
                declaration += parameters[i];

                if (i !== parameters.length - 1) {
                    declaration += ", ";
                }
            }
        }

        output = [new CommandResult(declaration, 0)];
        addLineEnder(output, this.getEnder(), this.getIndentation());

        return new LineResults(output).withImports(imports);
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
     * @returns How much indentation to add after the last command line.
     */
    protected abstract getIndentation(): number;

    private collectFunctionParameters(parameters: string[], throwsIndex: number): string[] {
        if (throwsIndex === -1) {
            return parameters.slice(4);
        }

        return parameters.slice(4, throwsIndex);
    }

    /**
     * Generates line results for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): LineResults {
        const parameterName: string = this.language.syntax.variables.namePrefix + parameters[i];
        if (!this.language.syntax.variables.declarationRequired) {
            return LineResults.newSingleLine(parameterName);
        }

        const parameterTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
        const parameterType = parameterTypeLine.commandResults[0].text;

        return this.context
            .convertParsed([CommandNames.VariableInline, parameterName, parameterType])
            .withImports(parameterTypeLine.addedImports);
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
