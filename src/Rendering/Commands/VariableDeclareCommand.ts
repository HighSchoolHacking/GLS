import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a variable.
 */
export class VariableDeclareCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.VariableDeclare)
        .withDescription("Declares a variable")
        .withParameters([
            new SingleParameter("name", "The name of the variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "The starting value of the variable.", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return VariableDeclareCommand.metadata;
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

        const starter: string = this.language.syntax.variables.declaration;
        const newParameters: string[] = parameters.slice();
        newParameters[0] = CommandNames.VariableInline;
        newParameters[1] = this.language.syntax.variables.namePrefix + parameters[1];

        const enderLine = this.context.convertParsed(newParameters);
        const line = starter + enderLine.commandResults[0].text;

        return LineResults.newSingleLine(line)
            .withAddSemicolon(true)
            .withImports(enderLine.addedImports);
    }
}
