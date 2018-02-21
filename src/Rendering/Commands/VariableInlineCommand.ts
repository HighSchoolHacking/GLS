import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "../LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a variable inline (without a preceding 'var ' equivalent).
 */
export class VariableInlineCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.VariableInline)
        .withDescription("Declares a variable inline (without a preceding 'var ' equivalent).")
        .withParameters([
            new SingleParameter("name", "The name of the variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "The starting value of the variable.", false)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return VariableInlineCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
            return LineResults.newSingleLine("\0", false);
        }

        const name: string = parameters[1];
        const typeName: string = this.context.convertCommon(CommandNames.Type, parameters[2]);
        let output = "";

        if (this.language.properties.variables.explicitTypes) {
            if (this.language.properties.variables.typesAfterName) {
                output += name + this.language.properties.variables.typeLeft;
                output += typeName;
            } else {
                output += typeName + " " + name;
            }
        } else {
            output += name;
        }

        if (parameters.length > 3) {
            output += " " + this.renderVariableValue(parameters[3]);
        }

        return LineResults.newSingleLine(output, false);
    }

    /**
     * Renders the "= value" part of a command.
     *
     * @param valueRaw   The raw value of a variable.
     * @returns   The "= value" part of a command.
     */
    private renderVariableValue(valueRaw: string): string {
        const operator = this.context.convertCommon(CommandNames.Operator, "equals");
        const value = this.context.convertCommon(CommandNames.Value, valueRaw);

        return operator + " " + value;
    }
}
