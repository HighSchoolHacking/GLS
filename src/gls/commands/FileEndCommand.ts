import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for ending a file.
 */
export class FileEndCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("fileName", "The name of the file.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return FileEndCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: CommandResult[] = [],
            source: string[] = this.language.properties.style.fileEndLines;

        for (let i: number = 0; i < source.length; i += 1) {
            output.push(new CommandResult(source[i].replace("{0}", parameters[1]), 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.style.fileIndentation;
        }

        return new LineResults(output, false);
    }
}
