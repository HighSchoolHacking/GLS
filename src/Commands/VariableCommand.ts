import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a variable.
 */
export class VariableCommand extends Command {
	/**
	 * Metadata on the command.
	 */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Variable)
        .withDescription("Declares a variable.")
        .withParameters([
            new SingleParameter("name", "The name of the variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "The starting value of the variable.", false)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return VariableCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
            return LineResults.newSingleLine("\0", false);
        }

        const starter: string = this.language.properties.variables.declaration;
        const newParameters: string[] = parameters.slice();
        newParameters[0] = CommandNames.VariableInline;

        const ender: string = this.context.convertParsed(newParameters).commandResults[0].text;

        return LineResults.newSingleLine(starter + ender, true);
    }
}
