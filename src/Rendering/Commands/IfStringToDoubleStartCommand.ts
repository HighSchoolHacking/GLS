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
 * Starts a block to be executed if a string can be converted to a double.
 */
export class IfStringToDoubleStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfStringToDoubleStart)
        .withDescription("Starts a block to be executed if a string can be converted to a double")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("stringName", "Name of a string to try converting.", true),
            new SingleParameter("doubleName", "What to call the string in double form.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfStringToDoubleStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const conversionType: StringToNumberStartConversionType = this.language.syntax.strings.toDouble.conversionType;
        const lines: CommandResult[] = [];

        if (conversionType === StringToNumberStartConversionType.PredeclareConvertAndValidate) {
            this.predeclareVariables(parameters, lines);
        }

        if (conversionType !== StringToNumberStartConversionType.ValidateDirectly) {
            this.convertStrings(parameters, lines);
        }

        this.validateDoubles(parameters, lines);

        const results: LineResults = new LineResults(lines);

        results.withImports(this.language.syntax.strings.toDouble.requiredImports);
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
        const initialValue = this.language.syntax.strings.toDouble.initialVariableValues;

        for (let i = 1; i < parameters.length; i += 2) {
            const declarationParameters: string[] = [CommandNames.VariableDeclare, parameters[i + 1], KeywordNames.Double];

            if (initialValue !== "") {
                declarationParameters.push(initialValue);
            }

            const declaration = this.context.convertParsed(declarationParameters).commandResults[0];
            declaration.text += this.language.syntax.style.semicolon;
            lines.push(declaration);
        }

        addLineEnder(lines, this.language.syntax.strings.toDouble.initializeVariablesEnd, 0);
    }

    /**
     * Adds string-to-double conversions to the output lines.
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
            const doubleName = parameters[i + 1];
            const template = this.language.syntax.strings.toDouble.perVariableConversion;

            addLineEnder(lines, this.prepareStringConversion(template, stringName, doubleName), 0);
        }
    }

    /**
     * Prepares a string-to-double conversion using the language's template for it.
     *
     * @param template   Language template to convert a string to a double.
     * @param stringName   Name of the input string.
     * @param doubleName   Raw name of the output double variable.
     */
    private prepareStringConversion(template: string, stringName: string, doubleName: string) {
        template = BudgieUtilities.stringReplaceAll(template, "{0}", stringName);
        template = BudgieUtilities.stringReplaceAll(template, "{1}", doubleName);

        return template;
    }

    /**
     * Adds double validation checks to the output lines.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param lines   Output lines of rendered language code.
     */
    private validateDoubles(parameters: string[], lines: CommandResult[]): void {
        if (lines.length === 0) {
            lines.push(new CommandResult("", 0));
        }

        addLineEnder(lines, this.language.syntax.strings.toDouble.validationBlockLeft, 0);

        for (let i = 1; i < parameters.length; i += 2) {
            const stringName = parameters[i];
            const doubleName = parameters[i + 1];

            let comparison = this.language.syntax.strings.toDouble.validationBlockComparison;

            comparison = BudgieUtilities.stringReplaceAll(comparison, "{0}", stringName);
            comparison = BudgieUtilities.stringReplaceAll(comparison, "{1}", doubleName);

            addLineEnder(lines, comparison, 0);

            if (i < parameters.length - 2) {
                addLineEnder(lines, this.language.syntax.strings.toDouble.validationBlockMiddle, 0);
            }
        }

        addLineEnder(lines, this.language.syntax.strings.toDouble.validationBlockRight, 0);
    }
}
