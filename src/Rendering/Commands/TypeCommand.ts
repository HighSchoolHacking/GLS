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
     * Converts a raw type name with array notation into the language's equivalent.
     *
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     */
    private convertArrayType(typeNameRaw: string): LineResults {
        const bracketIndex: number = typeNameRaw.indexOf("[");
        const subTypeNameLine = this.convertType(typeNameRaw.substring(0, bracketIndex));
        const typeName = subTypeNameLine.commandResults[0].text + typeNameRaw.substring(bracketIndex);

        return LineResults.newSingleLine(typeName).withImports(subTypeNameLine.addedImports);
    }

    /**
     * Converts a raw type name with array notation into the language's equivalent.
     *
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     * @todo Support multiple generics (commas inside the <>s).
     */
    private convertGenericType(typeNameRaw: string): LineResults {
        const bracketStartIndex: number = typeNameRaw.indexOf("<");
        const subContainerTypeLine = this.convertType(typeNameRaw.substring(0, bracketStartIndex));

        if (!this.language.syntax.classes.generics.used) {
            return subContainerTypeLine;
        }

        const bracketEndIndex: number = typeNameRaw.lastIndexOf(">");
        const genericTypeNameLine = this.convertType(typeNameRaw.substring(bracketStartIndex + 1, bracketEndIndex));
        let output: string = subContainerTypeLine.commandResults[0].text;

        output += this.language.syntax.classes.generics.left;
        output += genericTypeNameLine.commandResults[0].text;
        output += this.language.syntax.classes.generics.right;

        return LineResults.newSingleLine(output)
            .withImports(subContainerTypeLine.addedImports)
            .withImports(genericTypeNameLine.addedImports);
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

        if (this.typeContainsArray(typeNameRaw)) {
            return this.convertArrayType(typeNameRaw);
        }

        if (this.typeContainsGeneric(typeNameRaw)) {
            return this.convertGenericType(typeNameRaw);
        }

        return LineResults.newSingleLine(typeName);
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
