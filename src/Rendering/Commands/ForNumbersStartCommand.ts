import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Starts a for loop over numbers.
 */
export class ForNumbersStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForNumbersStart)
        .withDescription("Starts a for loop over numbers")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("name", "The name of the loop variable.", true),
            new SingleParameter("type", "The type of the loop variable", true),
            new SingleParameter("start", "What the loop variable starts at.", true),
            new SingleParameter("end", "What the loop variable ends at.", true),
            new SingleParameter("increment", "Increment to increase by, if not 1.", false),
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

        if (parameters.length === 6 && this.language.syntax.loops.rangedForLoopsFunctionalIncrementor) {
            starter = this.renderStartFunctional(parameters);
        } else if (this.language.syntax.loops.rangedForLoops) {
            starter = this.renderStartRanged(parameters);
        } else {
            starter = this.renderStartLoop(parameters);
        }

        const lines: CommandResult[] = [new CommandResult(starter, 0)];
        addLineEnder(lines, this.language.syntax.conditionals.startRight, 1);

        return new LineResults(lines);
    }

    /**
     * Renders a function-like loop.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderStartFunctional(parameters: string[]): string {
        let output = "";

        output += this.language.syntax.loops.rangedForLoopsFunctionalLeft;
        output += parameters[3];
        output += this.language.syntax.loops.rangedForLoopsFunctionalMiddleLeft;
        output += parameters[4];
        output += this.language.syntax.loops.rangedForLoopsFunctionalMiddleMiddle;
        output += parameters[5];
        output += this.language.syntax.loops.rangedForLoopsFunctionalMiddleRight;
        output += parameters[1];
        output += this.language.syntax.loops.rangedForLoopsFunctionalRight;

        return output;
    }

    /**
     * Renders a traditional loop.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderStartLoop(parameters: string[]): string {
        let output: string = this.language.syntax.loops.for;

        let incrementor: string;
        if (parameters.length === 6) {
            incrementor = parameters[5];
        } else {
            incrementor = "1";
        }

        output += this.language.syntax.conditionals.startLeft;
        output += this.context.convertParsed([CommandNames.Variable, parameters[1], parameters[2], parameters[3]]).commandResults[0].text;
        output += this.language.syntax.style.semicolon + " ";
        output += this.context.convertParsed([CommandNames.Operation, parameters[1], "less than", parameters[4]]).commandResults[0].text;
        output += this.language.syntax.style.semicolon + " ";
        output += this.context.convertParsed([CommandNames.Operation, parameters[1], "increase by", incrementor]).commandResults[0].text;

        return output;
    }

    /**
     * Renders a Pythonic ranged loop.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderStartRanged(parameters: string[]): string {
        let output: string = this.language.syntax.loops.for;

        output += this.language.syntax.conditionals.startLeft;
        output += parameters[1];
        output += this.language.syntax.loops.rangedForLoopsLeft;
        output += parameters[3];
        output += this.language.syntax.loops.rangedForLoopsMiddle;
        output += parameters[4];

        if (parameters.length === 6) {
            output += this.language.syntax.loops.rangedForLoopsMiddle;
            output += parameters[5];
        }

        output += this.language.syntax.loops.rangedForLoopsRight;

        return output;
    }
}
