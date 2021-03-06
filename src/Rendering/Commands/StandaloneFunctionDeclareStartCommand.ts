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
import { addLineEnder } from "./Utilities";

/**
 * Starts a stadnalone function.
 */
export class StandaloneFunctionDeclareStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StandaloneFunctionDeclareStart)
        .withDescription("Starts a standalone function")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter(KeywordNames.PrivaciesStandalone, "The privacy of the function.", true),
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
        return StandaloneFunctionDeclareStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.syntax.standaloneFunctions.withinStaticClass) {
            return this.renderWithinStaticClass(parameters);
        }

        return this.renderFloating(parameters);
    }

    /**
     * Renders the command for a language without wrapping static classes.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderFloating(parameters: string[]): LineResults {
        const imports: Import[] = [];

        const returnTypeLine = this.context.convertParsed([CommandNames.Type, parameters[3]]);
        const returnType: string = returnTypeLine.commandResults[0].text;
        imports.push(...returnTypeLine.addedImports);

        const functionName: string = this.context.convertStringToCase(parameters[2], this.language.syntax.functions.case);
        let declaration = "";
        let output: CommandResult[];

        if (this.language.syntax.functions.explicitReturns && !this.language.syntax.functions.returnTypeAfterName) {
            declaration += returnType;
        }

        if (parameters[1] === KeywordNames.Public) {
            declaration += this.language.syntax.exports.exportedLeft;

            if (this.language.syntax.exports.exportedIncludesName) {
                declaration += functionName;
                declaration += this.language.syntax.exports.exportedMiddle;
            }
        }

        declaration += this.language.syntax.functions.defineStartLeft;
        declaration += functionName;
        declaration += "(";

        if (parameters.length > 5) {
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

        output = [new CommandResult(declaration, 0)];
        addLineEnder(output, this.language.syntax.functions.defineStartRight, 1);

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
        const parameterType = parameterTypeLine.commandResults[0].text;

        return this.context
            .convertParsed([CommandNames.VariableInline, parameterName, parameterType])
            .withImports(parameterTypeLine.addedImports);
    }

    /**
     * Renders the command for a language with wrapping static classes.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderWithinStaticClass(parameters: string[]): LineResults {
        parameters[0] = CommandNames.StaticFunctionDeclareStart;

        return this.context.convertParsed(parameters);
    }
}
