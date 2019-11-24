import { BudgieUtilities } from "../../BudgieUtilities";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Starts an enum declaration.
 */
export class EnumDeclareStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.EnumDeclareStart)
        .withDescription("Starts an enum declaration")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter([KeywordNames.Export], "Keyword to export this enum publicly.", false),
            new SingleParameter("name", "Name of the enum.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return EnumDeclareStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const remainingParameters = parameters.slice(1);
        const isExported = this.getForExport(remainingParameters);
        const lines: CommandResult[] = [new CommandResult("", 0)];
        let lineStart = "";

        if (isExported) {
            lineStart += BudgieUtilities.stringReplaceAll(this.language.syntax.enums.declareExternal, "{0}", remainingParameters[0]);
        } else {
            lineStart += BudgieUtilities.stringReplaceAll(this.language.syntax.enums.declareInternal, "{0}", remainingParameters[0]);
        }

        addLineEnder(lines, lineStart, 1);

        return new LineResults(lines).withImports(this.language.syntax.enums.requiredImports);
    }

    /**
     * Removes any parameters for exporting the enum.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Whether the enum is exported.
     */
    private getForExport(remainingParameters: string[]): boolean {
        if (remainingParameters[0] !== KeywordNames.Export) {
            return false;
        }

        remainingParameters.shift();
        return true;
    }
}
