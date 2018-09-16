import { BlockEndCommand } from "./BlockEndCommand";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a finally block.
 */
export class FinallyEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.FinallyEnd)
        .withDescription("Ends a finally block")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return FinallyEndCommand.metadata;
    }
}
