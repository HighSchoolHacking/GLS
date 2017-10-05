import { NativeCallProperties, NativeCallType } from "../../Languages/Properties/NativeCallProperties";
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
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        let result = "";

        if (properties.type === NativeCallType.FloatingLeft) {
            result = this.renderAsFloatingLeft(properties, parameters);
        } else if (properties.type === NativeCallType.Function) {
            result = this.renderAsFunction(properties, parameters);
        }

        return LineResults.newSingleLine(result, true);
    }

    private renderAsFloatingLeft(properties: NativeCallProperties, parameters: string[]): string {
        const args: string[] = parameters.slice(1);

        for (const arg of properties.arguments) {
            if (args.length <= arg.index) {
                args.push(this.formatArgument(arg, parameters));
            }
        }

        let result = "[" + args.join(properties.separator) + "]";

        if (properties.name !== "") {
            result += "." + properties.name;
        }

        return result;
    }

    private renderAsFunction(properties: NativeCallProperties, parameters: string[]): string {
        const args: string[] = parameters.slice(2);

        for (const arg of properties.arguments) {
            if (args.length <= arg.index) {
                args.push(this.formatArgument(arg, parameters));
            }
        }

        let result = parameters[1];

        if (properties.name !== "") {
            result += "." + properties.name;
        }

        result += "[" + args.join(properties.separator) + "]";

        return result;
    }
}
