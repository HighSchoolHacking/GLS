import { BlockEndCommand } from "./BlockEndCommand";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for the end of a finally block.
 */
export class FinallyEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.FinallyEnd,
        [-1],
        []);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return FinallyEndCommand.metadata;
    }
}
