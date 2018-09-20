import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Starts a main function.
 */
export class MainStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MainStart).withDescription("Starts a main function");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MainStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const startLines: string[] = this.language.syntax.main.mainStartLines;

        for (const startLine of startLines) {
            output.push(new CommandResult(startLine, 0));
        }

        if (output.length !== 0) {
            output[output.length - 1].indentation = this.language.syntax.main.mainIndentation;
        }

        return new LineResults(output, false);
    }
}
