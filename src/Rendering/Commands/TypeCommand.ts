import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "../LineResults";
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
        .withDescription("Parses a language's alias for a type.")
        .withParameters([
            new SingleParameter("type", "A type to parse.", true)
        ]);

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
        return LineResults.newSingleLine(this.convertType(parameters[1]), false);
    }

    /**
     * Converts a raw type name with array notation into the language's equivalent.
     *
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     */
    private convertArrayType(typeNameRaw: string): string {
        const bracketIndex: number = typeNameRaw.indexOf("[");
        const typeName: string = this.convertType(typeNameRaw.substring(0, bracketIndex));

        return typeName + typeNameRaw.substring(bracketIndex);
    }

    /**
     * Converts a raw type name with array notation into the language's equivalent.
     *
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     * @todo Support multiple generics (commas inside the <>s).
     */
    private convertGenericType(typeNameRaw: string): string {
        const bracketStartIndex: number = typeNameRaw.indexOf("<");
        const containerTypeName: string = this.convertType(typeNameRaw.substring(0, bracketStartIndex));

        if (!this.language.properties.classes.generics.used) {
            return this.convertType(containerTypeName);
        }

        const bracketEndIndex: number = typeNameRaw.lastIndexOf(">");
        const genericTypeName: string = this.convertType(typeNameRaw.substring(bracketStartIndex + 1, bracketEndIndex));
        let output: string = containerTypeName;

        output += this.language.properties.classes.generics.left;
        output += genericTypeName;
        output += this.language.properties.classes.generics.right;

        return output;
    }

    /**
     * Converts a raw type name into the language's equivalent.
     *
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     */
    private convertType(typeNameRaw: string): string {
        let typeName: string = typeNameRaw;

        if (this.language.properties.classes.aliases.hasOwnProperty(typeName)) {
            typeName = this.language.properties.classes.aliases[typeName];
        }

        if (this.typeContainsArray(typeNameRaw)) {
            return this.convertArrayType(typeNameRaw);
        }

        if (this.typeContainsGeneric(typeNameRaw)) {
            return this.convertGenericType(typeNameRaw);
        }

        return typeName;
    }

    /**
     * @param typeNameRaw   A name of a type.
     * @returns Whether the type name includes Array notation.
     */
    private typeContainsArray(typeNameRaw: string): boolean {
        return typeNameRaw.indexOf("[]") !== -1;
    }

    /**
     * @param typeNameRaw   A name of a type.
     * @returns Whether the type name includes Array notation.
     */
    private typeContainsGeneric(typeNameRaw: string): boolean {
        return typeNameRaw.indexOf("<") !== -1;
    }
}
