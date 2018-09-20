import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a while loop.
 */
export class WhileEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.WhileEnd)
        .withDescription("Ends a while loop")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return WhileEndCommand.metadata;
    }
}
