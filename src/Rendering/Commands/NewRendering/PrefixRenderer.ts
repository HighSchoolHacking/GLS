import { LineResults } from "../../LineResults";
import { NewRenderer } from "./NewRenderer";

/**
 * Renders a prefix instantiation.
 */
export class PrefixRenderer extends NewRenderer {
    /**
     * Renders the instantation for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const typeName: string = parameters[1];
        let result = "";

        result += this.language.syntax.newProp.keyword;
        result += " ";
        result += typeName;
        result += "(";
        if (parameters.length > 2) {
            result += parameters[2];
            for (let i = 3; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }
        }
        result += ")";

        return LineResults.newSingleLine(result, false);
    }
}
