import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
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
     * @returns Whether this is from an absolute package or local file.
     */
    protected getRelativity(): ImportRelativity {
        if (this.language.properties.imports.useLocalRelativeImports) {
            return ImportRelativity.Local;
        }

        return ImportRelativity.Absolute;
    }
}
