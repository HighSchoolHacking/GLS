import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares an array type.
 */
export class ArrayTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ArrayType)
        .withDescription("Declares an array type")
        .withParameters([new SingleParameter("type", "The type of object.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ArrayTypeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by the type name.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        const typeLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);

        imports.push(...this.language.syntax.arrays.requiredImports);
        imports.push(...typeLine.addedImports);

        return LineResults.newSingleLine(typeLine.commandResults[0].text + "[]").withImports(imports);
    }
}
