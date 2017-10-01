import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for starting to initialize a new dictionary.
 */
export class DictionaryNewStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.DictionaryNewStart,
        [1],
        [
            new SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter("valueType", "Tye type of the values", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryNewStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.properties.dictionaries.initializeAsNew) {
            return LineResults.newSingleLine("{", false);
        }

        let output = "new ";

        output += this.context.convertParsed(["dictionary type", parameters[1], parameters[2]]).commandResults[0].text;

        const results: CommandResult[] = [new CommandResult(output, 0)];
        this.addLineEnder(results, this.language.properties.dictionaries.initializeStart, 1);

        return new LineResults(results, false);
    }
}
