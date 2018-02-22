import { LineResults } from "../LineResults";
import { Command } from "./Command";

import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Returns a value.
 */
export class ReturnCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Return)
        .withDescription("Returns a value.")
        .withParameters([
            new SingleParameter("value", "A value to return.", false)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ReturnCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = "return";

        if (parameters.length > 1) {
            output += " " + parameters[1];
        }

        return LineResults.newSingleLine(output, true);
    }
}
