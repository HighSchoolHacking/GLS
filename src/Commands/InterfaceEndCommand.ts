import { BlockEndCommand } from "./BlockEndCommand";

/**
 * A command for the end of a interface declaration.
 */
export class InterfaceEndCommand extends BlockEndCommand {
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
