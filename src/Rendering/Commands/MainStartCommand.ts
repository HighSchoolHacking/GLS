import { BudgieUtilities } from "../../BudgieUtilities";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a main function.
 */
export class MainStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MainStart)
        .withDescription("Starts a main function")
        .withParameters([
            new KeywordParameter([KeywordNames.Throws], "Keyword to list possible exceptions", false),
            new RepeatingParameters("Possible exceptions", [
                new SingleParameter("possibleException", "A possible exception thrown by this function.", true),
            ]),
        ]);

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
        const fileName = this.context.getFileMetadata().getFileName();
        const throwsMarker = this.collectThrowsMarker(parameters);

        for (const startLine of startLines) {
            let line = BudgieUtilities.stringReplaceAll(startLine, "{0}", fileName);
            line = BudgieUtilities.stringReplaceAll(startLine, "{1}", throwsMarker);

            output.push(new CommandResult(line, 0));
        }

        if (output.length !== 0) {
            output[output.length - 1].indentation = this.language.syntax.main.mainIndentation;
        }

        return new LineResults(output);
    }

    private collectThrowsMarker(parameters: string[]): string {
        if (!this.language.syntax.functions.explicitThrows) {
            return "";
        }

        const throwsIndex = parameters.indexOf(KeywordNames.Throws);
        if (throwsIndex === -1) {
            return "";
        }

        let marker = this.language.syntax.functions.throwsMarker;

        for (let i = throwsIndex + 1; i < parameters.length; i += 1) {
            marker += parameters[i];

            if (i !== parameters.length - 1) {
                marker += ", ";
            }
        }

        return marker;
    }
}
