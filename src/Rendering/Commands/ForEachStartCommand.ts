import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a foreach loop over a container's values.
 */
export class ForEachStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForEachStart)
        .withDescription("Starts a foreach loop over a container's values")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("container", "A container to iterate over.", true),
            new SingleParameter("valueType", "The type of the container's values.", true),
            new SingleParameter("value", "The iteration variable.", true),
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
        const imports: Import[] = [];
        let line: string = this.language.syntax.loops.forEachStartLeft;
        let output: CommandResult[];

        line += this.language.syntax.loops.forEachStartIteration;

        if (this.language.syntax.variables.declarationRequired) {
            line += this.language.syntax.variables.declaration;
        }
        if (this.language.syntax.variables.explicitTypes && !this.language.syntax.variables.typesAfterName) {
            const typeLine = this.context.convertParsed([CommandNames.Type, parameters[2]]);

            line += typeLine.commandResults[0].text + " ";
            imports.push(...typeLine.addedImports);
        }

        line += parameters[3];

        line += this.language.syntax.loops.forEachStartSeparator;
        line += parameters[1];

        output = [new CommandResult(line, 0)];
        this.addLineEnder(output, this.language.syntax.loops.forEachStartRight, 1);

        return new LineResults(output).withImports(imports);
    }
}
