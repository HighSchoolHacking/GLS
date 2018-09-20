import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a static function.
 */
export class StandaloneFunctionDeclareEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StandaloneFunctionDeclareEnd)
        .withDescription("Ends a standalone function")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StandaloneFunctionDeclareEndCommand.metadata;
    }
}
