namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's enums.
     */
    export class EnumProperties {
        /**
         * Suffix after a member and value declaration.
         */
        public declareCommaRight: string;

        /**
         * Suffix after the last member and value declaration in an enum.
         */
        public declareEnd: string;

        /**
         * End line of an enum declaration.
         */
        public declareLastRight: string;

        /**
         * Start of the first line of an enum declaration.
         */
        public declareStartLeft: string;

        /**
         * End of the first line of an enum declaration.
         */
        public declareStartRight: string;

        /**
         * Start of a line declaring an enum member and value.
         */
        public declareValueLeft: string;

        /**
         * End of a line declaring an enum member and value.
         */
        public declareValueRight: string;

        /**
         * Start of a line retrieving an enum value.
         */
        public valueLeft: string;

        /**
         * Middle of a line retrieving enum value.
         */
        public valueMiddle: string;

        /**
         * End of a line retrieving enum value.
         */
        public valueRight: string;
    }
}
