import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares an array type.
 */
export class GenericTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.GenericType)
        .withDescription("Declares generic types.")
        .withParameters([new RepeatingParameters("Generic types.", [new SingleParameter("type", "A type of object.", true)])]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return GenericTypeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by the type name.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = parameters[1];

        if (this.language.syntax.variables.explicitTypes) {
            output += "<" + parameters.slice(2).join(", ") + ">";
        }

        return LineResults.newSingleLine(output, false);
    }
}
