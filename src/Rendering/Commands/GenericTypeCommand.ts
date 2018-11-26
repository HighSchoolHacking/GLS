import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a generic type.
 */
export class GenericTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.GenericType)
        .withDescription("Declares generic types")
        .withParameters([
            new SingleParameter("containerType", "Type containing the generics.", true),
            new RepeatingParameters("Generic types", [new SingleParameter("type", "A type of object.", true)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return GenericTypeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by the type name.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.syntax.variables.explicitTypes) {
            return this.context.convertParsed([CommandNames.Type, parameters[1]]);
        }

        const imports: Import[] = [];
        let output = parameters[1] + "<";

        for (let i = 2; i < parameters.length; i += 1) {
            const typeLine = this.context.convertParsed([CommandNames.Type, parameters[i]]);
            output += typeLine.commandResults[0].text;
            imports.push(...typeLine.addedImports);

            if (i !== parameters.length - 1) {
                output += ", ";
            }
        }

        output += ">";
        return LineResults.newSingleLine(output).withImports(imports);
    }
}
