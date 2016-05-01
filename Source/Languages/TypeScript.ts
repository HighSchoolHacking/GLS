/// <reference path="CLikeLanguage.ts" />
/// <reference path="Casing/CaseStyle.ts" />
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
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for the TypeScript language.
     */
    export class TypeScript extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         * 
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void {
            arrays.className = "Array";
            arrays.length = new Properties.NativeCallProperties(
                "length",
                Properties.NativeCallScope.Member,
                Properties.NativeCallType.Property);
        }

        /**
         * Generates metadata on booleans.
         * 
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void {
            booleans.className = "boolean";
        }

        /**
         * Generates metadata on classes.
         * 
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            super.generateClassProperties(classes);

            classes.aliases = {
                "dictionary": "object",
                "double": "number",
                "float": "number",
                "int": "number"
            };
            classes.constructorKeyword = "constructor";
            classes.constructorUsesKeyword = true;
            classes.declareExtendsLeft = " extends ";
            classes.declareStartRight = " {";
            classes.superConstructor = "super";
        }

        /**
         * Generates metadata on class member variables.
         * 
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: Properties.ClassMemberVariableProperties): void {
            super.generateClassMemberVariableProperties(variables);

            variables.protectedCase = Casing.CaseStyle.CamelCase;
            variables.publicCase = Casing.CaseStyle.CamelCase;
        }

        /**
         * Generates metadata on comments.
         * 
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void {
            super.generateCommentProperties(comments);

            comments.docEnd = " */";
            comments.docLineEnd = "";
            comments.docLineStart = " * ";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "summary": "\0",
                "parameter": ""
            };
            comments.docTagEnd = " ";
            comments.docTagSpaceAfter = "  ";
            comments.docTagStart = "@";
            comments.docStart = "/**";
        }

        /**
         * Generates metadata on conditionals.
         * 
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void {
            super.generateConditionalProperties(conditionals);

            conditionals.continueLeft = "} ";
            conditionals.continueRight = " {";
            conditionals.startRight = ") {";
        }

        /**
         * Generates metadata on dictionaries.
         * 
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void {
            dictionaries.className = "Object";
            dictionaries.containsKey = new Properties.NativeCallProperties(
                "hasOwnProperty",
                Properties.NativeCallScope.Member,
                Properties.NativeCallType.Function);
            dictionaries.keys = new Properties.NativeCallProperties(
                "Object.keys",
                Properties.NativeCallScope.Static,
                Properties.NativeCallType.Function);
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairComma = ",";
            dictionaries.initializePairLeft = "";
            dictionaries.initializePairMiddle = ": ";
            dictionaries.initializePairRight = "";
            dictionaries.initializeStart = "{";
            dictionaries.typeLeft = "{ [i: ";
            dictionaries.typeMiddle = "]: ";
            dictionaries.typeRight = " }";
        }

        /**
         * Generates metadata on enums.
         * 
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: Properties.EnumProperties): void {
            super.generateEnumProperties(enums);

            enums.declareStartRight = " {";
            enums.declareLastRight = "";
        }

        /**
         * Generates metadata on exceptions.
         * 
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void {
            super.generateExceptionProperties(exceptions);

            exceptions.className = "Error";
        }

        /**
         * Generates metadata on functions.
         * 
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void {
            super.generateFunctionProperties(functions);

            functions.defineStartLeft = "function ";
            functions.defineStartRight = " {";
            functions.returnTypeAfterName = true;
            functions.returnTypeMarker = ": ";
        }

        /**
         * Generates general metadata.
         * 
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void {
            general.extension = ".ts";
            general.name = "TypeScript";
        }

        /**
         * Generates metadata on imports.
         * 
         * @param imports   A property container for metadata on imports.
         */
        protected generateImportProperties(imports: Properties.ImportProperties): void {
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
            lists.asArray = true;
            lists.push = new Properties.NativeCallProperties(
                "push",
                Properties.NativeCallScope.Member,
                Properties.NativeCallType.Function);
        }

        /**
         * Generates metadata on loops.
         * 
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void {
            super.generateLoopProperties(loops);

            loops.foreach = "for";
            loops.forEachGetKeys = "";
            loops.forEachGetPairs = "";
            loops.forEachMiddle = " in ";
            loops.forEachPairsAsKeys = true;
            loops.forEachRight = "";
        }

        /**
         * Generates metadata on numbers.
         * 
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void {
            numbers.className = "Number";
        }

        /**
         * Generates metadata on operators.
         * 
         * @param operators   A property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: Properties.OperatorProperties): void {
            super.generateOperatorProperties(operators);

            operators.equalTo = "===";
            operators.notEqualTo = "!==";
        }

        /**
         * Generates metadata on output.
         * 
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void {
            output.print = "console.log";
        }

        /**
         * Generates metadata on style.
         * 
         * @param style   The property container for metadata on style. 
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void {
            super.generateStyleProperties(style);

            style.fileEndLines = ["}"];
            style.fileIndentation = 1;
            style.fileStartLines = ["namespace {0} {"];

            style.mainEndLines = ["})();"];
            style.mainIndentation = 1;
            style.mainStartLines = [
                "(() => {"
            ];

            style.printEnd = ")";
            style.printStart = "console.log(";
        }

        /**
         * Generates metadata on strings.
         * 
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            super.generateStringProperties(strings);

            strings.className = "String";
            strings.index = new Properties.NativeCallProperties(
                "indexOf",
                Properties.NativeCallScope.Member,
                Properties.NativeCallType.Function);
            strings.length = new Properties.NativeCallProperties(
                "length",
                Properties.NativeCallScope.Member,
                Properties.NativeCallType.Property);
        }

        /**
         * Generates metadata on variables.
         * 
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            super.generateVariableProperties(variables);

            variables.aliases = {
                "infinity": "Infinity"
            };
            variables.castLeft = "<";
            variables.castRight = ">";
            variables.declaration = "let ";
            variables.explicitTypes = true;
            variables.null = "undefined";
            variables.typesAfterName = true;
            variables.typeLeft = ": ";
        }
    }
}
