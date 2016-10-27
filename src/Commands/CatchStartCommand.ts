import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for the beginning of a catch block.
 */
export class CatchStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("exception", "Target exception.", true),
        new SingleParameter("alias", "Alias for target exception.", false)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return CatchStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.properties.exceptions.catch;
        line += this.language.properties.exceptions.catchStartMiddle;
        line += parameters[1];

        if (parameters.length === 3) {
            line += this.language.properties.exceptions.catchStartLink;
            line += parameters[2];
        }

        let lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.exceptions.catchStartRight, 1);

        return new LineResults(lines, false);
    }
}
