import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for retrieving a static variable.
 */
export class StaticVariableCommand extends Command {
    /**
     * Information on parameters this command takes in.
     *
     * @todo Use a value restriction on privacy (once it's implemented).
     */
    private static parameters: Parameter[] = [
        new SingleParameter("privacy", "The privacy of the static variable.", true),
        new SingleParameter("className", "The name of the class the function is on.", true),
        new SingleParameter("variableName", "The name of the static variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return StaticVariableCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const privacy: string = parameters[1];
        const className: string = parameters[2];
        let variableName: string = parameters[3];
        let variablePrefix: string;
        let casingStyle: CaseStyle;

        if (privacy === "protected") {
            variablePrefix = this.language.properties.classes.statics.variables.protectedPrefix;
            casingStyle = this.language.properties.classes.statics.variables.protectedCase;
        } else if (privacy === "private") {
            variablePrefix = this.language.properties.classes.statics.variables.privatePrefix;
            casingStyle = this.language.properties.classes.statics.variables.privateCase;
        } else {
            variablePrefix = this.language.properties.classes.statics.variables.publicPrefix;
            casingStyle = this.language.properties.classes.statics.variables.publicCase;
        }

        variableName = this.context.convertStringToCase(variableName, casingStyle);

        let output = "";
        output += className + ".";
        output += variablePrefix;
        output += variableName;

        return LineResults.newSingleLine(output, true);
    }
}
