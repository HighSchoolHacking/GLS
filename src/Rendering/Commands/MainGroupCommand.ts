import { GlsUtilities } from "../../GlsUtilities";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Prints the name of the language's main standalone functions group.
 */
export class MainGroupCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MainGroup).withDescription(
        "Prints the name of the language's main standalone functions group.",
    );

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MainGroupCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const fileName = this.context.getFileMetadata().getFileName();
        const group = GlsUtilities.stringReplaceAll(this.language.syntax.main.group, "{0}", fileName);

        return LineResults.newSingleLine(group);
    }
}
