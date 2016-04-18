namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on how to perform a native call, such as Array::push.
     */
    export class NativeCallProperties {
        /**
         * Whether this is used as a function, rather than a property.
         */
        public asFunction: boolean;

        /**
         * Whether this is a static function, rather than a member.
         */
        public asStatic: boolean;

        /**
         * Whether this works as an operator, rather than a function.
         */
        public asOperator: boolean;

        /**
         * How this is called in the language.
         */
        public name: string;

        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing a member function.
         */
        public static NewMemberFunction(name: string): NativeCallProperties {
            let properties: NativeCallProperties = new NativeCallProperties();

            properties.name = name;
            properties.asFunction = true;

            return properties;
        }

        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing a member propertiy.
         */
        public static NewMemberProperty(name: string): NativeCallProperties {
            let properties: NativeCallProperties = new NativeCallProperties();

            properties.name = name;

            return properties;
        }

        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing a static function.
         */
        public static NewStaticFunction(name: string): NativeCallProperties {
            let properties: NativeCallProperties = new NativeCallProperties();

            properties.name = name;
            properties.asStatic = true;

            return properties;
        }

        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing an operator.
         */
        public static NewOperator(name: string): NativeCallProperties {
            let properties: NativeCallProperties = new NativeCallProperties();

            properties.name = name;
            properties.asOperator = true;

            return properties;
        }
    }
}
