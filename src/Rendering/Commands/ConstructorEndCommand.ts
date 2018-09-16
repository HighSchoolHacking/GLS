import { BlockEndCommand } from "./BlockEndCommand";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a constructor.
 */
export class ConstructorEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ConstructorEnd)
        .withDescription("Ends a constructor")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ConstructorEndCommand.metadata;
    }
}
