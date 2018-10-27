import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Checks whether a variable is null.
 */
export class IsNullCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IsNull)
        .withDescription("Checks whether a variable is null")
        .withParameters([new SingleParameter("value", "A value to check against null.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IsNullCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const left: string = this.language.syntax.variables.isNullLeft;
        const middle: string = this.language.syntax.variables.isNullMiddle;
        const right: string = this.language.syntax.variables.nullRight;

        return LineResults.newSingleLine(left + parameters[1] + middle + right);
    }
}
