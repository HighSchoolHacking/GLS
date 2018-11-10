import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Sets a member variable.
 */
export class MemberVariableSetCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MemberVariableSet)
        .withDescription("Retrieves a member variable")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the member variable.", true),
            new SingleParameter("instanceName", "A class instance retrieving a member variable.", true),
            new SingleParameter("variableName", "The name of the member variable.", true),
            new SingleParameter("value", "New value for the member variable.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberVariableSetCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        const privacy: string = parameters[1];
        const instanceName: string = parameters[2];
        let variableName: string = parameters[3];
        let variablePrefix: string;
        let casingStyle: CaseStyle;

        if (privacy === KeywordNames.Protected) {
            variablePrefix = this.language.syntax.classes.members.variables.protectedPrefix;
            casingStyle = this.language.syntax.classes.members.variables.protectedCase;
        } else if (privacy === KeywordNames.Private) {
            variablePrefix = this.language.syntax.classes.members.variables.privatePrefix;
            casingStyle = this.language.syntax.classes.members.variables.privateCase;
        } else {
            variablePrefix = this.language.syntax.classes.members.variables.publicPrefix;
            casingStyle = this.language.syntax.classes.members.variables.publicCase;
        }

        variableName = this.context.convertStringToCase(variableName, casingStyle);

        let output = "";
        output += instanceName + ".";
        output += variablePrefix + variableName + " = ";

        const valueLine = this.context.convertParsed([CommandNames.Type, parameters[4]]);

        imports.push(...valueLine.addedImports);
        output += valueLine.commandResults[0].text;

        return LineResults.newSingleLine(output)
            .withAddSemicolon(true)
            .withImports(imports);
    }
}
