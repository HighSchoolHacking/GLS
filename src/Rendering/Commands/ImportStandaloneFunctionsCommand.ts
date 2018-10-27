import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Resolves standalone functions or their class for an import.
 */
export class ImportStandaloneFunctionsCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ImportStandaloneFunctions)
        .withDescription("Resolves standalone functions or their class for an import")
        .withParameters([
            new SingleParameter("groupName", "Static container group for the functions.", true),
            new RepeatingParameters("items", [new SingleParameter("item", "An item to import from the group.", true)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ImportStandaloneFunctionsCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const importParameters: string[] = this.getImportParameters(parameters);

        return LineResults.newSingleLine(importParameters.join(" "));
    }

    private getImportParameters(parameters: string[]): string[] {
        if (this.language.syntax.standaloneFunctions.withinStaticClass) {
            return [parameters[1]];
        }

        const importParameters: string[] = [];

        for (let i = 2; i < parameters.length; i += 1) {
            const importParameterRaw = parameters[i];
            const importParameter = this.context.convertStringToCase(
                importParameterRaw,
                this.language.syntax.classes.members.functions.publicCase,
            );

            importParameters.push(importParameter);
        }

        return importParameters;
    }
}
