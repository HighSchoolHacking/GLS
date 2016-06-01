import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for starting a file.
 */
export class FileStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("fileStart", "The name of the file.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return FileStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: CommandResult[] = [],
            source: string[] = this.language.properties.style.fileStartLines;

        for (let i: number = 0; i < source.length; i += 1) {
            output.push(new CommandResult(source[i].replace("{0}", parameters[1]), 0));
        }

        if (output.length !== 0) {
            output[output.length - 1].indentation = this.language.properties.style.fileIndentation;
        }

        return new LineResults(output, false);
    }
}
