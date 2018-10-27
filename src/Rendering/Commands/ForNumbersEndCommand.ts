import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a for loop over numbers.
 */
export class ForNumbersEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForNumbersEnd)
        .withDescription("Ends a for loop over numbers")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForNumbersEndCommand.metadata;
    }

    /**
     * Renders the end block string.
     *
     * @returns The end block string.
     */
    protected renderBlockEnd(): string {
        return this.language.syntax.loops.forNumbersEnd;
    }
}
