/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a retrieving the length of an string.
     */
    export class DictionaryContainsKeyCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("dictionary", "A dictionary to check for key membership.", true),
            new Parameters.SingleParameter("key", "A key to check for membership in the dictionary.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return DictionaryContainsKeyCommand.parameters;
        }

        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties {
            return this.language.properties.dictionaries.containsKey;
        }
    }
}
