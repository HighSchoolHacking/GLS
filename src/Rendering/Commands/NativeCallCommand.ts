import { Import } from "../Languages/Imports/Import";
import { NativeCallScope, NativeCallSyntax } from "../Languages/Properties/Syntax/NativeCallSyntax";
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
    protected nativeCallSyntax: NativeCallSyntax;

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

        this.nativeCallSyntax = this.retrieveNativeCallSyntax();

        this.scopeRenderers = {
            [NativeCallScope.Array]: new NativeArrayRenderer(this.nativeCallSyntax),
            [NativeCallScope.Member]: new NativeMemberRenderer(this.nativeCallSyntax),
            [NativeCallScope.Operator]: new NativeOperatorRenderer(this.nativeCallSyntax),
            [NativeCallScope.Static]: new NativeStaticRenderer(this.nativeCallSyntax),
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
        const scope: NativeCallScope = this.nativeCallSyntax.scope;
        const results: LineResults = this.scopeRenderers[scope].render(parameters);

        results.addImports(this.retrieveImports());

        return results;
    }

    /**
     * @returns Any imports this native command requires.
     */
    protected retrieveImports(): Import[] {
        return this.nativeCallSyntax.imports;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected abstract retrieveNativeCallSyntax(): NativeCallSyntax;
}
