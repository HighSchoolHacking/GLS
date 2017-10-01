import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { CommandNames } from "./CommandNames";
import { ImportCommand } from "./ImportCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for importing items from a local file.
 */
export class ImportLocalCommand extends ImportCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.ImportLocal,
        [],
        ImportCommand.parameters);

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
