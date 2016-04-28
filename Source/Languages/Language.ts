/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LanguageProperties.ts" />
/// <reference path="Properties/ListProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for a single language.
     */
    export abstract class Language {
        /**
         * Metadata about the language syntax.
         */
        public /* readonly */ properties: Properties.LanguageProperties;

        /**
         * Initializes a new instance of the Language class.
         */
        constructor() {
            this.properties = new Properties.LanguageProperties();
            this.generateArrayProperties(this.properties.arrays);
            this.generateBooleanProperties(this.properties.booleans);
            this.generateClassProperties(this.properties.classes);
            this.generateClassGenericProperties(this.properties.classes.generics);
            this.generateClassMemberProperties(this.properties.classes.members);
            this.generateCommentProperties(this.properties.comments);
            this.generateConditionalProperties(this.properties.conditionals);
            this.generateDictionaryProperties(this.properties.dictionaries);
            this.generateEnumProperties(this.properties.enums);
            this.generateExceptionProperties(this.properties.exceptions);
            this.generateFunctionProperties(this.properties.functions);
            this.generateGeneralProperties(this.properties.general);
            this.generateLambdaProperties(this.properties.lambdas);
            this.generateListProperties(this.properties.lists);
            this.generateLoopProperties(this.properties.loops);
            this.generateNumberProperties(this.properties.numbers);
            this.generateOperatorProperties(this.properties.operators);
            this.generateOutputProperties(this.properties.output);
            this.generateStringProperties(this.properties.strings);
            this.generateStyleProperties(this.properties.style);
            this.generateVariableProperties(this.properties.variables);

            this.properties.operators.generateAliases();
        }

        /**
         * Generates metadata on arrays.
         * 
         * @param arrays   A property container for metadata on arrays.
         */
        protected abstract generateArrayProperties(arrays: Properties.ArrayProperties): void;

        /**
         * Generates metadata on booleans.
         * 
         * @param booleans   A property container for metadata on booleans.
         */
        protected abstract generateBooleanProperties(booleans: Properties.BooleanProperties): void;

        /**
         * Generates metadata on classes.
         * 
         * @param classes   A property container for metadata on classes.
         */
        protected abstract generateClassProperties(classes: Properties.ClassProperties): void;

        /**
         * Generates metadata on class generics.
         * 
         * @param members   A property container for metadata on class generics.
         */
        protected abstract generateClassGenericProperties(generics: Properties.ClassGenericProperties): void;

        /**
         * Generates metadata on classmembers.
         * 
         * @param members   A property container for metadata on class members.
         */
        protected abstract generateClassMemberProperties(members: Properties.ClassMemberProperties): void;

        /**
         * Generates metadata on comments.
         * 
         * @param comments   A property container for metadata on comments.
         */
        protected abstract generateCommentProperties(comments: Properties.CommentProperties): void;

        /**
         * Generates metadata on conditionals.
         * 
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected abstract generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;

        /**
         * Generates metadata on dictionaries.
         * 
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected abstract generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;

        /**
         * Generates metadata on enums.
         * 
         * @param enums   A property container for metadata on enums.
         */
        protected abstract generateEnumProperties(enums: Properties.EnumProperties): void;

        /**
         * Generates metadata on exceptions.
         * 
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected abstract generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;

        /**
         * Generates metadata on functions.
         * 
         * @param functions   A property container for metadata on functions.
         */
        protected abstract generateFunctionProperties(functions: Properties.FunctionProperties): void;

        /**
         * Fills out metadata on general properties.
         */
        protected abstract generateGeneralProperties(general: Properties.GeneralProperties): void;

        /**
         * Generates metadata on lambdas.
         * 
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected abstract generateLambdaProperties(lambdas: Properties.LambdaProperties): void;

        /**
         * Fills out metadata on lists.
         */
        protected abstract generateListProperties(lists: Properties.ListProperties): void;

        /**
         * Generates metadata on loops.
         * 
         * @param loops   A property container for metadata on loops.
         */
        protected abstract generateLoopProperties(loops: Properties.LoopProperties): void;

        /**
         * Generates metadata on numbers.
         * 
         * @param numbers   A property container for metadata on numbers.
         */
        protected abstract generateNumberProperties(numbers: Properties.NumberProperties): void;

        /**
         * Generates metadata on operators.
         * 
         * @param operators   A property container for metadata on operators.
         */
        protected abstract generateOperatorProperties(operators: Properties.OperatorProperties): void;

        /**
         * Generates metadata on output.
         * 
         * @param output   A property container for metadata on output.
         */
        protected abstract generateOutputProperties(operators: Properties.OutputProperties): void;

        /**
         * Generates metadata on strings.
         * 
         * @param strings   A property container for metadata on strings.
         */
        protected abstract generateStringProperties(strings: Properties.StringProperties): void;

        /**
         * Generates metadata on style.
         * 
         * @param style   A property container for metadata on style.
         */
        protected abstract generateStyleProperties(style: Properties.StyleProperties): void;

        /**
         * Generates metadata on variables.
         * 
         * @param variables   A property container for metadata on variables.
         */
        protected abstract generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
