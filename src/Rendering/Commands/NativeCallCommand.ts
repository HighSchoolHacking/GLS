import { Import } from "../Languages/Imports/Import";
import { NativeCallProperties, NativeCallScope } from "../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";
import { RenderContext } from "../RenderContext";
import { Command } from "./Command";
import { NativeArrayRenderer } from "./NativeCallRendering/NativeArrayRenderer";
import { NativeCallRenderer } from "./NativeCallRendering/NativeCallRenderer";
import { NativeMemberRenderer } from "./NativeCallRendering/NativeMemberRenderer";
import { NativeOperatorRenderer } from "./NativeCallRendering/NativeOperatorRenderer";
import { NativeStaticRenderer } from "./NativeCallRendering/NativeStaticRenderer";

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
    private scopeRenderers: { [i: string]: NativeCallRenderer };

    /**
     * Initializes a new instance of the Command class.
     *
     * @param context   The driving context for converting the command.
     */
    public constructor(context: RenderContext) {
        super(context);

        this.nativeCallProperties = this.retrieveNativeCallProperties();

        this.scopeRenderers = {
            [NativeCallScope.Array]: new NativeArrayRenderer(this.nativeCallProperties),
            [NativeCallScope.Member]: new NativeMemberRenderer(this.nativeCallProperties),
            [NativeCallScope.Operator]: new NativeOperatorRenderer(this.nativeCallProperties),
            [NativeCallScope.Static]: new NativeStaticRenderer(this.nativeCallProperties),
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
        const results: LineResults = this.scopeRenderers[scope].render(parameters);

        results.addImports(this.retrieveImports());

        return results;
    }

    /**
     * @returns Any imports this native command requires.
     */
    protected retrieveImports(): Import[] {
        return this.nativeCallProperties.imports;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected abstract retrieveNativeCallProperties(): NativeCallProperties;
}
