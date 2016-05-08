import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for printing a value.
 */
export class ValueCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("value", "A value to parse.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ValueCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (value).
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.convertValue(parameters[1]), false);
    }

    /**
     * Converts a raw value into the language's equivalent.
     * 
     * @param typeNameRaw   A raw value to convert.
     * @returns The equivalent converted value.
     */
    private convertValue(valueRaw: string): string {
        if (!this.language.properties.variables.aliases.hasOwnProperty(valueRaw)) {
            return valueRaw;
        }

        return this.language.properties.variables.aliases[valueRaw];
    }
}
