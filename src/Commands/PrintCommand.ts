import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { Parameter } from "./Metadata/Parameters/Parameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for printing.
 */
export class PrintCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.Print,
        [],
        [
            new SingleParameter("contents", "Contents to be printed.", false)
        ]);

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

        line += this.language.properties.printing.start;

        if (parameters.length > 1) {
            line += parameters[1];
        }

        line += this.language.properties.printing.end;

        const results = LineResults.newSingleLine(line, true);

        results.addImports(this.language.properties.printing.requiredImports);

        return results;
    }
}
