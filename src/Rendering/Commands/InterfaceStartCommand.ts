import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
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
            new SingleParameter("InterfaceName", "The Interface name.", true),
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
        let line = "";

        if (!this.language.syntax.interfaces.supported) {
            return LineResults.newSingleLine(line);
        }

        line += this.language.syntax.interfaces.declareStartLeft;
        line += parameters[1];

        if (parameters.length > 2) {
            line += this.language.syntax.interfaces.declareExtendsLeft;

            for (let i = 2; i < parameters.length; i++) {
                line += parameters[i];
                if (i !== parameters.length - 1) {
                    line += this.language.syntax.interfaces.declareExtendsRight;
                }
            }
        }

        const output: CommandResult[] = [new CommandResult(line, 0)];
        addLineEnder(output, this.language.syntax.interfaces.declareStartRight, 1);

        return new LineResults(output);
    }
}
