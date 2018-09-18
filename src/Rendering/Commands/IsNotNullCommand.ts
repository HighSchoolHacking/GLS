import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Checks whether a variable is not null.
 */
export class IsNotNullCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IsNotNull)
        .withDescription("Checks whether a variable is not null")
        .withParameters([new SingleParameter("value", "A value to check against null.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IsNotNullCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const left: string = this.language.syntax.variables.isNotNullLeft;
        const middle: string = this.language.syntax.variables.isNotNullMiddle;
        const right: string = this.language.syntax.variables.nullRight;

        return LineResults.newSingleLine(left + parameters[1] + middle + right, false);
    }
}
