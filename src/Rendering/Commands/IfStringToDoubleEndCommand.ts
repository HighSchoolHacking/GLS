import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a block to be executed if a string can be converted to a double.
 */
export class IfStringToDoubleEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfStringToDoubleEnd)
        .withDescription("Ends a block to be executed if a string can be converted to a double")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfStringToDoubleEndCommand.metadata;
    }
}
