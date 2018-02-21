import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { KeywordNames } from "./KeywordNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * How a language attempts to convert strings to floats.
 */
export enum StringToFloatStartConversionType {
    /**
     * Convert strings into float variables and validate the results.
     */
    ConvertAndValidate,

    /**
     * Declare float variables, convert strings into them, and validate the results.
     */
    PredeclareConvertAndValidate,

    /**
     * Directly validate calls to float conversions inline.
     */
    ValidateDirectly,
}

/**
 * Starts a block to be executed if a string can be converted to a float.
 */
export class IfStringToFloatStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfStringToFloatStart)
        .withDescription("Starts a block to be executed if a string can be converted to a float.")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("stringName", "Name of a string to try converting.", true),
            new SingleParameter("floatName", "What to call the string in float form.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfStringToFloatStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const conversionType: StringToFloatStartConversionType = this.language.properties.strings.toFloat.conversionType;
        const lines: CommandResult[] = [];

        if (conversionType === StringToFloatStartConversionType.PredeclareConvertAndValidate) {
            this.predeclareVariables(parameters, lines);
        }

        if (conversionType !== StringToFloatStartConversionType.ValidateDirectly) {
            this.convertStrings(parameters, lines);
        }

        this.validateFloats(parameters, lines);

        const results: LineResults = new LineResults(lines, false);

        results.addImports(this.language.properties.strings.toFloat.requiredImports);
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
        const initialValue = this.language.properties.strings.toFloat.initialVariableValues;

        for (let i = 1; i < parameters.length; i += 2) {
            const declarationParameters: string[] = [CommandNames.Variable, parameters[i + 1], KeywordNames.Float];

            if (initialValue !== "") {
                declarationParameters.push(initialValue);
            }

            const declaration = this.context.convertParsed(declarationParameters).commandResults[0];
            declaration.text += this.language.properties.style.semicolon;
            lines.push(declaration);
        }

        this.addLineEnder(lines, this.language.properties.strings.toFloat.initializeVariablesEnd, 0);
    }

    /**
     * Adds string-to-float conversions to the output lines.
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
            const floatName = parameters[i + 1];

            this.addLineEnder(lines, this.language.properties.strings.toFloat.perVariableConversionStartLeft, 0);
            this.addLineEnder(lines, floatName, 0);
            this.addLineEnder(lines, this.language.properties.strings.toFloat.perVariableConversionStartMiddle, 0);
            this.addLineEnder(lines, stringName, 0);
            this.addLineEnder(lines, this.language.properties.strings.toFloat.perVariableConversionStartRight, 0);
        }
    }

    /**
     * Adds float validation checks to the output lines.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param lines   Output lines of rendered language code.
     */
    private validateFloats(parameters: string[], lines: CommandResult[]): void {
        if (lines.length === 0) {
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.properties.strings.toFloat.validationBlockLeft, 0);

        for (let i = 1; i < parameters.length; i += 2) {
            const stringName = parameters[i];
            const floatName = parameters[i + 1];
            const comparison = this.language.properties.strings.toFloat.validationBlockComparison
                .replace("{0}", stringName)
                .replace("{1}", floatName);

            this.addLineEnder(lines, comparison, 0);

            if (i < parameters.length - 2) {
                this.addLineEnder(lines, this.language.properties.strings.toFloat.validationBlockMiddle, 0);
            }
        }

        this.addLineEnder(lines, this.language.properties.strings.toFloat.validationBlockRight, 0);
    }
}
