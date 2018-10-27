import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Prints the 'this' keyword."
 */
export class ThisCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.This).withDescription("Prints the 'this' keyword");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ThisCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.language.syntax.classes.this);
    }
}
