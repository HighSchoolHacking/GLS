import { CLikeLanguage } from "./CLikeLanguage.ts";
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
 * A summary of information for the Java language.
 */
export class Java extends CLikeLanguage {
    /**
     * Generates metadata on arrays.
     * 
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        arrays.className = "Array";
        arrays.initializeAsNew = true;
        arrays.initializeByType = true;
        arrays.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on booleans.
     * 
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanProperties(booleans: BooleanProperties): void {
        booleans.className = "boolean";
    }

    /**
     * Generates metadata on classes.
     * 
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.aliases = {
            "boolean": "boolean",
            "dictionary": "HashMap",
            "list": "ArrayList",
            "number": "double"
        };
        classes.declareExtendsLeft = " extends ";
        classes.declareStartRight = " {";
        classes.superConstructor = "super";
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.protectedCase = CaseStyle.CamelCase;
        variables.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on comments.
     * 
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentProperties(comments: CommentProperties): void {
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
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
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
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        dictionaries.className = "HashMap";
        dictionaries.containsKey = new NativeCallProperties(
            "containsKey",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.keys = new NativeCallProperties(
            "keySet",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.initializeAsNew = true;
        dictionaries.initializeEnd = "}}";
        dictionaries.initializePairComma = "";
        dictionaries.initializeStart = "() {{";
        dictionaries.initializePairLeft = "put(";
        dictionaries.initializePairMiddle = ", ";
        dictionaries.initializePairRight = ");";
        dictionaries.requiredImports = {
            "java.util": ["HashMap"]
        };
        dictionaries.typeLeft = "<";
        dictionaries.typeMiddle = ", ";
        dictionaries.typeRight = ">";
    }

    /**
     * Generates metadata on enums.
     * 
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartRight = " {";
        enums.declareValueLeft = "(";
        enums.declareValueRight = ")";
        enums.declareLastRight = "";
    }

    /**
     * Generates metadata on exceptions.
     * 
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        exceptions.className = "Exception";
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.defineStartLeft = " ";
        functions.defineStartRight = " {";
    }

    /**
     * Generates general metadata.
     * 
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.name = "Java";
        general.extension = ".java";
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.PackageLowerCase;
        imports.explicit = true;
        imports.explicitLines = true;
        imports.left = "import ";
        imports.middle = ".";
        imports.right = ";";
    }

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        super.generateLambdaProperties(lambdas);

        lambdas.functionMiddle = ") -> ";
    }

    /**
     * Generates metadata on lists.
     * 
     * @param lists   A property container for metadata on lists.
     */
    protected generateListProperties(lists: ListProperties): void {
        lists.className = "ArrayList";
        lists.push = new NativeCallProperties(
            "add",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.requiredImports = {
            "java.util": ["ArrayList"]
        };
    }

    /**
     * Generates metadata on loops.
     * 
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopProperties(loops: LoopProperties): void {
        super.generateLoopProperties(loops);

        loops.foreach = "for";
        loops.forEachGetKeys = ".keySet()";
        loops.forEachGetPairs = ".entrySet()";
        loops.forEachMiddle = " : ";
        loops.forEachPairsAsPair = true;
        loops.forEachPairsPairClass = "Map.Entry";
        loops.forEachPairsRetrieveKey = ".getKey()";
        loops.forEachPairsRetrieveValue = ".getValue()";
        loops.forEachRight = "";
    }

    /**
     * Generates metadata on numbers.
     * 
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateNumberProperties(numbers: NumberProperties): void {
        numbers.className = "double";
    }

    /**
     * Generates metadata on output.
     * 
     * @param output   A property container for metadata on output.
     */
    protected generateOutputProperties(output: OutputProperties): void {
        output.print = "System.out.println";
    }

    /**
     * Generates metadata on strings.
     * 
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.className = "string";
        strings.index = new NativeCallProperties(
            "indexOf",
            NativeCallScope.Member,
            NativeCallType.Function);
        strings.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on style.
     * 
     * @param style   A property container for metadata on style.
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);

        style.fileEndLines = [];
        style.fileIndentation = 0;
        style.fileStartLines = [
            "package {0};",
            "",
            "import java.util.*;",
            "",
        ];

        style.mainEndLines = [
            "    }",
            "}"
        ];
        style.mainIndentation = 2;
        style.mainStartLines = [
            "class Program {",
            "    public static void main(String[] args) {",
        ];

        style.printEnd = ")";
        style.printStart = "System.out.println(";
    }

    /**
     * Generates metadata on variables.
     * 
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            "infinity": "double.POSITIVE_INFINITY"
        };
        variables.castLeft = "(";
        variables.castRight = ")";
        variables.declaration = "";
        variables.explicitTypes = true;
        variables.null = "null";
    }
}
