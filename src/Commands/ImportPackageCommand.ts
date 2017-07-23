import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { ImportCommand } from "./ImportCommand";

/**
 * A command for importing items from an absolute package.
 */
export class ImportPackageCommand extends ImportCommand {
    /**
     * @returns A prefix to add to paths.
     */
    protected getPathPrefix(): string {
        return "";
    }

    /**
     * @returns Whether this is from an "absolute" package or "local" file.
     */
    protected getRelativity(): string {
        return "absolute";
    }
}
