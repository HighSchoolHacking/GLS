import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for starting to declare a class.
 */
export class ClassStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("classDescriptor", "The class name and optional generics.", true),
        new SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ClassStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = "";

        line += this.language.properties.classes.declareStartLeft;
        line += this.context.convertCommon("type", parameters[1]);

        if (parameters.length === 3) {
            line += this.language.properties.classes.declareExtendsLeft;
            line += this.context.convertCommon("type", parameters[2]);
            line += this.language.properties.classes.declareExtendsRight;
        }

        let lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.classes.declareStartRight, 1);

        return new LineResults(lines, false);
    }
}
