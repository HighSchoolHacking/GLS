/// <reference path="ArrayProperties.ts" />
/// <reference path="BooleanProperties.ts" />
/// <reference path="ClassProperties.ts" />
/// <reference path="CommentProperties.ts" />
/// <reference path="ConditionalProperties.ts" />
/// <reference path="DictionaryProperties.ts" />
/// <reference path="EnumProperties.ts" />
/// <reference path="ExceptionProperties.ts" />
/// <reference path="FunctionProperties.ts" />
/// <reference path="GeneralProperties.ts" />
/// <reference path="LambdaProperties.ts" />
/// <reference path="ListProperties.ts" />
/// <reference path="LoopProperties.ts" />
/// <reference path="NumberProperties.ts" />
/// <reference path="OutputProperties.ts" />
/// <reference path="OperatorProperties.ts" />
/// <reference path="StringProperties.ts" />
/// <reference path="StyleProperties.ts" />
/// <reference path="VariableProperties.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's syntax.
     */
    export class LanguageProperties {
        /**
         * Metadata on arrays.
         */
        public arrays: ArrayProperties;

        /**
         * Metadata on booleans.
         */
        public booleans: BooleanProperties;

        /**
         * Metadata on classes.
         */
        public classes: ClassProperties;

        /**
         * Metadata on comments.
         */
        public comments: CommentProperties;

        /**
         * Metadata on conditionals.
         */
        public conditionals: ConditionalProperties;

        /**
         * Metadata on dictionaries.
         */
        public dictionaries: DictionaryProperties;

        /**
         * Metadata on enums.
         */
        public enums: EnumProperties;

        /**
         * Metadata on exceptions.
         */
        public exceptions: ExceptionProperties;

        /**
         * Metadata on functions.
         */
        public functions: FunctionProperties;

        /**
         * Metadata on general properties.
         */
        public general: GeneralProperties;

        /**
         * Metadata on lambdas.
         */
        public lambdas: LambdaProperties;

        /**
         * Metadata on lists.
         */
        public lists: ListProperties;

        /**
         * Metadata on loops.
         */
        public loops: LoopProperties;

        /**
         * Metadata on numbers.
         */
        public numbers: NumberProperties;

        /**
         * Metadata on operators.
         */
        public operators: OperatorProperties;

        /**
         * Metadata on output.
         */
        public output: OutputProperties;

        /**
         * Metadata on strings.
         */
        public strings: StringProperties;

        /**
         * Metadata on style.
         */
        public style: StyleProperties;

        /**
         * Metadata on variables.
         */
        public variables: VariableProperties;

        /**
         * Initializes a new instance of the LanguageProperties class.
         */
        constructor() {
            this.arrays = new ArrayProperties();
            this.booleans = new BooleanProperties();
            this.classes = new ClassProperties();
            this.comments = new CommentProperties();
            this.conditionals = new ConditionalProperties();
            this.dictionaries = new DictionaryProperties();
            this.enums = new EnumProperties();
            this.exceptions = new ExceptionProperties();
            this.functions = new FunctionProperties();
            this.general = new GeneralProperties();
            this.lambdas = new LambdaProperties();
            this.lists = new ListProperties();
            this.loops = new LoopProperties();
            this.numbers = new NumberProperties();
            this.operators = new OperatorProperties();
            this.output = new OutputProperties();
            this.strings = new StringProperties();
            this.style = new StyleProperties();
            this.variables = new VariableProperties();
        }
    }
}
