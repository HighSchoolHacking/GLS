import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for declaring a member variable.
 */
export class MemberVariableDeclareCommand extends Command {
    /**
     * Information on parameters this command takes in.
     * 
     * @todo Use a value restriction on privacy (once it's implemented).
     */
    private static parameters: Parameter[] = [
        new SingleParameter("privacy", "The privacy of the member variable.", false),
        new SingleParameter("name", "The name of the member variable.", true),
        new SingleParameter("type", "The type of the variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return MemberVariableDeclareCommand.parameters;
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

        let output: string = "";
        let privacy: string = parameters[1];
        let name: string;
        let type: string;
        let casingStyle: CaseStyle;

        if (privacy === "protected") {
            output += this.language.properties.classes.members.variables.protected;
            output += this.language.properties.classes.members.variables.protectedPrefix;
            name = parameters[2];
            type = parameters[3];
            casingStyle = this.language.properties.classes.members.variables.protectedCase;
        } else if (privacy === "private") {
            output += this.language.properties.classes.members.variables.private;
            output += this.language.properties.classes.members.variables.privatePrefix;
            name = parameters[2];
            type = parameters[3];
            casingStyle = this.language.properties.classes.members.variables.privateCase;
        } else {
            if (privacy === "public") {
                name = parameters[2];
                type = parameters[3];
            } else {
                name = parameters[1];
                type = parameters[2];
            }

            output += this.language.properties.classes.members.variables.public;
            output += this.language.properties.classes.members.variables.publicPrefix;
            casingStyle = this.language.properties.classes.members.variables.publicCase;
        }

        name = this.context.convertToCase([name], casingStyle);
        output += this.context.convertParsed(["variable inline", name, type]).commandResults[0].text;

        return LineResults.newSingleLine(output, true);
    }
}
