import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { CommandNames } from "./CommandNames";
import { ImportCommand } from "./ImportCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Imports items from a local file.
 */
export class ImportLocalCommand extends ImportCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ImportLocal)
        .withDescription("Imports items from a local file")
        .withParameters(ImportCommand.parameters);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ImportLocalCommand.metadata;
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
