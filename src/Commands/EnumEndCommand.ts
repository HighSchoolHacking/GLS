import { BlockEndCommand } from "./BlockEndCommand";

/**
 * A command for ending an enum declaration.
 */
export class EnumEndCommand extends BlockEndCommand {
    /**
     * Renders the end block for enums.
     * 
     * @returns The end block for enums.
     */
    protected renderEnumEnd(): string {
        if (this.language.properties.enums.isObject) {
            return this.language.properties.conditionals.end + ";";
        }

        else {
            return this.language.properties.conditionals.end;
        }
    }
}
