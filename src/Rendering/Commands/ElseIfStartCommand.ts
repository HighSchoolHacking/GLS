import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts an elif statement.
 */
export class ElseIfStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ElseIfStart)
        .withDescription("Starts an elif statement")
        .withIndentation([-1, 1])
        .withParameters([new SingleParameter("conditional", "A conditional to check.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ElseIfStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const lines = [new CommandResult("", -1)];
        let line: CommandResult;

        if (!this.language.properties.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, 0);

        line = lines[lines.length - 1];
        line.text += this.language.properties.conditionals.elif;
        line.text += this.language.properties.conditionals.startLeft;
        line.text += parameters[1];

        this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

        return new LineResults(lines, false);
    }
}
