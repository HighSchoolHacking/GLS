import { ConversionContext } from "../Conversions/ConversionContext";
import { NativeCallProperties, NativeCallScope } from "../Languages/Properties/NativeCallProperties";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { NativeArrayCallRenderer } from "./NativeCalls/NativeArrayCallRenderer";
import { NativeCallRenderer } from "./NativeCalls/NativeCallRenderer";
import { NativeMemberCallRenderer } from "./NativeCalls/NativeMemberCallRenderer";
import { NativeOperatorCallRenderer } from "./NativeCalls/NativeOperatorCallRenderer";
import { NativeStaticCallRenderer } from "./NativeCalls/NativeStaticCallRenderer";

/**
 * A command for performing a native call, such as Array::push.
 */
export abstract class NativeCallCommand extends Command {
    /**
     * Metadata on how to perform the native call.
     */
    protected nativeCallProperties: NativeCallProperties;

    /**
     * Renderers for each allowed scope.
     */
    private scopeRenderers: { [i: number]: NativeCallRenderer };

    /**
     * Initializes a new instance of the Command class.
     *
     * @param context   The driving context to convert commands.
     */
    public constructor(context: ConversionContext) {
        super(context);

        this.nativeCallProperties = this.retrieveNativeCallProperties();
        this.scopeRenderers = {
            [NativeCallScope.Array]: new NativeArrayCallRenderer(),
            [NativeCallScope.Member]: new NativeMemberCallRenderer(),
            [NativeCallScope.Operator]: new NativeOperatorCallRenderer(),
            [NativeCallScope.Static]: new NativeStaticCallRenderer()
        };
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const scope: NativeCallScope = this.nativeCallProperties.scope;
        const results: LineResults = this.scopeRenderers[scope].render(this.nativeCallProperties, parameters);

        results.addImports(this.nativeCallProperties.imports);

        return results;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected abstract retrieveNativeCallProperties(): NativeCallProperties;
}
