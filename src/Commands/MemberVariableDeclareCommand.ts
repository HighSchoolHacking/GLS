import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for declaring a member variable.
 */
export class MemberVariableDeclareCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.MemberVariableDeclare,
        [],
        [
            new SingleParameter("privacy", "The privacy of the member variable.", true),
            new SingleParameter("name", "The name of the member variable.", true),
            new SingleParameter("type", "The type of the variable.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberVariableDeclareCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.classes.members.variables.skipMemberVariables) {
            return LineResults.newSingleLine("\0", false);
        }

        let output = "";
        const privacy: string = parameters[1];
        let variableName: string = parameters[2];
        const type: string = parameters[3];
        let casingStyle: CaseStyle;

        if (privacy === "protected") {
            output += this.language.properties.classes.members.variables.protected;
            output += this.language.properties.classes.members.variables.protectedPrefix;
            casingStyle = this.language.properties.classes.members.variables.protectedCase;
        } else if (privacy === "private") {
            output += this.language.properties.classes.members.variables.private;
            output += this.language.properties.classes.members.variables.privatePrefix;
            casingStyle = this.language.properties.classes.members.variables.privateCase;
        } else {
            output += this.language.properties.classes.members.variables.public;
            output += this.language.properties.classes.members.variables.publicPrefix;
            casingStyle = this.language.properties.classes.members.variables.publicCase;
        }

        variableName = this.context.convertStringToCase(variableName, casingStyle);
        output += this.context.convertParsed(["variable inline", variableName, type]).commandResults[0].text;

        return LineResults.newSingleLine(output, true);
    }
}
