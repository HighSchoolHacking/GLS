import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for the beginning of a foreach loop over a container's values.
 */
export class ForEachStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.ForEachStart,
        [1],
        [
            new SingleParameter("container", "A container to iterate over.", true),
            new SingleParameter("valueType", "The type of the container's values.", true),
            new SingleParameter("value", "The iteration variable.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForEachStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.properties.loops.forEachStartLeft;
        let output: CommandResult[];

        line += this.language.properties.loops.forEachStartItteration;

        if (this.language.properties.variables.declarationRequired) {
            line += this.language.properties.variables.declaration;
        }
        if (this.language.properties.variables.explicitTypes && !this.language.properties.variables.typesAfterName) {
                line += parameters[2] + " ";
        }

        line += parameters[3];

        line += this.language.properties.loops.forEachStartSeparator;
        line += parameters[1];

        output = [new CommandResult(line, 0)];
        this.addLineEnder(output, this.language.properties.loops.forEachStartRight, 1);

        return new LineResults(output, false);
    }
}
