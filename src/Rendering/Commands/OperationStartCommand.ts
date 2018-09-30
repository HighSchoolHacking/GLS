import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Start of one or more mathematical operations.
 */
export class OperationStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.OperationStart)
        .withDescription("Start of one or more mathematical operations")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("value", "A value to work with.", true),
            new SingleParameter("operator", "The operation's operator.", true),
            new SingleParameter("value", "A value to work with.", true),
            new RepeatingParameters("Additional values and operators", [
                new SingleParameter("item", "An additional operator.", false),
                new SingleParameter("item", "An additional value to work with.", false),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return OperationStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = this.context.convertCommon(CommandNames.Value, parameters[1]);

        for (let i = 2; i < parameters.length - 1; i += 2) {
            output += " " + this.context.convertCommon(CommandNames.Operator, parameters[i]);
            output += " " + this.context.convertCommon(CommandNames.Value, parameters[i + 1]);
        }

        return LineResults.newSingleLine(output, false);
    }
}
