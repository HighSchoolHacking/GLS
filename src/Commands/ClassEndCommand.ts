import { BlockEndCommand } from "./BlockEndCommand";

/**
 * A command for the end of a class declaration.
 */
export class ClassEndCommand extends BlockEndCommand {
    /**
     * Renders the end block for class declarations.
     * 
     * @returns The end block for class declarations.
     */
    protected renderBlockEnd(): string {
        return this.language.properties.classes.declareEnd;
    }
}
