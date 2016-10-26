import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for starting to declare an interface.
 */
export class InterfaceStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("InterfaceName", "The Interface name.", true),
        new RepeatingParameters(
            "Parent interfaces.",
            [
                new SingleParameter(
                    "parentInterfaceName",
                    "Names of parent interfaces.",
                    true)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return InterfaceStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = "";

        if (this.language.properties.interfaces.supported === false) {
            return LineResults.newSingleLine(line, false);
        }

        line += this.language.properties.interfaces.declareStartLeft;
        line += parameters[1];

        if (parameters.length > 2) {
            line += this.language.properties.interfaces.declareExtendsLeft;

            for (let i: number = 2; i < parameters.length; i++) {
                line += parameters[i];
                if (i !== parameters.length - 1) {
                    line += this.language.properties.interfaces.declareExtendsRight;
                }
            }
        }

        let output: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(output, this.language.properties.interfaces.declareStartRight, 1);

        return new LineResults(output, false);
    }
}
