import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a variable declaration.
 */
export class VariableStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.VariableStart)
        .withDescription("Starts a variable declaration.")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("name", "The name of the variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "The start of the value of the variable.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return VariableStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        // Languages like C# will give the last value in parameters including a "\n"
        const newParameters: string[] = ["variable"];
        for (let i = 1; i < parameters.length; i += 1) {
            newParameters.push(parameters[i].split("\n")[0]);
        }

        const output = this.context.convertParsed(newParameters);
        output.addSemicolon = false;

        // Languages like C# might need to pass a separate "\n{" through
        if (this.language.properties.style.separateBraceLines) {
            let lastParameter = parameters[parameters.length - 1];
            if (lastParameter.indexOf("\n") !== -1) {
                lastParameter = lastParameter.split("\n")[1];
                output.commandResults.push(new CommandResult(lastParameter, 1));
            }
        } else {
            output.commandResults[output.commandResults.length - 1].indentation += 1;
        }

        return output;
    }
}
