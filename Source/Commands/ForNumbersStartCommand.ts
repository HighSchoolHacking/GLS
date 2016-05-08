import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for the beginning of a for loop over numbers.
 */
export class ForNumbersStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the loop variable.", true),
        new SingleParameter("type", "The type of the loop variable", true),
        new SingleParameter("start", "What the loop variable starts at.", true),
        new SingleParameter("end", "What the loop variable ends at.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ForNumbersStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name, type, start, end).
     */
    public render(parameters: string[]): LineResults {
        let starter: string;

        if (this.language.properties.loops.rangedForLoops) {
            starter = this.renderStartRanged(parameters);
        } else {
            starter = this.renderStartLoop(parameters);
        }

        let lines: CommandResult[] = [new CommandResult(starter, 0)];
        this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

        return new LineResults(lines, false);
    }

    /**
     * Renders a Pythonic ranged loop.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name, type, start, end).
     */
    private renderStartRanged(parameters: string[]): string {
        let output: string = this.language.properties.loops.for;

        output += this.language.properties.conditionals.startLeft;
        output += parameters[1];
        output += this.language.properties.loops.rangedForLoopsLeft;
        output += parameters[3];
        output += this.language.properties.loops.rangedForLoopsMiddle;
        output += parameters[4];
        output += this.language.properties.loops.rangedForLoopsRight;

        return output;
    }

    /**
     * Renders a traditional loop.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name, type, start, end).
     */
    private renderStartLoop(parameters: string[]): string {
        let output: string = this.language.properties.loops.for;

        output += this.language.properties.conditionals.startLeft;
        output += this.context.convertParsed(["variable", parameters[1], parameters[2], parameters[3]]).commandResults[0].text;
        output += this.language.properties.style.semicolon + " ";
        output += this.context.convertParsed(["operation", parameters[1], "less than", parameters[4]]).commandResults[0].text;
        output += this.language.properties.style.semicolon + " ";
        output += this.context.convertParsed(["operation", parameters[1], "increase by", "1"]).commandResults[0].text;

        return output;
    }
}
