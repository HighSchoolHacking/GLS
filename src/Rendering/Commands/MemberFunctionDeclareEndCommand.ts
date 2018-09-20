import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a member function.
 */
export class MemberFunctionDeclareEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MemberFunctionDeclareEnd)
        .withDescription("Ends a member function")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberFunctionDeclareEndCommand.metadata;
    }
}
