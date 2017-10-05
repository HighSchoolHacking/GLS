import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a section of a string of a length.
 */
export class StringSubstringLengthCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringSubstringLength)
        .withDescription("Retrieves a section of a string of a length.")
        .withParameters([
            new SingleParameter("startIndex", "Starting index of the section.", true),
            new SingleParameter("startIndex", "Length of the section.", false)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringSubstringLengthCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let results = "";

        results += this.language.properties.strings.substrings.left;
        results += parameters[1];
        results += this.language.properties.strings.substrings.separator;

        if (parameters.length === 2) {
            results += parameters[2];
        } else {
            results += "X";
        }

        results += this.language.properties.strings.substrings.right;

        return LineResults.newSingleLine(results, true);
    }
}
