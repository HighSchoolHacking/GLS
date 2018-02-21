import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "../LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Logically inverts a value.
 */
export class NotCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Not)
        .withDescription("Logically inverts a value.")
        .withParameters([
            new SingleParameter("value", "A value to inverse.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return NotCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const not = this.language.properties.operators.not;

        return LineResults.newSingleLine(not + parameters[1], false);
    }
}
