import { setServers } from "dns";
import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new set.
 */
export class SetNewCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.SetNew)
        .withDescription("Initializes a new set")
        .withParameters([
            new SingleParameter("itemType", "The type of the items.", true),
            new RepeatingParameters("Items initially in the set", [new SingleParameter("item", "Item initially in the set.", false)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return SetNewCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        let output = "";

        if (this.language.syntax.sets.initializeAsNew) {
            output += "new ";
        }

        output += this.language.syntax.sets.className;

        if (this.language.syntax.classes.generics.used) {
            const typeLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);
            imports.push(...typeLine.addedImports);

            output += this.language.syntax.classes.generics.left;
            output += typeLine.commandResults[0].text;
            output += this.language.syntax.classes.generics.right;
        }

        if (parameters.length > 3) {
            output += this.language.syntax.sets.startItemsLeft;
            output += parameters.slice(3).join(", ");
            output += this.language.syntax.sets.startItemsRight;
        } else {
            output += this.language.syntax.sets.startNoItems;
        }

        return LineResults.newSingleLine(output).withImports(imports);
    }
}
