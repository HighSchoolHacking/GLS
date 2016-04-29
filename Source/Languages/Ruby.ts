/// <reference path="PythonicLanguage.ts" />
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
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NativeCallProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for the Ruby language.
     */
    export class Ruby extends PythonicLanguage {
        /**
         * Generates metadata on arrays.
         * 
         * @param arrays   A property container for metadata on arrays. 
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void {
            arrays.className = "Array";
            arrays.length = Properties.NativeCallProperties.NewMemberProperty("length");
        }

        /**
         * Generates metadata on booleans.
         * 
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void {
            booleans.className = "";
        }
        /**
         * Generates metadata on classes.
         * 
         * @param classes   A property container for metadata on classes. 
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            super.generateClassProperties(classes);

            classes.aliases = {
                "dictionary": "Hash",
                "number": "Float"
            };
        }

        /**
         * Generates metadata on conditionals.
         * 
         * @param conditionals   A property container for metadata on conditionals. 
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void {
            super.generateConditionalProperties(conditionals);

            conditionals.continueRight = "";
            conditionals.elif = "elsif";
            conditionals.startRight = "";
        }

        /**
         * Generates metadata on comments.
         * 
         * @param comments   A property container for metadata on comments. 
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void {
            comments.blockEnd = "=end";
            comments.blockLineLeft = "";
            comments.blockLineRight = "";
            comments.blockStart = "=begin";

            comments.docEnd = "";
            comments.docLineEnd = "";
            comments.docLineStart = "";
            comments.docStart = "##";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "\0",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "parameter": ""
            };
            comments.docTagEnd = "]";
            comments.docTagSpaceAfter = "   ";
            comments.docTagStart = "[";

            comments.lineLeft = "# ";
            comments.lineRight = "";
        }

        /**
         * Generates properties on dictionaries.
         * 
         * @param dictionaries   The property container for metadata on dictionaries. 
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void {
            super.generateDictionaryProperties(dictionaries);

            dictionaries.className = "hash";
            dictionaries.keys = Properties.NativeCallProperties.NewMemberProperty("keys");
        }

        /**
         * Generates general metadata.
         * 
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void {
            general.extension = ".rb";
            general.name = "Ruby";
        }

        /**
         * Generates metadata on functions.
         * 
         * @param functions   The property container for metadata on functions. 
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void {
            super.generateFunctionProperties(functions);

            functions.defineStartRight = "";
            functions.defineEnd = "end";
        }

        /**
         * Generates metadata on lambdas.
         * 
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: Properties.LambdaProperties): void {
            lambdas.functionLeft = "lambda { |";
            lambdas.functionMiddle = "| ";
            lambdas.functionRight = " }";
        }

        /**
         * Generates metadata on lists.
         * 
         * @param lists   A property container for metadata on loops. 
         */
        protected generateListProperties(lists: Properties.ListProperties): void {
            super.generateListProperties(lists);

            lists.push = Properties.NativeCallProperties.NewMemberFunction("push");
        }

        /**
         * Generates metadata on loops.
         * 
         * @param loops   A property container for metadata on loops. 
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void {
            super.generateLoopProperties(loops);

            loops.foreach = "foreach";
            loops.forEachAsMethod = true;
            loops.forEachEnd = "}";
            loops.forEachGetKeys = ".each_key { |";
            loops.forEachGetPairs = ".each { |";
            loops.forEachRight = "|";

            loops.rangedForLoopsLeft = " in ";
            loops.rangedForLoopsMiddle = "..";
            loops.rangedForLoopsRight = "";
        }

        /**
         * Generates metadata on numbers.
         * 
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void {
            numbers.className = "float";
        }

        /**
         * Generates metadata on numbers.
         * 
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void {
            output.print = "puts";
        }

        /**
         * Generates metadata on strings.
         * 
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            super.generateStringProperties(strings);

            strings.className = "string";
            strings.index = Properties.NativeCallProperties.NewMemberFunction("index");
            strings.length = Properties.NativeCallProperties.NewMemberProperty("length");
        }

        /**
         * Generates metadata on style.
         * 
         * @param style   The property container for metadata on style. 
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void {
            super.generateStyleProperties(style);

            style.mainEndLines = [];
            style.mainIndentation = 0;
            style.mainStartLines = [];
            style.printEnd = "";
            style.printStart = "puts ";
        }

        /**
         * Generates metadata on variables.
         * 
         * @param variables   A property container for metadata on variables. 
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            super.generateVariableProperties(variables);

            variables.aliases = {
                "infinity": "float::Infinity",
            };
            variables.null = "Nil";
        }
    }
}
