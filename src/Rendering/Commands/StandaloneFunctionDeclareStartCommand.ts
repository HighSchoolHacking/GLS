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
        const returnType: string = this.context.convertCommon(CommandNames.Type, parameters[3]);
        const functionName: string = this.context.convertStringToCase(parameters[2], this.language.syntax.functions.case);
        let declaration = "";
        let output: CommandResult[];

        if (this.language.syntax.functions.explicitReturns && !this.language.syntax.functions.returnTypeAfterName) {
            declaration += returnType;
        }

        if (parameters[1] === KeywordNames.Public) {
            declaration += this.language.syntax.classes.exports.exportedLeft;

            if (this.language.syntax.classes.exports.exportedIncludesName) {
                declaration += functionName;
                declaration += this.language.syntax.classes.exports.exportedMiddle;
            }
        }

        declaration += this.language.syntax.functions.defineStartLeft;
        declaration += functionName;
        declaration += "(";

        if (parameters.length > 5) {
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
        this.addLineEnder(output, this.language.syntax.functions.defineStartRight, 1);

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
        if (!this.language.syntax.variables.declarationRequired) {
            return parameters[i];
        }

        const parameterName: string = parameters[i];
        const parameterType: string = this.context.convertCommon(CommandNames.Type, parameters[i + 1]);

        return this.context.convertParsed([CommandNames.VariableInline, parameterName, parameterType]).commandResults[0].text;
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
