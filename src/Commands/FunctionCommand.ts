import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for calling a function.
 */
export class FunctionCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.Function,
        [],
        [
            new SingleParameter("name", "The name of the function.", true),
            new RepeatingParameters(
                "Function parameters.",
                [
                    new SingleParameter("parameterName", "A named parameter for the function.", true),
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return FunctionCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        const functionName: string = parameters[1];

        let output = "";
        output += this.context.convertStringToCase(functionName, this.language.properties.functions.case);
        output += "(";

        if (parameters.length > 2) {
            output += parameters[2];

            for (let i = 3; i < parameters.length; i += 1) {
                output += ", ";
                output += parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output, true);
    }
}
