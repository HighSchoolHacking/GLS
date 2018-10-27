import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a static function.
 */
export class StaticFunctionDeclareStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StaticFunctionDeclareStart)
        .withDescription("Starts a static function")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the function.", true),
            new SingleParameter("name", "The name of the function.", true),
            new SingleParameter("returnType", "The return type of the function.", true),
            new RepeatingParameters("Function parameters", [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true),
            ]),
            new KeywordParameter([KeywordNames.Throws], "Keyword to list possible exceptions", false),
            new RepeatingParameters("Possible exceptions", [
                new SingleParameter("possibleException", "A possible exception thrown by this function.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StaticFunctionDeclareStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        const publicity: string = parameters[1];
        const functionName: string = parameters[2];
        const returnTypeLine = this.context.convertParsed([CommandNames.Type, parameters[3]]);
        const returnType: string = returnTypeLine.commandResults[0].text;
        let declaration = "";
        let output: CommandResult[];

        imports.push(...returnTypeLine.addedImports);

        if (this.language.syntax.classes.statics.labelBeforePublicity) {
            declaration += this.language.syntax.classes.statics.functions.label;
        }

        declaration += this.getPublicity(publicity);

        if (!this.language.syntax.classes.statics.labelBeforePublicity) {
            declaration += this.language.syntax.classes.statics.functions.label;
        }

        if (this.language.syntax.functions.explicitReturns && !this.language.syntax.functions.returnTypeAfterName) {
            declaration += returnType + " ";
        }

        declaration += this.getPublicityPrefix(publicity);
        declaration += this.context.convertStringToCase(functionName, this.getPublicityCase(publicity));
        declaration += "(";

        if (parameters.length > 4) {
            const typeLine = this.generateParameterVariable(parameters, 4);
            declaration += typeLine.commandResults[0].text;
            imports.push(...typeLine.addedImports);

            for (let i = 6; i < parameters.length; i += 2) {
                const nextTypeLine = this.generateParameterVariable(parameters, i);
                declaration += ", " + nextTypeLine.commandResults[0].text;
                imports.push(...nextTypeLine.addedImports);
            }
        }

        declaration += ")";

        if (this.language.syntax.functions.explicitReturns && this.language.syntax.functions.returnTypeAfterName) {
            declaration += this.language.syntax.functions.returnTypeMarker;
            declaration += returnType;
        }

        output = [new CommandResult("", 0)];
        this.addLineEnder(output, declaration, 0);
        this.addLineEnder(output, this.language.syntax.functions.defineStartRight, 1);

        return new LineResults(output).withImports(imports);
    }

    /**
     * Generates line results for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): LineResults {
        if (!this.language.syntax.variables.declarationRequired) {
            return LineResults.newSingleLine(parameters[i]);
        }

        const parameterName: string = parameters[i];
        const parameterTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
        const parameterType: string = parameterTypeLine.commandResults[0].text;

        return this.context
            .convertParsed([CommandNames.VariableInline, parameterName, parameterType])
            .withImports(parameterTypeLine.addedImports);
    }

    /**
     * Determines the prefix for a static function.
     *
     * @param publicity   Publicity of the static function.
     * @returns Prefix for the publicity.
     */
    private getPublicity(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.statics.functions.private;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.statics.functions.protected;
        }

        return this.language.syntax.classes.statics.functions.public;
    }

    /**
     * Determines the case style for a static function.
     *
     * @param publicity   Publicity of the static function.
     * @returns Case style for the publicity.
     */
    private getPublicityCase(publicity: string): CaseStyle {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.statics.functions.privateCase;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.statics.functions.protectedCase;
        }

        return this.language.syntax.classes.statics.functions.publicCase;
    }

    /**
     * Determines the name prefix for a static function.
     *
     * @param publicity   Publicity of the static function.
     * @returns Name prefix for the publicity.
     */
    private getPublicityPrefix(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.statics.functions.privatePrefix;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.statics.functions.protectedPrefix;
        }

        return this.language.syntax.classes.statics.functions.publicPrefix;
    }
}
