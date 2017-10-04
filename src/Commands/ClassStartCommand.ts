import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a class declaration.
 */
export class ClassStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ClassStart)
        .withDescription("Starts a class declaration.")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("classDescriptor", "The class name and optional generics.", true),
            new SingleParameter("extends", "Keyword to extend from a parent class.", false),
            new SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false),
            new SingleParameter("implements", "Keyword to implement from parent interface(s).", false),
            new RepeatingParameters(
                "Parent Interfaces",
                [
                    new SingleParameter("interfaceName", "Names of parent interfaces", false)
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ClassStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line = "";

        line += this.language.properties.classes.declareStartLeft;
        line += this.context.convertCommon(CommandNames.Type, parameters[1]);

        if (parameters.length >= 4) {
            if (parameters[2] === "implements") {
                if (this.language.properties.interfaces.supported) {
                    line += this.language.properties.classes.declareImplementsLeft;

                    for (let i = 3; i < parameters.length; i++) {
                            line += parameters[i];
                            if (i !== parameters.length - 1) {
                                line += this.language.properties.interfaces.declareExtendsRight;
                            }
                    }

                    line += this.language.properties.classes.declareExtendsRight;
                }
            } else {
                line += this.language.properties.classes.declareExtendsLeft;
                line += this.context.convertCommon(CommandNames.Type, parameters[3]);
                line += this.language.properties.classes.declareExtendsRight;

                if (parameters[4] === "implements") {
                    if (this.language.properties.interfaces.supported) {
                        if (this.language.properties.interfaces.declareImplementsExplicit) {
                            line += this.language.properties.classes.declareImplementsLeft;
                        } else {
                            line += this.language.properties.interfaces.declareExtendsRight;
                        }

                        for (let i = 5; i < parameters.length; i++) {
                            line += parameters[i];
                            if (i !== parameters.length - 1) {
                                line += this.language.properties.interfaces.declareExtendsRight;
                            }
                        }
                    }
                }
            }
        }

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.classes.declareStartRight, 1);

        return new LineResults(lines, false);
    }
}
