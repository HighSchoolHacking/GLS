import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Starts an interface declaration.
 */
export class InterfaceStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.InterfaceStart)
        .withDescription("Starts an interface declaration")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter([KeywordNames.Export], "Keyword to export this class publicly.", false),
            new SingleParameter("InterfaceName", "The interface name.", true),
            new RepeatingParameters("Parent interfaces", [new SingleParameter("parentInterfaceName", "Names of parent interfaces.", true)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return InterfaceStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.syntax.interfaces.supported) {
            return LineResults.newSingleLine("");
        }

        const remainingParameters = parameters.slice(1);
        let line = "";

        line += this.getForExport(remainingParameters);
        line += this.language.syntax.interfaces.declareStartLeft;
        line += remainingParameters[0];

        if (remainingParameters.length > 1) {
            line += this.language.syntax.interfaces.declareExtendsLeft;

            for (let i = 1; i < remainingParameters.length; i++) {
                line += remainingParameters[i];
                if (i !== remainingParameters.length - 1) {
                    line += this.language.syntax.interfaces.declareExtendsRight;
                }
            }
        }

        const output: CommandResult[] = [new CommandResult(line, 0)];
        addLineEnder(output, this.language.syntax.interfaces.declareStartRight, 1);

        return new LineResults(output);
    }

    /**
     * Removes any parameters for exporting the interface.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForExport(remainingParameters: string[]): string {
        if (remainingParameters[0] !== KeywordNames.Export) {
            return this.language.syntax.classes.exports.internal;
        }

        remainingParameters.shift();
        let exported = this.language.syntax.classes.exports.exportedLeft;

        if (this.language.syntax.classes.exports.exportedIncludesName) {
            exported += remainingParameters[0];
            exported += this.language.syntax.classes.exports.exportedMiddle;
        }

        return exported;
    }
}
