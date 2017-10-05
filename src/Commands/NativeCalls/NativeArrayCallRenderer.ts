import { NativeCallProperties } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native array call command.
 */
export class NativeArrayCallRenderer extends NativeCallRenderer {
    /**
     * Renders a native call as an array.
     *
     * @param properties   Language properties for the native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: [parameter, parameter].name
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        let result = "[" + parameters[1];

        for (let i = 2; i < parameters.length; i += 1) {
            result += ", " + parameters[i];
        }

        result += "]";

        if (properties.name !== "") {
            result += "." + properties.name;
        }

        return LineResults.newSingleLine(result, true);
    }
}
