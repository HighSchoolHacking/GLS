import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Prints a string.
 */
export class PrintCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Print)
        .withDescription("Prints a string")
        .withParameters([new SingleParameter("contents", "Contents to be printed.", false)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return PrintCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line = "";

        line += this.language.syntax.printing.start;

        if (parameters.length > 1) {
            line += parameters[1];
        }

        line += this.language.syntax.printing.end;

        const results = LineResults.newSingleLine(line, true);

        results.addImports(this.language.syntax.printing.requiredImports);

        return results;
    }
}
