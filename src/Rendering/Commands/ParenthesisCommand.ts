import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Wraps contents with parenthesis.
 */
export class ParenthesisCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Parenthesis)
        .withDescription("Wraps contents with parenthesis")
        .withParameters([
            new RepeatingParameters("Contents within the parenthesis", [
                new SingleParameter("contents", "Contents within the parenthesis.", false),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ParenthesisCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = "";

        output += "(";
        output += parameters.slice(1).join(" ");
        output += ")";

        return LineResults.newSingleLine(output);
    }
}
