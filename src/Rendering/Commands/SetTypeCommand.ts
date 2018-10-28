import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
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
        .withDescription("Declares a set type")
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
        const imports: Import[] = this.language.syntax.sets.requiredImports.slice();
        let output = "";

        if (this.language.syntax.sets.initializeAsNew) {
            output += this.language.syntax.sets.className;
        }

        if (this.language.syntax.variables.explicitTypes) {
            const typeLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);
            imports.push(...typeLine.addedImports);

            output += this.language.syntax.sets.typeLeft;
            output += typeLine.commandResults[0].text;
            output += this.language.syntax.sets.typeRight;
        }

        return LineResults.newSingleLine(output).withImports(imports);
    }
}
