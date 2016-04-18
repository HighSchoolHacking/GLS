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
            if (this.nativeCallProperties.asOperator) {
                return this.renderAsOperator(parameters);
            }

            if (this.nativeCallProperties.asStatic) {
                return this.renderAsStatic(parameters);
            }

            return this.renderAsMember(parameters);
        }

        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected abstract retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;

        /**
         * Renders the native call as a static.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        private renderAsStatic(parameters: string[]): LineResults {
            this.requireParametersLengthMinimum(parameters, 1);

            let result: string = "";

            result += this.nativeCallProperties.name;
            result += "(" + parameters[1];

            for (let i: number = 2; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }

            result += ")";

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
            this.requireParametersLengthMinimum(parameters, 1);

            let result: string = "";

            result += parameters[1] + ".";
            result += this.nativeCallProperties.name;

            if (this.nativeCallProperties.asFunction) {
                result += "(";

                if (parameters.length >= 2) {
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
         * @remarks Usage: (right, left)
         * @remarks This is (right, left) because NativeCall needs to be refactored.
         */
        private renderAsOperator(parameters: string[]): LineResults {
            this.requireParametersLength(parameters, 2);

            let result: string = "";

            result += parameters[2];
            result += this.nativeCallProperties.name;
            result += parameters[1];

            return LineResults.newSingleLine(result, true);
        }
    }
}
