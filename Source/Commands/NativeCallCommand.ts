/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for performing a native call, such as Array::push.
     */
    export abstract class NativeCallCommand extends Command {
        /**
         * 
         */
        private scopeRenderers: { [i: number]: (parameters: string[]) => LineResults };

        /**
         * Metadata on how to perform the native call.
         */
        protected nativeCallProperties: Languages.Properties.NativeCallProperties;

        /**
         * Initializes a new instance of the Command class.
         * 
         * @param context   The driving context for converting the command.
         */
        constructor(context: ConversionContext) {
            super(context);

            this.nativeCallProperties = this.retrieveNativeCallProperties();
            this.scopeRenderers = {
                [Languages.Properties.NativeCallScope.Member]: this.renderAsMember.bind(this),
                [Languages.Properties.NativeCallScope.Operator]: this.renderAsOperator.bind(this),
                [Languages.Properties.NativeCallScope.Static]: this.renderAsStatic.bind(this)
            };
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        public render(parameters: string[]): LineResults {
            let scope: Languages.Properties.NativeCallScope = this.nativeCallProperties.scope;

            return this.scopeRenderers[scope](parameters);
        }

        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected abstract retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;

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

            if (this.nativeCallProperties.type === Languages.Properties.NativeCallType.Function) {
                result += "(";

                if (parameters.length > 2) {
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

            if (this.nativeCallProperties.type === Languages.Properties.NativeCallType.FloatingLeft) {
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

            for (let i: number = 2; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }

            result += ")";

            return LineResults.newSingleLine(result, true);
        }
    }
}
