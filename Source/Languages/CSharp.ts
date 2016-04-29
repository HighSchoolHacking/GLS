/// <reference path="CLikeLanguage.ts" />
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
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for the C# language.
     */
    export class CSharp extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         * 
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void {
            arrays.className = "Array";
            arrays.initializeAsNew = true;
            arrays.initializeByType = true;
            arrays.length = Properties.NativeCallProperties.NewMemberProperty("Length");
        }

        /**
         * Generates metadata on booleans.
         * 
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void {
            booleans.className = "bool";
        }

        /**
         * Generates metadata on classes.
         * 
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            super.generateClassProperties(classes);

            classes.aliases = {
                "boolean": "bool",
                "dictionary": "Dictionary",
                "list": "List",
                "number": "float"
            };
            classes.constructorAsClassName = true;
            classes.defineInheritanceLeft = " : ";
        }

        /**
         * Generates metadata on comments.
         * 
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void {
            super.generateCommentProperties(comments);

            comments.docAsXml = true;
            comments.docEnd = "";
            comments.docLineEnd = "";
            comments.docLineStart = "/// ";
            comments.docStart = "";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "summary",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "parameter": "name"
            };
        }

        /**
         * Generates metadata on conditionals.
         * 
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void {
            super.generateConditionalProperties(conditionals);

            conditionals.continueLeft = "}\n";
            conditionals.continueRight = "{";
            conditionals.startRight = ")\n{";
        }

        /**
         * Generates metadata on dictionaries.
         * 
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void {
            dictionaries.className = "Dictionary";
            dictionaries.containsKey = Properties.NativeCallProperties.NewMemberFunction("ContainsKey");
            dictionaries.keys = Properties.NativeCallProperties.NewMemberProperty("Keys");
            dictionaries.initializeAsNew = true;
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairComma = ",";
            dictionaries.initializePairLeft = "{ ";
            dictionaries.initializePairMiddle = ", ";
            dictionaries.initializePairRight = " }";
            dictionaries.initializeStart = "\n{";
            dictionaries.typeLeft = "<";
            dictionaries.typeMiddle = ", ";
            dictionaries.typeRight = ">";
        }

        /**
         * Generates metadata on exceptions.
         * 
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void {
            exceptions.className = "Error";
        }

        /**
         * Generates general metadata.
         * 
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void {
            general.name = "C#";
            general.extension = ".cs";
        }

        /**
         * Generates metadata on functions.
         * 
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void {
            super.generateFunctionProperties(functions);

            functions.defineStartLeft = " ";
            functions.defineStartRight = "\n{";
        }

        /**
         * Generates metadata on lambdas.
         * 
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: Properties.LambdaProperties): void {
            super.generateLambdaProperties(lambdas);

            lambdas.functionMiddle = ") => ";
        }

        /**
         * Generates metadata on lists.
         * 
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: Properties.ListProperties): void {
            lists.className = "List";
            lists.push = Properties.NativeCallProperties.NewMemberFunction("Add");
        }

        /**
         * Generates metadata on loops.
         * 
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void {
            super.generateLoopProperties(loops);

            loops.foreach = "foreach";
            loops.forEachGetKeys = ".Keys";
            loops.forEachGetPairs = "";
            loops.forEachMiddle = " in ";
            loops.forEachPairsAsPair = true;
            loops.forEachPairsPairClass = "KeyValuePair";
            loops.forEachPairsRetrieveKey = ".Key";
            loops.forEachPairsRetrieveValue = ".Value";
            loops.forEachRight = "";
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
         * Generates metadata on output.
         * 
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void {
            output.print = "Console.WriteLine";
        }

        /**
         * Generates metadata on strings.
         * 
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            super.generateStringProperties(strings);

            strings.className = "string";
            strings.index = Properties.NativeCallProperties.NewMemberFunction("IndexOf");
            strings.length = Properties.NativeCallProperties.NewMemberProperty("Length");
        }

        /**
         * Generates metadata on style.
         * 
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void {
            super.generateStyleProperties(style);

            style.fileEndLines = ["}"];
            style.fileIndentation = 1;
            style.fileStartLines = [
                "using System;",
                "using System.Collections.Generic;",
                "",
                "namespace {0}",
                "{",
            ];

            style.mainEndLines = [
                "    }",
                "}"
            ];
            style.mainIndentation = 2;
            style.mainStartLines = [
                "class Program",
                "{",
                "    public static void Main()",
                "    {"
            ];

            style.printEnd = ")";
            style.printStart = "Console.WriteLine(";
            style.separateBraceLines = true;
        }

        /**
         * Generates metadata on variables.
         * 
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            super.generateVariableProperties(variables);

            variables.aliases = {
                "infinity": "float.PositiveInfinity"
            };
            variables.castLeft = "(";
            variables.castRight = ")";
            variables.declaration = "";
            variables.explicitTypes = true;
            variables.null = "null";
        }
    }
}
