import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for printing.
 */
export class PrintCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("contents", "Contents to be printed.", false)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return PrintCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: ([contents]).
     */
    public render(parameters: string[]): LineResults {
        let result: string = "";

        result += this.language.properties.style.printStart;

        if (parameters.length > 1) {
            result += parameters[1];
        }

        result += this.language.properties.style.printEnd;

        return LineResults.newSingleLine(result, true);
    }
}
