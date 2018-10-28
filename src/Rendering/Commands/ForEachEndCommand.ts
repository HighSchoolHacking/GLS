import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a foreach loop.
 */
export class ForEachEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForEachEnd)
        .withDescription("Ends a foreach loop")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForEachEndCommand.metadata;
    }

    /**
     * Renders the end block string.
     *
     * @returns The end block string.
     */
    protected renderBlockEnd(): string {
        return this.language.syntax.loops.forEachEnd;
    }
}
