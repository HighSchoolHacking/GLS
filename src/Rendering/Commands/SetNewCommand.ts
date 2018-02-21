import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
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
        .withDescription("Initializes a new set.")
        .withParameters([
            new SingleParameter("itemType", "The type of the items.", true),
            new RepeatingParameters(
                "Items initially in the set.",
                [
                    new SingleParameter("item", "Item initially in the set.", false)
                ])
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
        let output = "";

        if (this.language.properties.sets.initializeAsNew) {
            output += "new ";
            output += this.language.properties.sets.className;
        }

        if (this.language.properties.classes.generics.used) {
            output += this.language.properties.classes.generics.left;
            output += this.context.convertCommon(CommandNames.Type, parameters[1]);
            output += this.language.properties.classes.generics.middle;
            output += this.context.convertCommon(CommandNames.Type, parameters[2]);
            output += this.language.properties.classes.generics.right;
        }

        output += "(";

        if (parameters.length > 3) {
            output += this.language.properties.sets.startItemsLeft;
            output += parameters.slice(3).join(", ");
            output += this.language.properties.sets.startItemsRight;
        }

        output += ")";

        return LineResults.newSingleLine(output, false);
    }
}
