import { LineResults } from "../../LineResults";
import { NewRenderer } from "./NewRenderer";

/**
 * Renders a method call instantiation.
 */
export class MethodCallRenderer extends NewRenderer {
    /**
     * Renders the instantation for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const typeName: string = parameters[1];
        let output = "";

        output += typeName;
        output += "(";
        if (parameters.length > 2) {
            output += parameters[2];
            for (let i = 3; i < parameters.length; i += 1) {
                output += ", " + parameters[i];
            }
        }
        output += ")";

        return LineResults.newSingleLine(output);
    }
}
