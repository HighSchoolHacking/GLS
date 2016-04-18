/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a retrieving the keys of a dictionary.
     */
    export class DictionaryKeysCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("dictionary", "A dictionary to retrieve the keys of.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return DictionaryKeysCommand.parameters;
        }

        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties {
            return this.language.properties.dictionaries.keys;
        }
    }
}
