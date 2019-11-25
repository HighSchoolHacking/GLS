import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
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
        .withDescription("Declares a variable inline (without a preceding 'var ' equivalent)")
        .withParameters([
            new SingleParameter("name", "The name of the variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "The starting value of the variable.", false),
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
        if (parameters.length === 3 && !this.language.syntax.variables.declarationRequired) {
            return LineResults.newSingleLine("\0");
        }

        const imports: Import[] = [];
        const name: string = parameters[1];
        const typeNameLine = this.context.convertParsed([CommandNames.Type, parameters[2]]);
        const typeName: string = typeNameLine.commandResults[0].text;
        let output = "";

        imports.push(...typeNameLine.addedImports);

        if (this.language.syntax.variables.explicitTypes) {
            if (this.language.syntax.variables.typesAfterName) {
                output += name + this.language.syntax.variables.typeLeft;
                output += typeName;
            } else {
                output += typeName + " " + name;
            }
        } else {
            output += name;
        }

        if (parameters.length > 3) {
            const operatorLine = this.context.convertParsed([CommandNames.Operator, "equals"]);
            const valueLine = this.context.convertParsed([CommandNames.Value, parameters[3]]);

            imports.push(...operatorLine.addedImports);
            imports.push(...valueLine.addedImports);

            output += " " + operatorLine.commandResults[0].text + " " + valueLine.commandResults[0].text;
        }

        return LineResults.newSingleLine(output).withImports(imports);
    }
}
