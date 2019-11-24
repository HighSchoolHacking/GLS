import { BudgieUtilities } from "../../BudgieUtilities";
import { StringToNumberStartConversionType } from "../Languages/Properties/Syntax/StringToNumberSyntax";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Starts a block to be executed if a string can be converted to a int.
 */
export class IfStringToIntStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfStringToIntStart)
        .withDescription("Starts a block to be executed if a string can be converted to a int")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("stringName", "Name of a string to try converting.", true),
            new SingleParameter("intName", "What to call the string in int form.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfStringToIntStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const conversionType: StringToNumberStartConversionType = this.language.syntax.strings.toInt.conversionType;
        const lines: CommandResult[] = [];

        if (conversionType === StringToNumberStartConversionType.PredeclareConvertAndValidate) {
            this.predeclareVariables(parameters, lines);
        }

        if (
            conversionType !== StringToNumberStartConversionType.ValidateDirectly &&
            conversionType !== StringToNumberStartConversionType.ValidateAndConvert
        ) {
            this.convertStrings(parameters, lines);
        }

        this.validateInts(parameters, lines, conversionType === StringToNumberStartConversionType.ConvertAndValidate);

        if (conversionType === StringToNumberStartConversionType.ValidateAndConvert) {
            this.convertStrings(parameters, lines);
        }

        const results: LineResults = new LineResults(lines);

        results.withImports(this.language.syntax.strings.toInt.requiredImports);
        results.commandResults[results.commandResults.length - 1].indentation = 1;

        return results;
    }

    /**
     * Adds pre-declared variables to the output lines.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param lines   Output lines of rendered language code.
     */
    private predeclareVariables(parameters: string[], lines: CommandResult[]): void {
        const initialValue = this.language.syntax.strings.toInt.initialVariableValues;

        for (let i = 1; i < parameters.length; i += 2) {
            const declarationParameters: string[] = [CommandNames.Variable, parameters[i + 1], KeywordNames.Int];

            if (initialValue !== "") {
                declarationParameters.push(initialValue);
            }

            const declaration = this.context.convertParsed(declarationParameters).commandResults[0];
            declaration.text += this.language.syntax.style.semicolon;
            lines.push(declaration);
        }

        addLineEnder(lines, this.language.syntax.strings.toInt.initializeVariablesEnd, 0);
    }

    /**
     * Adds string-to-int conversions to the output lines.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param lines   Output lines of rendered language code.
     */
    private convertStrings(parameters: string[], lines: CommandResult[]): void {
        if (lines.length === 0) {
            lines.push(new CommandResult("", 0));
        }

        for (let i = 1; i < parameters.length; i += 2) {
            const stringName = parameters[i];
            const intName = parameters[i + 1];

            addLineEnder(lines, this.language.syntax.strings.toInt.perVariableConversionStartLeft, 0);
            addLineEnder(lines, intName, 0);
            addLineEnder(lines, this.language.syntax.strings.toInt.perVariableConversionStartMiddle, 0);
            addLineEnder(lines, stringName, 0);
            addLineEnder(lines, this.language.syntax.strings.toInt.perVariableConversionStartRight, 0);
        }
    }

    /**
     * Adds int validation checks to the output lines.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param lines   Output lines of rendered language code.
     * @param afterBlankLine   Whether to insert a blank line before the new lines.
     */
    private validateInts(parameters: string[], lines: CommandResult[], afterBlankLine: boolean): void {
        if (lines.length === 0) {
            lines.push(new CommandResult("", 0));
        }

        if (lines.length === 0) {
            lines.push(new CommandResult(this.language.syntax.strings.toInt.validationBlockLeft, 0));
        } else {
            addLineEnder(lines, this.language.syntax.strings.toInt.validationBlockLeft, 0);
        }

        for (let i = 1; i < parameters.length; i += 2) {
            const stringName = parameters[i];
            const intName = parameters[i + 1];

            let comparison = this.language.syntax.strings.toInt.validationBlockComparison;

            comparison = BudgieUtilities.stringReplaceAll(comparison, "{0}", stringName);
            comparison = BudgieUtilities.stringReplaceAll(comparison, "{1}", intName);

            addLineEnder(lines, comparison, 0);

            if (i < parameters.length - 2) {
                addLineEnder(lines, this.language.syntax.strings.toInt.validationBlockMiddle, 0);
            }
        }

        addLineEnder(lines, this.language.syntax.strings.toInt.validationBlockRight, 0);
    }
}
