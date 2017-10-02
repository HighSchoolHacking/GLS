import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * One or more mathematical operations.
 */
export class OperationCommand extends Command {
	/**
	 * Metadata on the command.
	 */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Operation)
        .withDescription("One or more mathematical operations.")
        .withParameters([
            new SingleParameter("value", "A value to work with.", true),
            new SingleParameter("operator", "The operation's operator.", true),
            new SingleParameter("value", "A value to work with.", true),
            new RepeatingParameters(
                "Additional values and operators",
                [
                    new SingleParameter("item", "An additional operator.", false),
                    new SingleParameter("item", "An additional value to work with.", false)
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return OperationCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = this.context.convertCommon("value", parameters[1]);

        for (let i = 2; i < parameters.length; i += 2) {
            result += " " + this.context.convertCommon("operator", parameters[i]);
            result += " " + this.context.convertCommon("value", parameters[i + 1]);
        }

        return LineResults.newSingleLine(result, true);
    }
}
