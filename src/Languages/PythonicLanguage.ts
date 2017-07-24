import { CaseStyle } from "./Casing/CaseStyle";
import { Language } from "./Language";
import { ClassProperties } from "./Properties/ClassProperties";
import { ClassGenericProperties } from "./Properties/ClassGenericProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
import { ConditionalProperties } from "./Properties/ConditionalProperties";
import { DictionaryProperties } from "./Properties/DictionaryProperties";
import { EnumProperties } from "./Properties/EnumProperties";
import { ExceptionProperties } from "./Properties/ExceptionProperties";
import { FileProperties } from "./Properties/FileProperties";
import { FunctionProperties } from "./Properties/FunctionProperties";
import { LambdaProperties } from "./Properties/LambdaProperties";
import { ListProperties } from "./Properties/ListProperties";
import { LoopProperties } from "./Properties/LoopProperties";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties";
import { OperatorProperties } from "./Properties/OperatorProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StyleProperties } from "./Properties/StyleProperties";
import { VariableProperties } from "./Properties/VariableProperties";

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
        exceptions.throw = "raise";
        exceptions.try = "try";
        exceptions.variablePrefix = "";

        exceptions.blockEnd = "";
        exceptions.tryStartRight = ":";
        exceptions.finallyStartRight = ":";
        exceptions.catchStartMiddle = " ";
        exceptions.catchStartLink = " as ";
        exceptions.catchStartRight = ":";

        exceptions.throwExceptionMiddle = "(";
        exceptions.throwExceptionRight = ")";

        exceptions.requiresExceptionType = true;
    }

    /**
     * Generates metadata on file contents.
     * 
     * @param file   The property container for metadata on contents.
     */
    protected generateFileProperties(files: FileProperties): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemLowerCase;
        files.startLines = [];
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   The property container for metadata on functions. 
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        functions.defineStartLeft = "def ";
        functions.defineStartRight = ":";
        functions.requiresExceptions = false;
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
        loops.forEachStartItteration = " ";
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " ";
        loops.whileStartRight = ":";
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
