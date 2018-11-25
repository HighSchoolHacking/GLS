import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Calls a lambda function.
 */
export class LambdaCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Lambda)
        .withDescription("Calls a lambda function")
        .withParameters([
            new SingleParameter("name", "Name of the lambda.", true),
            new RepeatingParameters("Lambda function parameters", [
                new SingleParameter("parameterName", "A named parameter for the lambda function.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return LambdaCommand.metadata;
    }

    /**
     * Renders the lambda for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = parameters[1];
        output += this.language.syntax.lambdas.callLeft;
        output += parameters.slice(2).join(", ");
        output += this.language.syntax.lambdas.callRight;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
