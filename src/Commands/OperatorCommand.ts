import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for printing an operator.
 */
export class OperatorCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.Operator,
        [],
        [
            new SingleParameter("operator", "An operator to alias.", true)
        ]);

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
        if (!this.language.properties.operators.aliases.hasOwnProperty(operatorRaw)) {
            return operatorRaw;
        }

        return this.language.properties.operators.aliases[operatorRaw];
    }
}
