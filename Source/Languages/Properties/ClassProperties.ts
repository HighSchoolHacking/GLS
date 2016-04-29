/// <reference path="ArrayProperties.ts" />
/// <reference path="ClassGenericProperties.ts" />
/// <reference path="ClassMemberProperties.ts" />
/// <reference path="ListProperties.ts" />
/// <reference path="StringProperties.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's classes.
     */
    export class ClassProperties {
        /**
         * Aliases of types, from raw GLS syntax to this language's equivalents.
         */
        public aliases: { [i: string]: string };

        /**
         * Whether making a new instance is done via a static method, rather than new.
         */
        public constructorAsStatic: boolean;
        
        /**
         * Whether constructors are named the same as their class.
         */
        public constructorAsClassName: boolean;

        /**
         * The name of the constructor method, if not the class name.
         */
        public constructorName: string;

        /**
         * Characters before an inherited class declaration.
         */
        public declareExtendsLeft: string;

        /**
         * Characters after an inherited class declaration.
         */
        public declareExtendsRight: string;

        /**
         * The last line of a class declaration.
         */
        public defineEnd: string;

        /**
         * How to start the first line of a class declaration.
         */
        public declareStartLeft: string;

        /**
         * How to end the first line of a class declaration.
         */
        public declareStartRight: string;

        /**
         * Metadata on generic (templated) types.
         */
        public generics: ClassGenericProperties = new ClassGenericProperties();

        /**
         * Metadata on class member variables and functions.
         */
        public members: ClassMemberProperties = new ClassMemberProperties();

        /**
         * How to start declaring a new instance of a class, such as "new ".
         */
        public newStart: string;

        /**
         * The keyword for a static class or member.
         */
        public staticLabel: string;

        /**
         * The keyword used for "this".
         */
        public this: string;
    }
}
