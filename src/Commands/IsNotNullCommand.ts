import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for checking whether a variable is not null.
 */
export class IsNotNullCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.IsNotNull,
        [],
        [
            new SingleParameter("value", "A value to check against null.", true)
        ]);

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
        const left: string = this.language.properties.variables.isNotNullLeft;
        const middle: string = this.language.properties.variables.isNotNullMiddle;
        const right: string = this.language.properties.variables.nullRight;

        return LineResults.newSingleLine(left + parameters[1] + middle + right, false);
    }
}
