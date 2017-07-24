import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for ending a file.
 */
export class FileEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: CommandResult[] = [];
        let source: string[] = this.language.properties.files.endLines;

        for (let i: number = 0; i < source.length; i += 1) {
            output.push(new CommandResult(source[i], 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.files.indentation;
        }

        return new LineResults(output, false);
    }
}
