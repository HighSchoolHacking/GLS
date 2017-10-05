import { NativeCallProperties, NativeCallType } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native member call command.
 */
export class NativeMemberCallRenderer extends NativeCallRenderer {
    /**
     * Renders a native call as a member function.
     *
     * @param properties   Language properties for the native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name[, parameters, ...]).
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        let result = "";

        result += parameters[1] + ".";
        result += properties.name;

        if (properties.type === NativeCallType.Function) {
            result += "(";

            if (properties.arguments.length > 0) {
                result += this.formatArgument(properties.arguments[0], parameters[1]);

                for (let i = 1; i < properties.arguments.length; i += 1) {
                    result += ", " + this.formatArgument(properties.arguments[i], parameters[1]);
                }
            }

            if (parameters.length > 2) {
                if (properties.arguments.length > 0) {
                    result += ", ";
                }

                result += parameters[2];

                for (let i = 3; i < parameters.length; i += 1) {
                    result += ", " + parameters[i];
                }
            }

            result += ")";
        }

        return LineResults.newSingleLine(result, true);
    }
}
