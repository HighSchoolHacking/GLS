import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for concatening multiple other values into a single string.
 */
export class StringFormatCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("format", "String describing the format.", true),
        new RepeatingParameters(
            "Input pairs.",
            [
                new SingleParameter("inputName", "Input pair name", true),
                new SingleParameter("inputType", "Input pair type", true)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return StringFormatCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.strings.formatting.useInterpolation) {
            return this.renderInterpolation(parameters);
        }

        let output: string = parameters[0];
        let inputsLength: number = this.getParameters.length / 2 - 1;

        for (let i: number = 0; i < inputsLength; i += 1) {
            let replacement: string = this.formatReplacement(i, parameters[i + 3]);

            output = this.replaceFormatInput(output, i, replacement);
        }

        output = this.language.properties.strings.formatting.formatLeft + output;
        output += this.language.properties.strings.formatting.formatRight;

        return new LineResults([new CommandResult(output, 0)], true);
    }

    /**
     * 
     */
    private formatReplacement(i: number, inputType: string): string {
        let output: string = this.language.properties.strings.formatting.formatInputLeft;

        if (this.language.properties.strings.formatting.formatInputNumbers) {
            output += i;
        }

        if (this.language.properties.strings.formatting.inputTypes) {
            if (this.language.properties.strings.formatting.typeCodes[inputType]) {
                output += this.language.properties.strings.formatting.typeCodes[inputType];
            } else {
                output += inputType;
            }
        }

        output += this.language.properties.strings.formatting.formatInputRight;
        return output;
    }

    /**
     * 
     */
    private replaceFormatInput(output: string, i: number, replacement: string): string {
        return output.replace(new RegExp("\\{" + i + "\\}", "gi"), replacement);
    }

    /**
     * 
     */
    private renderInterpolation(...args: any[]): LineResults {
        return new LineResults([new CommandResult("", 0)], true);
    }
}
