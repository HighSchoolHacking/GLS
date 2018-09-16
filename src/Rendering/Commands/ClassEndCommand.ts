import { BlockEndCommand } from "./BlockEndCommand";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a class declaration.
 */
export class ClassEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ClassEnd)
        .withDescription("Ends a class declaration")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ClassEndCommand.metadata;
    }

    /**
     * Renders the end block for class declarations.
     *
     * @returns The end block for class declarations.
     */
    protected renderBlockEnd(): string {
        return this.language.properties.classes.declareEnd;
    }
}
