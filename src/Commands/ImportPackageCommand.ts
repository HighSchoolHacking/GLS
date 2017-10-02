import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { CommandNames } from "./CommandNames";
import { ImportCommand } from "./ImportCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Imports items from an absolute package.
 */
export class ImportPackageCommand extends ImportCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ImportPackage)
        .withDescription("Imports items from an absolute package.")
        .withParameters(ImportCommand.parameters);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ImportPackageCommand.metadata;
    }

    /**
     * @returns Whether this is from an absolute package or local file.
     */
    protected getRelativity(): ImportRelativity {
        return ImportRelativity.Absolute;
    }
}
