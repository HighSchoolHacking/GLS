import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { ImportCommand } from "./ImportCommand";

/**
 * A command for importing items from an absolute package.
 */
export class ImportPackageCommand extends ImportCommand {
    /**
     * @returns Whether this is from an absolute package or local file.
     */
    protected getRelativity(): ImportRelativity {
        return ImportRelativity.Absolute;
    }
}
