import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for starting to initialize a new dictionary.
 */
export class DictionaryNewStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("keyType", "The type of the keys.", true),
        new SingleParameter("valueType", "Tye type of the values", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return DictionaryNewStartCommand.parameters;
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
