import { LineResults } from "../../LineResults";
import { NewRenderer } from "./NewRenderer";

/**
 * Renders a member method instantiation.
 */
export class MemberMethodRenderer extends NewRenderer {
    /**
     * Renders the instantation for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = "";

        output += this.language.syntax.newProp.methodLeft;
        output += parameters[1];
        output += this.language.syntax.newProp.methodMiddle;
        if (parameters.length > 2) {
            output += parameters[2];
            for (let i = 3; i < parameters.length; i += 1) {
                output += ", " + parameters[i];
            }
        }
        output += this.language.syntax.newProp.methodRight;

        return LineResults.newSingleLine(output);
    }
}
