import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new list.
 */
export class ListNewCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListNew)
        .withDescription("Initializes a new list")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new RepeatingParameters("Items initially in the list", [new SingleParameter("item", "An item initially in the list.", false)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListNewCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.syntax.lists.asArray) {
            parameters[0] = CommandNames.ArrayNew;
            return this.context.convertParsed(parameters);
        }

        const imports: Import[] = [];
        const typeNameLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);
        const typeName = typeNameLine.commandResults[0].text;

        imports.push(...typeNameLine.addedImports);

        let output: string = "new " + this.language.syntax.lists.className + "<" + typeName + ">";

        if (parameters.length === 2) {
            output += "()";
        } else {
            output += this.language.syntax.lists.newItems.left;

            for (let i = 2; i < parameters.length; i += 1) {
                output += this.language.syntax.lists.newItems.itemLeft;
                output += parameters[i];
                output += this.language.syntax.lists.newItems.itemRight;
            }

            output += this.language.syntax.lists.newItems.right;
        }

        return LineResults.newSingleLine(output).withImports(typeNameLine.addedImports);
    }
}
