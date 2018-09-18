import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Prints a mathematical operator.
 */
export class OperatorCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Operator)
        .withDescription("Prints a mathematical operator")
        .withParameters([new SingleParameter("operator", "An operator to alias.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return OperatorCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.convertOperator(parameters[1]), false);
    }

    /**
     * Converts a raw operator into the language's equivalent.
     *
     * @param typeNameRaw   A raw operator to convert.
     * @returns The equivalent converted operator.
     */
    private convertOperator(operatorRaw: string): string {
        if (!this.language.syntax.operators.aliases.hasOwnProperty(operatorRaw)) {
            return operatorRaw;
        }

        return this.language.syntax.operators.aliases[operatorRaw];
    }
}
