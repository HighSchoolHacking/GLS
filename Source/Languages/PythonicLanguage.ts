import { Language } from "./Language.ts";
import { CaseStyle } from "./Casing/CaseStyle.ts";
import { ArrayProperties } from "./Properties/ArrayProperties.ts";
import { BooleanProperties } from "./Properties/BooleanProperties.ts";
import { ClassProperties } from "./Properties/ClassProperties.ts";
import { ClassGenericProperties } from "./Properties/ClassGenericProperties.ts";
import { ClassMemberProperties } from "./Properties/ClassMemberProperties.ts";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties.ts";
import { CommentProperties } from "./Properties/CommentProperties.ts";
import { ConditionalProperties } from "./Properties/ConditionalProperties.ts";
import { DictionaryProperties } from "./Properties/DictionaryProperties.ts";
import { EnumProperties } from "./Properties/EnumProperties.ts";
import { ExceptionProperties } from "./Properties/ExceptionProperties.ts";
import { FunctionProperties } from "./Properties/FunctionProperties.ts";
import { GeneralProperties } from "./Properties/GeneralProperties.ts";
import { ImportProperties } from "./Properties/ImportProperties.ts";
import { LambdaProperties } from "./Properties/LambdaProperties.ts";
import { ListProperties } from "./Properties/ListProperties.ts";
import { LoopProperties } from "./Properties/LoopProperties.ts";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties.ts";
import { NumberProperties } from "./Properties/NumberProperties.ts";
import { OperatorProperties } from "./Properties/OperatorProperties.ts";
import { OutputProperties } from "./Properties/OutputProperties.ts";
import { StringProperties } from "./Properties/StringProperties.ts";
import { StyleProperties } from "./Properties/StyleProperties.ts";
import { VariableProperties } from "./Properties/VariableProperties.ts";

/**
 * A summary of information for a Pythonic language.
 */
export abstract class PythonicLanguage extends Language {
    /**
     * Generates metadata on classes.
     * 
     * @param classes   The property container for metadata on classes. 
     */
    protected generateClassProperties(classes: ClassProperties): void {
        classes.constructorUsesKeyword = true;
        classes.newStart = "new ";
        classes.staticLabel = "static ";
        classes.this = "self";
    }

    /**
     * Generates metadata on class generics.
     * 
     * @param generics   The property container for metadata on class generics. 
     */
    protected generateClassGenericProperties(generics: ClassGenericProperties): void {
        // Unused
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        variables.private = "";
        variables.protected = "";
        variables.public = "";
        variables.publicPrefix = "";
        variables.skipMemberVariables = true;
    }

    /**
     * Generates metadata on conditionals.
     * 
     * @param conditionals   The property container for metadata on conditionals. 
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
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
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        dictionaries.containsKey = new NativeCallProperties(
            " in ",
            NativeCallScope.Operator,
            NativeCallType.FloatingLeft);
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
    protected generateEnumProperties(enums: EnumProperties): void {
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
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
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
    protected generateFunctionProperties(functions: FunctionProperties): void {
        functions.defineStartLeft = "def ";
        functions.defineStartRight = ":";
    }

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   The property container for metadata on lambdas. 
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        lambdas.parameterTypeRequired = false;
        lambdas.returnTypeRequired = false;
    }

    /**
     * Generates metadata on lists.
     * 
     * @param lists   A property container for metadata on lists.
     */
    protected generateListProperties(lists: ListProperties): void {
        lists.asArray = true;
    }

    /**
     * Generates metadata on loops.
     * 
     * @param loops   The property container for metadata on loops. 
     */
    protected generateLoopProperties(loops: LoopProperties): void {
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
    protected generateOperatorProperties(operators: OperatorProperties): void {
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
    protected generateStyleProperties(style: StyleProperties): void {
        style.fileEndLines = [];
        style.fileIndentation = 0;
        style.fileStartLines = [];

        style.semicolon = "";
    }

    /**
     * Generates metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        strings.concatenate = " + ";
    }

    /**
     * Generates metadata on variables.
     * 
     * @param variables   The property container for metadata on variables. 
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        variables.aliases = {
            "false": "False",
            "infinity": "inf",
            "true": "True"
        };
        variables.declaration = "";
        variables.null = "None";
    }
}
