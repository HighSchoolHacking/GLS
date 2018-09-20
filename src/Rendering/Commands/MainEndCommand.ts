import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a main function.
 */
export class MainEndCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MainEnd)
        .withDescription("Ends a main function")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MainEndCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const endLines: string[] = this.language.syntax.main.mainEndLines;

        for (const endLine of endLines) {
            output.push(new CommandResult(endLine, 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.syntax.main.mainIndentation;
        }

        return new LineResults(output, false);
    }
}
