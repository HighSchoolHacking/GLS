import { ConversionContext } from "../Conversions/ConversionContext";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "../Languages/Properties/NativeCallProperties";
import { Command } from "./Command";
import { LineResults } from "./LineResults";

/**
 * A command for performing a native call, such as Array::push.
 */
export abstract class NativeCallCommand extends Command {
    /**
     * Renderers for each allowed scope.
     */
    private scopeRenderers: { [i: number]: (parameters: string[]) => LineResults };

    /**
     * Metadata on how to perform the native call.
     */
    protected nativeCallProperties: NativeCallProperties;

    /**
     * Initializes a new instance of the Command class.
     * 
     * @param context   The driving context for converting the command.
     */
    constructor(context: ConversionContext) {
        super(context);

        this.nativeCallProperties = this.retrieveNativeCallProperties();
        this.scopeRenderers = {
            [NativeCallScope.Array]: this.renderAsArray.bind(this),
            [NativeCallScope.Member]: this.renderAsMember.bind(this),
            [NativeCallScope.Operator]: this.renderAsOperator.bind(this),
            [NativeCallScope.Static]: this.renderAsStatic.bind(this)
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
        let scope: NativeCallScope = this.nativeCallProperties.scope;
        let results: LineResults = this.scopeRenderers[scope](parameters);
        
        results.addImports(this.retrieveImports());

        return results;
    }

    /**
     * @returns Metadata on how to perform the native call. 
     */
    protected abstract retrieveNativeCallProperties(): NativeCallProperties;

    /**
     * @returns Any imports this native command requires.
     */
    protected retrieveImports(): { [i: string]: string[] } {
        return {};
    }

    /**
     * Renders the native call as an array.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     * @remarks Usage: [parameter, parameter].name
     */
    private renderAsArray(parameters: string[]): LineResults {
        let result: string = "";

       result += "[" + parameters[1];
       for (let i: number = 2; i < parameters.length; i += 1) {
           result += ", " + parameters[i];
       }

       result += "]." + this.nativeCallProperties.name;

        return LineResults.newSingleLine(result, true);
    }

    /**
     * Renders the native call as a member.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name[, parameters, ...]).
     */
    private renderAsMember(parameters: string[]): LineResults {
        let result: string = "";

        result += parameters[1] + ".";
        result += this.nativeCallProperties.name;

        if (this.nativeCallProperties.type === NativeCallType.Function) {
            result += "(";

            if (this.nativeCallProperties.arguments.length > 0) {
                result += this.formatArgument(this.nativeCallProperties.arguments[0], parameters[1]);

                for (let i: number = 1; i < this.nativeCallProperties.arguments.length; i += 1) {
                    result += ", " + this.formatArgument(this.nativeCallProperties.arguments[i], parameters[1]);
                }
            }

            if (parameters.length > 2) {
                if (this.nativeCallProperties.arguments.length > 0) {
                    result += ", ";
                }

                result += parameters[2];

                for (let i: number = 3; i < parameters.length; i += 1) {
                    result += ", " + parameters[i];
                }
            }

            result += ")";
        }

        return LineResults.newSingleLine(result, true);
    }

    /**
     * Renders the native call as an operator.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (container, operand)
     */
    private renderAsOperator(parameters: string[]): LineResults {
        let result: string = "";

        if (this.nativeCallProperties.type === NativeCallType.FloatingLeft) {
            result += parameters[2];
            result += this.nativeCallProperties.name;
            result += parameters[1];
        } else {
            result += parameters[1];
            result += this.nativeCallProperties.name;
            result += parameters[2];
        }

        return LineResults.newSingleLine(result, true);
    }

    /**
     * Renders the native call as a static.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name[, parameters, ...]).
     */
    private renderAsStatic(parameters: string[]): LineResults {
        let result: string = "";

        result += this.nativeCallProperties.name;
        result += "(" + parameters[1];

        for (let i: number = 0; i < this.nativeCallProperties.arguments.length; i += 1) {
            result += ", " + this.formatArgument(this.nativeCallProperties.arguments[i], parameters[1]);
        }

        for (let i: number = 2; i < parameters.length; i += 1) {
            result += ", " + parameters[i];
        }

        result += ")";

        return LineResults.newSingleLine(result, true);
    }

    /**
     * Formats a property argument for a native call, with "{0}" replaced
     * with the first given parameter.
     * 
     * @param argument   An argument for a native call.
     * @param firstParameter   The first given parameter for the call.
     * @returns The argument, with the parameter formatted inside.
     */
    private formatArgument(argument: string, firstParameter: string): string {
        return argument.replace("{0}", firstParameter);
    }
}
