import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts an enum declaration.
 */
export class EnumStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.EnumStart)
        .withDescription("Starts an enum declaration.")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("name", "The name of the enum.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return EnumStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line = "";

        line += this.language.properties.enums.declareStartLeft;
        line += parameters[1];

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.enums.declareStartRight, 1);

        return new LineResults(lines, false);
    }
}
