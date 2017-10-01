import { BlockEndCommand } from "./BlockEndCommand";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for the end of a interface declaration.
 */
export class InterfaceEndCommand extends BlockEndCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.InterfaceEnd,
        [-1],
        []);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return InterfaceEndCommand.metadata;
    }

    /**
     * Renders the end block for interface declarations.
     *
     * @returns The end block for interface declarations.
     */
    protected renderBlockEnd(): string {
        if (this.language.properties.interfaces.supported) {
            return this.language.properties.interfaces.declareEnd;
        }

        return "";
    }
}
