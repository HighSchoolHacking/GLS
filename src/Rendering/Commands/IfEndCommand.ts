import { BlockEndCommand } from "./BlockEndCommand";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends an if statement.
 */
export class IfEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfEnd)
        .withDescription("Ends an if statement")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfEndCommand.metadata;
    }
}
