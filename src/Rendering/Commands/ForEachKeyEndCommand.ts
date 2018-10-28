import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a foreach key loop.
 */
export class ForEachKeyEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForEachKeyEnd)
        .withDescription("Ends a foreach key loop")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForEachKeyEndCommand.metadata;
    }

    /**
     * Renders the end block string.
     *
     * @returns The end block string.
     */
    protected renderBlockEnd(): string {
        return this.language.syntax.loops.forEachKeyEnd;
    }
}
