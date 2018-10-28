import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a dictionary type.
 */
export class DictionaryTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryType)
        .withDescription("Declares a dictionary type")
        .withParameters([
            new SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter("valueType", "The type of the values", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryTypeCommand.metadata;
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

        if (this.language.syntax.dictionaries.initializeAsNew) {
            output += this.language.syntax.dictionaries.className;
        }

        if (this.language.syntax.variables.explicitTypes) {
            output += this.language.syntax.dictionaries.typeLeft;

            const leftTypeLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);
            output += leftTypeLine.commandResults[0].text;
            imports.push(...leftTypeLine.addedImports);

            output += this.language.syntax.dictionaries.typeMiddle;

            const rightTypeLine = this.context.convertParsed([CommandNames.Type, parameters[2]]);
            output += rightTypeLine.commandResults[0].text;
            imports.push(...rightTypeLine.addedImports);

            output += this.language.syntax.dictionaries.typeRight;
        }

        const results = LineResults.newSingleLine(output);

        results.withImports(this.language.syntax.dictionaries.requiredImports);

        return results;
    }
}
