import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a set type.
 */
export class SetTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.SetType)
        .withDescription("Declares a set type.")
        .withParameters([new SingleParameter("itemType", "The type of the items.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return SetTypeCommand.metadata;
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
            output += this.language.properties.sets.className;
        }

        if (this.language.properties.variables.explicitTypes) {
            output += this.language.properties.sets.typeLeft;
            output += this.context.convertCommon(CommandNames.Type, parameters[1]);
            output += this.language.properties.sets.typeRight;
        }

        const results = LineResults.newSingleLine(output, false);

        results.addImports(this.language.properties.sets.requiredImports);

        return results;
    }
}
