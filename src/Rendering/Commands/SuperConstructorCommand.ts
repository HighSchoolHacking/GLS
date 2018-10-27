import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Calls a parent class constructor.
 */
export class SuperConstructorCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.SuperConstructor)
        .withDescription("Calls a parent class constructor")
        .withParameters([
            new RepeatingParameters("Function arguments", [
                new SingleParameter("argument", "An argument for the super constructor.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return SuperConstructorCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = "";

        output += this.language.syntax.classes.superConstructor;
        output += "(";

        if (parameters.length > 1) {
            output += parameters[1];

            for (let i = 2; i < parameters.length; i += 1) {
                output += ", " + parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
