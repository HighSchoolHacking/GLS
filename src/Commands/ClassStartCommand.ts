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
        new SingleParameter("extends", "Keyword to extend from a parent class.", false),
        new SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false),
        new SingleParameter("implements", "Keyword to implement from parent interface(s).", false),
        new RepeatingParameters(
            "Parent Interfaces",
            [
                new SingleParameter("interfaceName",
                "Names of parent interfaces",
                false)
            ])
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

        if (parameters.length >= 4) {

            if (parameters[2] === "implements") {
                if (this.language.properties.interfaces.supported === true) {
                    line += this.language.properties.classes.declareImplementsLeft;

                    for (let i: number = 3; i < parameters.length; i++) {
                            line += parameters[i];
                            if (i !== parameters.length - 1) {
                                line += this.language.properties.interfaces.declareExtendsRight;
                            }
                    }

                    line += this.language.properties.classes.declareExtendsRight;
                }
            }

            else {
                line += this.language.properties.classes.declareExtendsLeft;
                line += this.context.convertCommon("type", parameters[3]);
                line += this.language.properties.classes.declareExtendsRight;

                if (parameters[4] === "implements") {
                    if (this.language.properties.interfaces.supported === true) {
                        if (this.language.properties.interfaces.declareImplementsExplicit === true) {
                            line += this.language.properties.classes.declareImplementsLeft;
                        }

                        else {
                            line += this.language.properties.interfaces.declareExtendsRight;
                        }

                        for (let i: number = 5; i < parameters.length; i++) {
                            line += parameters[i];
                            if (i !== parameters.length - 1) {
                                line += this.language.properties.interfaces.declareExtendsRight;
                            }
                        }
                    }
                }
            }
        }

        let lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.classes.declareStartRight, 1);

        return new LineResults(lines, false);
    }
}
