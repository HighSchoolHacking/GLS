import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a static function.
 */
export class StaticFunctionDeclareEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StaticFunctionDeclareEnd)
        .withDescription("Ends a static function")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StaticFunctionDeclareEndCommand.metadata;
    }
}
