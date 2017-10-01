import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for starting to declare an interface.
 */
export class InterfaceStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.InterfaceStart,
        [1],
        [
            new SingleParameter("InterfaceName", "The Interface name.", true),
            new RepeatingParameters(
                "Parent interfaces.",
                [
                    new SingleParameter(
                        "parentInterfaceName",
                        "Names of parent interfaces.",
                        true)
                ])
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

        if (!this.language.properties.interfaces.supported) {
            return LineResults.newSingleLine(line, false);
        }

        line += this.language.properties.interfaces.declareStartLeft;
        line += parameters[1];

        if (parameters.length > 2) {
            line += this.language.properties.interfaces.declareExtendsLeft;

            for (let i = 2; i < parameters.length; i++) {
                line += parameters[i];
                if (i !== parameters.length - 1) {
                    line += this.language.properties.interfaces.declareExtendsRight;
                }
            }
        }

        const output: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(output, this.language.properties.interfaces.declareStartRight, 1);

        return new LineResults(output, false);
    }
}
