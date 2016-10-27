import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command to throw an exception.
 */
export class ThrowExceptionCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("exception", "Exception to throw.", true),
        new SingleParameter("message", "Message to attach to exception.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ThrowExceptionCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.properties.exceptions.throw;
        line += " " + parameters[1];
        line += this.language.properties.exceptions.throwExceptionMiddle;
        line += "\"" + parameters[2] + "\"";

        let lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.exceptions.throwExceptionRight, 0);
        return new LineResults(lines, true);
    }
}
