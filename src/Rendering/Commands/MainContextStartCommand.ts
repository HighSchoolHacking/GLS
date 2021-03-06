import { BudgieUtilities } from "../../BudgieUtilities";
import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Starts a main context.
 */
export class MainContextStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MainContextStart).withDescription("Starts a main context");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MainContextStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const startLines: string[] = this.language.syntax.main.contextStartLines;
        const fileName = this.context.getFileMetadata().getFileName();

        for (const startLine of startLines) {
            const line = BudgieUtilities.stringReplaceAll(startLine, "{0}", fileName);
            output.push(new CommandResult(line, 0));
        }

        if (output.length !== 0) {
            output[output.length - 1].indentation = this.language.syntax.main.contextIndentation;
        }

        return new LineResults(output);
    }
}
