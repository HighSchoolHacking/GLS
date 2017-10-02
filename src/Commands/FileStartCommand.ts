import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a file.
 */
export class FileStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.FileStart)
        .withDescription("Starts a file.")
        .withIndentation([1])
        .withParameters([
            new RepeatingParameters(
                "Directories leading to the file.",
                [
                    new SingleParameter("directory", "Directory leading to the file", false)
                ]),
            new SingleParameter("fileStart", "The name of the file.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return FileStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const source: string[] = this.language.properties.files.startLines;
        const packagePathAndFileName: string[] = parameters.slice(1);
        const packagePath: string[] = packagePathAndFileName.slice(0, packagePathAndFileName.length - 1);
        const packagePathJoined: string = this.context.convertArrayToCase(
            packagePath,
            this.language.properties.files.startCase);
        const fileName: string = packagePathAndFileName[packagePathAndFileName.length - 1];

        for (let line of source) {
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
