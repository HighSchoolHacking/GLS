import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * One or more mathematical operations.
 */
export class OperationCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Operation)
        .withDescription("One or more mathematical operations")
        .withParameters([
            new SingleParameter("value", "A value to work with.", true),
            new SingleParameter("operator", "The operation's operator.", true),
            new SingleParameter("value", "A value to work with.", true),
            new RepeatingParameters("Additional values and operators", [
                new SingleParameter("item", "An additional operator.", false),
                new SingleParameter("item", "An additional value to work with.", false),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return OperationCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const leftValueLine = this.context.convertParsed([CommandNames.Value, parameters[1]]);
        const imports = leftValueLine.addedImports;
        let output = leftValueLine.commandResults[0].text;

        for (let i = 2; i < parameters.length; i += 2) {
            const operatorLine = this.context.convertParsed([CommandNames.Operator, parameters[i]]);
            output += " " + operatorLine.commandResults[0].text;
            imports.push(...operatorLine.addedImports);

            const rightValueLine = this.context.convertParsed([CommandNames.Value, parameters[i + 1]]);
            output += " " + rightValueLine.commandResults[0].text;
            imports.push(...operatorLine.addedImports);
        }

        return LineResults.newSingleLine(output)
            .withAddSemicolon(true)
            .withImports(imports);
    }
}
