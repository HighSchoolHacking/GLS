import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { ImportCommand } from "./ImportCommand";

/**
 * A command for importing items from a local file.
 */
export class ImportLocalCommand extends ImportCommand {
    /**
     * @returns A prefix to add to paths.
     */
    protected getPathPrefix(): string {
        if (this.language.properties.imports.useLocalRelativePaths) {
            return "./";
        }

        return "";
    }

    /**
     * @returns Whether this is from an "absolute" package or "local" file.
     */
    protected getRelativity(): string {
        return "local";
    }
}
