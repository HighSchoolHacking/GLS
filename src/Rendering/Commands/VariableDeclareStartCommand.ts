import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a variable declaration.
 */
export class VariableDeclareStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.VariableDeclareStart)
        .withDescription("Starts a variable declaration")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("name", "The name of the variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "The start of the value of the variable.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return VariableDeclareStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const newParameters: string[] = [CommandNames.VariableDeclare];
        for (let i = 1; i < parameters.length; i += 1) {
            const parametersSplit: string[] = parameters[i].split("\n");

            newParameters.push(parametersSplit[0]);
        }

        const output = this.context.convertParsed(newParameters).withAddSemicolon(false);

        // Languages like C# might need to pass a separate "{" through on the next line
        if (this.language.syntax.style.separateBraceLines) {
            if (parameters.length === 5) {
                output.commandResults.push(new CommandResult(parameters[4], 1));
            }
        } else {
            output.commandResults[output.commandResults.length - 1].indentation += 1;
        }

        return output;
    }
}
