/// <reference path="Language.ts" />
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
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for a Pythonic language.
     */
    export abstract class PythonicLanguage extends Language {
        /**
         * Generates metadata on classes.
         * 
         * @param classes   The property container for metadata on classes. 
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            classes.defineStartLeft = "class ";
            classes.defineStartRight = ":";
            classes.newStart = "new ";
            classes.staticLabel = "static ";
            classes.this = "self";
        }

        /**
         * Generates metadata on class generics.
         * 
         * @param generics   The property container for metadata on class generics. 
         */
        protected generateClassGenericProperties(generics: Properties.ClassGenericProperties): void {
            // Unused
        }

        /**
         * Generates metadata on class members.
         * 
         * @param members   The property container for metadata on class members. 
         */
        protected generateClassMemberProperties(members: Properties.ClassMemberProperties): void {
            members.functionStart = "";
            members.privacy = false;
            members.staticDecorator = "static ";
            members.variableStart = "";
            members.variableDefault = "";
        }

        /**
         * Generates metadata on conditionals.
         * 
         * @param conditionals   The property container for metadata on conditionals. 
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void {
            conditionals.continueLeft = "";
            conditionals.else = "else";
            conditionals.end = "\0";
            conditionals.if = "if";
            conditionals.startLeft = " ";
            conditionals.while = "while";
        }

        /**
         * Generates properties on dictionaries.
         * 
         * @param dictionaries   The property container for metadata on dictionaries. 
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void {
            dictionaries.containsKey = new Properties.NativeCallProperties(
                " in ",
                Properties.NativeCallScope.Operator,
                Properties.NativeCallType.FloatingLeft);
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairComma = ",";
            dictionaries.initializePairLeft = "";
            dictionaries.initializePairMiddle = ": ";
            dictionaries.initializePairRight = "";
            dictionaries.initializeStart = "{";
        }

        /**
         * Generates metadata on enums.
         * 
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: Properties.EnumProperties): void {
            enums.declareStartLeft = "class ";
            enums.declareValueRight = "";
            enums.declareCommaRight = "";
            enums.declareLastRight = "";
            enums.valueLeft = "";
            enums.valueRight = "";
        }

        /**
         * Generates metadata on exceptions.
         * 
         * @param exceptions   The property container for metadata on exceptions. 
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void {
            exceptions.catch = "catch";
            exceptions.finally = "finally";
            exceptions.throw = "throw";
            exceptions.try = "try";
            exceptions.variablePrefix = "";
        }

        /**
         * Generates metadata on functions.
         * 
         * @param functions   The property container for metadata on functions. 
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void {
            functions.defineStartLeft = "def ";
            functions.defineStartRight = ":";
        }

        /**
         * Generates metadata on lambdas.
         * 
         * @param lambdas   The property container for metadata on lambdas. 
         */
        protected generateLambdaProperties(lambdas: Properties.LambdaProperties): void {
            lambdas.startLeft = "lambda ";
            lambdas.startMiddle = ": ";
            lambdas.startRight = "";
        }

        /**
         * Generates metadata on lists.
         * 
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: Properties.ListProperties): void {
            lists.asArray = true;
        }

        /**
         * Generates metadata on loops.
         * 
         * @param loops   The property container for metadata on loops. 
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void {
            loops.break = "break";
            loops.continue = "continue";
            loops.for = "for";
            loops.foreach = "for";
            loops.forEachMiddle = " in ";
            loops.rangedForLoops = true;
        }

        /**
         * Generates metadata on operators.
         * 
         * @param operators   The property container for metadata on operators. 
         */
        protected generateOperatorProperties(operators: Properties.OperatorProperties): void {
            operators.and = "&&";
            operators.decreaseBy = "-=";
            operators.divide = "/";
            operators.divideBy = "/=";
            operators.equals = "=";
            operators.equalTo = "==";
            operators.greaterThan = ">";
            operators.greaterThanOrEqualTo = ">=";
            operators.increaseBy = "+=";
            operators.lessThan = "<";
            operators.lessThanOrEqualTo = "<=";
            operators.minus = "-";
            operators.mod = "%";
            operators.multiplyBy = "*=";
            operators.not = "!";
            operators.notEqualTo = "!=";
            operators.or = "||";
            operators.plus = "+";
            operators.times = "*";
        }

        /**
         * Generates metadata on style.
         * 
         * @param style   The property container for metadata on style. 
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void {
            style.fileEndLines = [];
            style.fileIndentation = 0;
            style.fileStartLines = [];

            style.semicolon = "";
        }

        /**
         * Generates metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            strings.concatenate = " + ";
        }

        /**
         * Generates metadata on variables.
         * 
         * @param variables   The property container for metadata on variables. 
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            variables.aliases = {
                "false": "False",
                "infinity": "inf",
                "true": "True"
            };
            variables.declaration = "";
            variables.null = "None";
        }
    }
}
