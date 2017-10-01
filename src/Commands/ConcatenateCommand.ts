import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for concatenating strings.
 */
export class ConcatenateCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.Concatenate,
        [],
        [
            new SingleParameter("string", "A string to concatenate.", true),
            new SingleParameter("string", "A string to concatenate.", true),
            new RepeatingParameters(
                "Additional strings to concatenate.",
                [
                    new SingleParameter("string", "A string to concatenate.", false)
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ConcatenateCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = parameters[1];

        for (let i = 2; i < parameters.length; i += 1) {
            result += this.language.properties.strings.concatenate + parameters[i];
        }

        return LineResults.newSingleLine(result, false);
    }
}
