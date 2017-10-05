import { NativeCallProperties, NativeCallType } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native operator call command.
 */
export class NativeOperatorCallRenderer extends NativeCallRenderer {
    /**
     * Renders a native call as an operator.
     *
     * @param properties   Language properties for the native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        let result = "";

        if (properties.type === NativeCallType.FloatingLeft) {
            result += parameters[2];
            result += properties.name;
            result += parameters[1];
        } else {
            result += parameters[1];
            result += properties.name;
            result += parameters[2];
        }

        return LineResults.newSingleLine(result, true);
    }
}
