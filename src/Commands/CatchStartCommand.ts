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
        new SingleParameter("alias", "Alias for target exception.", true)
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
        let lines = [new CommandResult("", -1)];
        let line: CommandResult;

        if (!this.language.properties.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.properties.exceptions.blockEnd, 0);

        line = lines[lines.length - 1];
        line.text += this.language.properties.exceptions.catch;
        line.text += this.language.properties.exceptions.catchStartMiddle;
        if (this.language.properties.exceptions.requiresExceptionType) {
            line.text += parameters[1];
            line.text += this.language.properties.exceptions.catchStartLink;
        }
        line.text += parameters[2];

        this.addLineEnder(lines, this.language.properties.exceptions.catchStartRight, 2);

        return new LineResults(lines, false);
    }
}
