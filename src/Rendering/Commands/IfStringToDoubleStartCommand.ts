import { GlsUtilities } from "../../GlsUtilities";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * How a language attempts to convert strings to doubles.
 */
export enum StringToDoubleStartConversionType {
    /**
     * Convert strings into double variables and validate the results.
     */
    ConvertAndValidate = "ConvertAndValidate",

    /**
     * Declare double variables, convert strings into them, and validate the results.
     */
    PredeclareConvertAndValidate = "PredeclareConvertAndValidate",

    /**
     * Directly validate calls to double conversions inline.
     */
    ValidateDirectly = "ValidateDirectly",
}

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
        const conversionType: StringToDoubleStartConversionType = this.language.syntax.strings.toDouble.conversionType;
        const lines: CommandResult[] = [];

        if (conversionType === StringToDoubleStartConversionType.PredeclareConvertAndValidate) {
            this.predeclareVariables(parameters, lines);
        }

        if (conversionType !== StringToDoubleStartConversionType.ValidateDirectly) {
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
            const declarationParameters: string[] = [CommandNames.Variable, parameters[i + 1], KeywordNames.Double];

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

            addLineEnder(lines, this.language.syntax.strings.toDouble.perVariableConversionStartLeft, 0);
            addLineEnder(lines, doubleName, 0);
            addLineEnder(lines, this.language.syntax.strings.toDouble.perVariableConversionStartMiddle, 0);
            addLineEnder(lines, stringName, 0);
            addLineEnder(lines, this.language.syntax.strings.toDouble.perVariableConversionStartRight, 0);
        }
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

            comparison = GlsUtilities.stringReplaceAll(comparison, "{0}", stringName);
            comparison = GlsUtilities.stringReplaceAll(comparison, "{1}", doubleName);

            addLineEnder(lines, comparison, 0);

            if (i < parameters.length - 2) {
                addLineEnder(lines, this.language.syntax.strings.toDouble.validationBlockMiddle, 0);
            }
        }

        addLineEnder(lines, this.language.syntax.strings.toDouble.validationBlockRight, 0);
    }
}
