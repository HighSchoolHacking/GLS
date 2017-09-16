import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for retrieving a member variable.
 */
export class MemberVariableCommand extends Command {
    /**
     * Information on parameters this command takes in.
     *
     * @todo Use a value restriction on privacy (once it's implemented).
     */
    private static parameters: Parameter[] = [
        new SingleParameter("privacy", "The privacy of the member variable.", true),
        new SingleParameter("instanceName", "A class instance retrieving a member variable.", true),
        new SingleParameter("variableName", "The name of the member variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return MemberVariableCommand.parameters;
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

        if (privacy === "protected") {
            variablePrefix = this.language.properties.classes.members.variables.protectedPrefix;
            casingStyle = this.language.properties.classes.members.variables.protectedCase;
        } else if (privacy === "private") {
            variablePrefix = this.language.properties.classes.members.variables.privatePrefix;
            casingStyle = this.language.properties.classes.members.variables.privateCase;
        } else {
            variablePrefix = this.language.properties.classes.members.variables.publicPrefix;
            casingStyle = this.language.properties.classes.members.variables.publicCase;
        }

        variableName = this.context.convertStringToCase(variableName, casingStyle);

        let output = "";
        output += instanceName + ".";
        output += variablePrefix;
        output += variableName;

        return LineResults.newSingleLine(output, true);
    }
}
