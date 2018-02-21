import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Concatenates multiple other values into a single string.
 */
export class StringFormatCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringFormat)
        .withDescription("Concatenates multiple other values into a single string.")
        .withParameters([
            new SingleParameter("format", "String describing the format.", true),
            new RepeatingParameters(
                "Input pairs.",
                [
                    new SingleParameter("inputName", "Input pair name", true),
                    new SingleParameter("inputType", "Input pair type", true)
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringFormatCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (parameters[1][0] !== "\"") {
            throw new Error("String formatting must be done with primitives.");
        }

        let output: string = parameters[1].substring(1, parameters[1].length - 1);
        output = this.language.properties.strings.formatting.formatLeft + output;

        const inputsLength: number = parameters.length / 2 - 1;
        for (let i = 0; i < inputsLength; i += 1) {
            const replacement: string = this.formatReplacement(i, parameters[i * 2 + 2], parameters[i * 2 + 3]);

            output = output.replace(new RegExp(`\\{${i}\\}`, "gi"), replacement);
        }

        if (!this.language.properties.strings.formatting.useInterpolation) {
            if (parameters.length > 2) {
                output += this.language.properties.strings.formatting.formatMiddle;

                for (let i = 2; i < parameters.length - 3; i += 2) {
                    output += parameters[i] += ", ";
                }

                output += parameters[parameters.length - 2];
            } else {
                output += this.language.properties.strings.formatting.formatAbbreviated;
            }
        }

        output += this.language.properties.strings.formatting.formatRight;

        return new LineResults([new CommandResult(output, 0)], true);
    }

    /**
     * Creates a replacement string for a format string input.
     *
     * @param i   What number replacement this is within the format string.
     * @param inputName   The input replacement name.
     * @param inputType   The input replacement type.
     * @returns A replacement string wrapping the input.
     */
    private formatReplacement(i: number, inputName: string, inputType: string): string {
        let output: string = this.language.properties.strings.formatting.formatInputLeft;

        if (!this.language.properties.strings.formatting.useInterpolation) {
            output += i;
        }

        if (this.language.properties.strings.formatting.inputTypes) {
            if (this.language.properties.strings.formatting.typeCodes[inputType] !== undefined) {
                output += this.language.properties.strings.formatting.typeCodes[inputType];
            } else {
                output += inputType;
            }
        }

        if (this.language.properties.strings.formatting.useInterpolation) {
            output += inputName;
        }

        output += this.language.properties.strings.formatting.formatInputRight;
        return output;
    }
}
