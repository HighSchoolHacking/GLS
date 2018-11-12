import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Prints the standard exception class name.
 */
export class ExceptionCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Exception).withDescription(
        "Prints the standard exception class name",
    );

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ExceptionCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: string = this.language.syntax.exceptions.className;

        return LineResults.newSingleLine(output).withImports(this.language.syntax.exceptions.requiredImports);
    }
}
