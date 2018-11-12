import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Parses a language's alias for a type.
 */
export class TypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Type)
        .withDescription("Parses a language's alias for a type")
        .withParameters([new SingleParameter("type", "A type to parse.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return TypeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return this.convertType(parameters[1]);
    }

    /**
     * Converts a raw type name into the language's equivalent.
     *
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     */
    private convertType(typeNameRaw: string): LineResults {
        let typeName: string = typeNameRaw;

        if ({}.hasOwnProperty.call(this.language.syntax.classes.aliases, typeName)) {
            typeName = this.language.syntax.classes.aliases[typeName];
        }

        return LineResults.newSingleLine(typeName);
    }
}
