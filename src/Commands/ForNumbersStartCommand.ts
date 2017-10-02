import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a for loop over numbers.
 */
export class ForNumbersStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForNumbersStart)
        .withDescription("Starts a for loop over numbers.")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("name", "The name of the loop variable.", true),
            new SingleParameter("type", "The type of the loop variable", true),
            new SingleParameter("start", "What the loop variable starts at.", true),
            new SingleParameter("end", "What the loop variable ends at.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForNumbersStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let starter: string;

        if (this.language.properties.loops.rangedForLoops) {
            starter = this.renderStartRanged(parameters);
        } else {
            starter = this.renderStartLoop(parameters);
        }

        const lines: CommandResult[] = [new CommandResult(starter, 0)];
        this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

        return new LineResults(lines, false);
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
}
