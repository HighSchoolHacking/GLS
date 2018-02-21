import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "../LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Parses a language's alias for a value.
 */
export class ValueCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Value)
        .withDescription("Parses a language's alias for a value.")
        .withParameters([
            new SingleParameter("value", "A value to parse.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ValueCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
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
