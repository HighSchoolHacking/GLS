import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for printing an operator.
 */
export class OperatorCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("operator", "An operator to alias.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return OperatorCommand.parameters;
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
