import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { CommandNames } from "./CommandNames";
import { ImportCommand } from "./ImportCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for importing items from an absolute package.
 */
export class ImportPackageCommand extends ImportCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.ImportPackage,
        [],
        ImportCommand.parameters);

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
