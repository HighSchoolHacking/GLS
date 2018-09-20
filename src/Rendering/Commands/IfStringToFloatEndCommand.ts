import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a block to be executed if a string can be converted to a float.
 */
export class IfStringToFloatEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfStringToFloatEnd)
        .withDescription("Ends a block to be executed if a string can be converted to a float")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfStringToFloatEndCommand.metadata;
    }
}
