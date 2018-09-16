import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a file.
 */
export class FileEndCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.FileEnd)
        .withDescription("Ends a file")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return FileEndCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const endLines: string[] = this.language.properties.files.endLines;

        for (const line of endLines) {
            output.push(new CommandResult(line, 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.files.indentation;
        }

        return new LineResults(output, false);
    }
}
