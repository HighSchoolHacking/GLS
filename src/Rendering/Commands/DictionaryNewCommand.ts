import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new dictionary.
 */
export class DictionaryNewCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryNew)
        .withDescription("Initializes a new dictionary")
        .withParameters([
            new SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter("valueType", "The type of the values", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryNewCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.syntax.dictionaries.initializeAsNew) {
            return LineResults.newSingleLine(this.language.syntax.dictionaries.initializeAsLiteral, false);
        }

        let output = this.language.syntax.classes.newStart;
        output += this.language.syntax.dictionaries.className;

        if (this.language.syntax.classes.generics.used) {
            output += this.language.syntax.classes.generics.left;
            output += this.context.convertCommon(CommandNames.Type, parameters[1]);
            output += this.language.syntax.classes.generics.middle;
            output += this.context.convertCommon(CommandNames.Type, parameters[2]);
            output += this.language.syntax.classes.generics.right;
        }

        output += "()";

        return LineResults.newSingleLine(output, false);
    }
}
