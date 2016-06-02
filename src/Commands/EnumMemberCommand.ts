import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for the declaring an enum member value.
 */
export class EnumMemberCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("memberName", "A member of the container enum.", true),
        new SingleParameter("memberValue", "A value for the enum member.", true),
        new SingleParameter("comma", "Whether a comma is needed.", false)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return EnumMemberCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result: string = "";

        result += parameters[1];
        result += this.language.properties.enums.declareValueLeft;
        result += parameters[2];
        result += this.language.properties.enums.declareValueRight;

        if (parameters.length === 4) {
            result += this.language.properties.enums.declareCommaRight;
        } else {
            result += this.language.properties.enums.declareLastRight;
        }

        return LineResults.newSingleLine(result, false);
    }
}
