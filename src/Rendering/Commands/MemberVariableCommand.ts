import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a member variable.
 */
export class MemberVariableCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MemberVariable)
        .withDescription("Retrieves a member variable")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the member variable.", true),
            new SingleParameter("instanceName", "A class instance retrieving a member variable.", true),
            new SingleParameter("variableName", "The name of the member variable.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberVariableCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
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
        output += variablePrefix;
        output += variableName;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
