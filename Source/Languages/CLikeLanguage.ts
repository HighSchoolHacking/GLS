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
     * A summary of information for a C-like language.
     */
    export abstract class CLikeLanguage extends Language {
        /**
         * Generates metadata on classes.
         * 
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            classes.defineInheritanceRight = "";
            classes.defineEnd = "}";
            classes.defineStartLeft = "class ";
            classes.defineStartRight = " {";
            classes.newStart = "new ";
            classes.staticLabel = "static ";
            classes.this = "this";
        }

        /**
         * Generates metadata on class generics.
         * 
         * @param members   A property container for metadata on class generics.
         */
        protected generateClassGenericProperties(generics: Properties.ClassGenericProperties): void {
            generics.left = "<";
            generics.middle = ", ";
            generics.right = ">";
            generics.used = true;
        }

        /**
         * Generates metadata on classmembers.
         * 
         * @param members   A property container for metadata on class members.
         */
        protected generateClassMemberProperties(members: Properties.ClassMemberProperties): void {
            members.functionStart = "";
            members.privacy = true;
            members.private = "private ";
            members.protected = "protected ";
            members.public = "public ";
            members.staticDecorator = "static ";
            members.variableStart = "";
            members.variableDefault = "";
        }

        /**
         * Generates metadata on comments.
         * 
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void {
            comments.blockEnd = "*/";
            comments.blockLineLeft = "";
            comments.blockLineRight = "";
            comments.blockStart = "/*";
            comments.lineLeft = "// ";
            comments.lineRight = "";
        }

        /**
         * Generates metadata on conditionals.
         * 
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void {
            conditionals.elif = "else if";
            conditionals.else = "else";
            conditionals.end = "}";
            conditionals.if = "if";
            conditionals.startLeft = " (";
            conditionals.while = "while";
        }

        /**
         * Generates metadata on enums.
         * 
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: Properties.EnumProperties): void {
            enums.declareStartLeft = "enum ";
            enums.declareValueLeft = " = ";
            enums.declareValueRight = "";
            enums.declareCommaRight = ",";
            enums.declareEnd = "}";
            enums.valueLeft = "";
            enums.valueMiddle = ".";
            enums.valueRight = "";
        }

        /**
         * Generates metadata on exceptions.
         * 
         * @param exceptions   A property container for metadata on exceptions.
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
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void {
            functions.defineEnd = "}";
            functions.explicitReturns = true;
        }

        /**
         * Generates metadata on lambdas.
         * 
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: Properties.LambdaProperties): void {
            lambdas.startLeft = "(";
            lambdas.startMiddle = ") => ";
            lambdas.startRight = "";
        }

        /**
         * Generates metadata on loops.
         * 
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void {
            loops.break = "break";
            loops.continue = "continue";
            loops.for = "for";
            loops.forEachEnd = "}";
            loops.forEachRight = ") {";
        }

        /**
         * Generates metadata on operators.
         * 
         * @param operators   A property container for metadata on operators.
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
         * Generates metadata on strings.
         * 
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            strings.concatenate = " + ";
        }

        /**
         * Generates metadata on style.
         * 
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void {
            style.semicolon = ";";
        }

        /**
         * Generates metadata on variables.
         * 
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            variables.declarationRequired = true;
        }
    }
}
