import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for starting a file.
 */
export class FileStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new RepeatingParameters(
            "Directories leading to the file.",
            [
                new SingleParameter("directory", "Directory leading to the file", false)
            ]),
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
        let output: CommandResult[] = [];
        let source: string[] = this.language.properties.files.startLines;
        let packagePathAndFileName: string[] = parameters.slice(1);
        let packagePath: string[] = packagePathAndFileName.slice(0, packagePathAndFileName.length - 1);
        let packagePathJoined: string = this.context.convertToCase(
            packagePath,
            this.language.properties.files.startCase);
        let fileName: string = packagePathAndFileName[packagePathAndFileName.length - 1];

        for (let i: number = 0; i < source.length; i += 1) {
            let line = source[i];

            line = line.replace("{0}", fileName);
            line = line.replace("{1}", packagePathJoined);

            output.push(new CommandResult(line, 0));
        }

        if (output.length !== 0) {
            output[output.length - 1].indentation = this.language.properties.files.indentation;
        }

        this.context.setDirectoryPath(packagePath);

        return new LineResults(output, false);
    }
}
