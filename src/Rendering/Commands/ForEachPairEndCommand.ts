import { CommandNames } from "../Names/CommandNames";
import { BlockEndCommand } from "./BlockEndCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a foreach pair loop.
 */
export class ForEachPairEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForEachPairEnd)
        .withDescription("Ends a foreach pair loop")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForEachPairEndCommand.metadata;
    }

    /**
     * Renders the end block string.
     *
     * @returns The end block string.
     */
    protected renderBlockEnd(): string {
        return this.language.syntax.loops.forEachPairEnd;
    }
}
